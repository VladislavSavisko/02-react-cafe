import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.button}
        onClick={() => onVote("good")}
        aria-label="Vote for good"
      >
        Good
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => onVote("neutral")}
        aria-label="Vote for neutral"
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => onVote("bad")}
        aria-label="Vote for bad"
      >
        Bad
      </button>
      {canReset && (
        <button
          type="button"
          className={`${css.button} ${css.reset}`}
          onClick={onReset}
          aria-label="Reset votes"
        >
          Reset
        </button>
      )}
    </div>
  );
}