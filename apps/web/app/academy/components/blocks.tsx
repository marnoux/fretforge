import type { ReactNode } from "react";
import type { Block, ProseTone, StandardCheck, TableRow } from "../types";
import { Tab } from "./Tab";
import { TempoLadder } from "./TempoLadder";

function Prose({ tone, body }: { tone?: ProseTone; body: ReactNode }) {
	const className = tone && tone !== "plain" ? tone : undefined;
	return <p className={className}>{body}</p>;
}

function DataTable({ head, rows }: { head: ReactNode[]; rows: TableRow[] }) {
	return (
		<table>
			<tbody>
				<tr>
					{head.map((h, i) => (
						<th key={i}>{h}</th>
					))}
				</tr>
				{rows.map((row, r) => (
					<tr key={r}>
						{row.map((c, i) => (
							<td key={i} className={c.mono ? "t" : undefined}>
								{c.node}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

function Dial({ label, active }: { label: string; active: number }) {
	return (
		<div className="dial">
			<span className="dl">{label}</span>
			{[1, 2, 3, 4, 5, 6, 7].map((n) => (
				<span key={n} className={`dot d${n}${n === active ? " on" : ""}`} />
			))}
		</div>
	);
}

function StandardList({ checks }: { checks: StandardCheck[] }) {
	return (
		<div className="standard">
			{checks.map((c, i) => (
				<div key={i} className={c.isNew ? "std new" : "std"}>
					<div>
						<h4>{c.title}</h4>
						<p>{c.body}</p>
					</div>
				</div>
			))}
		</div>
	);
}

function TendonLaw({
	eyebrow,
	title,
	items,
}: {
	eyebrow: string;
	title: string;
	items: ReactNode[];
}) {
	return (
		<div className="tendon">
			<p className="sec-eyebrow">{eyebrow}</p>
			<h2>{title}</h2>
			<ul>
				{items.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
		</div>
	);
}

function Card({
	code,
	title,
	body,
}: {
	code: string;
	title: string;
	body: Block[];
}) {
	return (
		<div className="drill">
			<div className="drill-head">
				<span className="code">{code}</span>
				<h3>{title}</h3>
			</div>
			{body.map((b, i) => (
				<BlockRenderer key={i} block={b} />
			))}
		</div>
	);
}

export function BlockRenderer({ block }: { block: Block }) {
	switch (block.kind) {
		case "prose":
			return <Prose tone={block.tone} body={block.body} />;
		case "legend":
			return <pre className="tab">{block.body}</pre>;
		case "daytag":
			return (
				<p className="daytag">
					<span>{block.tag}</span>
					{` · ${block.label}`}
				</p>
			);
		case "formula":
			return <p className="formula">{block.body}</p>;
		case "dial":
			return <Dial label={block.label} active={block.active} />;
		case "xref":
			return <span className="xref">{block.body}</span>;
		case "tab":
			return <Tab tab={block.tab} />;
		case "ladder":
			return <TempoLadder ladder={block.ladder} />;
		case "table":
			return <DataTable head={block.head} rows={block.rows} />;
		case "details":
			return (
				<details>
					<summary>{block.summary}</summary>
					{block.body}
				</details>
			);
		case "standard":
			return <StandardList checks={block.checks} />;
		case "tendon":
			return (
				<TendonLaw
					eyebrow={block.eyebrow}
					title={block.title}
					items={block.items}
				/>
			);
		case "card":
			return <Card code={block.code} title={block.title} body={block.body} />;
	}
}
