
import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import Image from "next/image";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    
      const supabase = createClient();

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      
      if (error) {
        return redirect("/login?message=Could not authenticate user");
      }
    return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";
    console.log(formData)
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });
    console.log(error)
    if (error) {
      return redirect(`/login?message=${error.message}`);
    }

    return redirect("/login?message=Check email to continue sign in process");
  };
  const signInWithGoogle = async () => {
    "use server";
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://example.com/auth/callback",
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (data.url) {
      redirect(data.url); // use the redirect API for your server framework
    }
  };
  return (
    <div className="flex-1 flex px-8 items-center gap-2 max-w-4xl w-full">

      <div className="flex-1 flex flex-col p-2 gap-4 relative">
        <div className="flex">
          <Link
            href="/"
            className="py-2 px-4 rounded-md no-underline text-white bg-customFormBg flex items-center group text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>{" "}
            Back
          </Link>
        </div>
        <form className="md:flex flex-1 w-full shadow-3xl rounded-large block">
          <div className="flex-1 flex flex-col w-full justify-center text-foreground p-8 bg-white md:rounded-left rounded-top p-[50px]">
            <div className="flex items-center mb-3">
              <h1 className="flex-1 text-2xl">Sign in</h1>
            </div>
            <div className="flex flex-col">
              <label className="text-md py-1" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-[50px] px-4 py-2 bg-background border outline-0 mb-6 text-sm h-48"
                name="email"
                placeholder="Enter Your Email"
              // required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-md py-1" htmlFor="password">
                Password
              </label>
              <input
                className="rounded-[50px] px-4 py-2 bg-background border outline-0 mb-6 text-sm h-48"
                type="password"
                name="password"
                placeholder="Enter Your Password"
              // required
              />
            </div>
            <SubmitButton
              formAction={signIn}
              className="rounded-[50px] px-4 py-2 text-foreground bg-customFormBg text-white border"
              pendingText="Signing In..."
            >
              Sign In
            </SubmitButton>
            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                {searchParams.message}
              </p>
            )}
            <div className="flex items-center">
              <div className="flex-1 flex gap-2 py-2">
                <input className="w-4 accent-[#f15584]" type="checkbox" id="flexCheckDefault" />
                <label className="hover:cursor-pointer text-textColor">
                  Remember Me!
                </label>
              </div>
              <div className="flex-1 text-right">
                <Link
                  href="#"
                  className="no-underline text-sm text-linkColor"
                >
                  Forgot Password
                </Link>
              </div>
            </div>
          </div>
          <div className="p-[50px] flex-1 text-center flex items-center flex-col justify-center p-8 bg-customFormBg text-white md:rounded-right rounded-bottom">
            <h1 className="text-3xl font-semibold text-center">Welcome To Login</h1>
            <p className="text-md text-center py-2">Don't have an account?</p>
            <div className="py-2">
              <SubmitButton
                formAction={signUp}
                className="transition ease-in-out px-8 py-2 text-white mb-2 rounded-[50px] bg-transparent border border-white hover:text-black hover:bg-white"
                pendingText="Signing Up..."
              >
                Sign Up
              </SubmitButton>
              <div className="flex gap-2 items-center py-2">
                <div className="flex-1">
                  <hr className="border-borderColor" />
                </div>
                <div>OR</div>
                <div className="flex-1">
                  <hr className="border-borderColor" />
                </div>
              </div>
              <div className="flex gap-2">
                <SubmitButton
                  formAction={signInWithGoogle}
                  className="flex items-center gap-2"
                  pendingText="Signing In..."
                >
                  <Image
                    className="bg-background flex gap-2 items-center p-2 rounded-md"
                    src="/images/google.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                </SubmitButton>
                <SubmitButton
                  className="flex items-center gap-2"
                  pendingText="Signing In..."
                >
                  <Image
                    className="bg-background flex gap-2 items-center p-2 rounded-md"
                    src="/images/facebook.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                </SubmitButton>
                <SubmitButton
                  className="flex items-center gap-2"
                  pendingText="Signing In..."
                >
                  <Image
                    className="bg-background flex gap-2 items-center p-2 rounded-md"
                    src="/images/linkedin.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                </SubmitButton>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}