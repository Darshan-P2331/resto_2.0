import { Link } from "react-router";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="grid h-[calc(100vh-8.5rem)] px-6 py-24 bg-gray-100 place-items-center sm:py-32 lg:px-8 dark:bg-gray-900">
      <div className="text-center">
        <p className="text-4xl font-semibold text-(--background-hover)">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-(--primary-text) text-balance sm:text-7xl dark:text-white">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-400 text-pretty sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-(--background-hover) px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-(--primary-text) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--background-hover)"
          >
            Go back home
          </Link>
          <Link
            to="#"
            className="text-sm font-semibold text-(--primary-text) dark:text-white"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
