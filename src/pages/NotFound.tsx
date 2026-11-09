import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="text-6xl font-bold text-brand-600">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-slate-900">
        Page not found
      </h1>
      <p className="mt-2 text-slate-600">
        The page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-md bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700"
      >
        Back to home
      </Link>
    </div>
  );
}
