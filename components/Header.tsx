import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";

export default function Header() {
  return (
    <div className="flex flex-col p-3 gap-4 items-center">
      <div className="flex gap-8 justify-center items-center"></div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">

        <a
          target="_blank"
          className="font-bold text-black hover:underline no-underline"
          rel="noreferrer"

        >
          When to sell
        </a>{" "}
      </p>
    </div>
  );
}
