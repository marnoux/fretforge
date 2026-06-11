import type { TempoLadder as Ladder } from "../types";

/**
 * The fret-rail tempo ladder. Each rung is a BPM; one rung is the graduation
 * "gate". `onPick` is the future hook for wiring a rung to the metronome
 * (e.g. onPick={(bpm) => metronome.setTempo(bpm)}); when omitted the rungs are
 * static, matching the original markup exactly.
 */
export function TempoLadder({
  ladder,
  onPick,
}: {
  ladder: Ladder;
  onPick?: (bpm: number) => void;
}) {
  return (
    <div className="ladder">
      <span className="lad-label">{ladder.label}</span>
      <div className="rungs">
        {ladder.rungs.map((bpm, i) => {
          const isGate = bpm === ladder.gate;
          const className = isGate ? "rung gate" : "rung";
          const content = (
            <>
              {isGate ? <em>Gate</em> : null}
              {bpm}
            </>
          );
          return onPick ? (
            <button
              key={i}
              type="button"
              className={className}
              onClick={() => onPick(bpm)}
            >
              {content}
            </button>
          ) : (
            <span key={i} className={className}>
              {content}
            </span>
          );
        })}
      </div>
    </div>
  );
}
