import type { Section as SectionModel, Sheet } from "../types";
import { BlockRenderer } from "./blocks";

function Section({ section }: { section: SectionModel }) {
  return (
    <section id={section.id}>
      {section.eyebrow ? <p className="sec-eyebrow">{section.eyebrow}</p> : null}
      {section.title ? <h2>{section.title}</h2> : null}
      {section.blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </section>
  );
}

/** Top-level renderer for an academy sheet (header, nav, sections, footer). */
export function DrillSheet({ sheet }: { sheet: Sheet }) {
  const { meta, nav, sections, footer } = sheet;
  return (
    <div className="academy">
      <div className="wrap">
        <header>
          <p className="eyebrow">{meta.track}</p>
          <h1>
            <span className="lvl">{meta.level}</span>
            {meta.title}
          </h1>
          <div className="specline">
            {meta.specs.map((spec, i) => (
              <span key={i}>
                {`${spec.label} `}
                <b>{spec.value}</b>
              </span>
            ))}
          </div>
        </header>

        <nav aria-label={meta.navLabel}>
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        {sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        <footer>{footer}</footer>
      </div>
    </div>
  );
}
