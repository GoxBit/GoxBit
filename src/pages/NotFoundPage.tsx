import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="grid h-dvh place-items-center bg-bg text-text">
      <div className="text-center">
        <p className="font-mono text-6xl font-bold text-primary">404</p>
        <p className="mt-3 text-text-dim">This sector of the canvas is empty.</p>
        <Link to="/" className="mt-6 inline-block text-primary underline">
          Return to the canvas
        </Link>
      </div>
    </div>
  );
}
