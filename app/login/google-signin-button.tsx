"use client";

const GoogleSignInButton = ({ supabase }: { supabase: any }) => {
  return (
    <button
      onClick={() => {
        supabase.auth.signInWithOAuth({
          provider: "google",
        });
      }}
      className="bg-white border border-black rounded-md px-4 py-2 text-black text-center"
    >
      Sign In with Google
    </button>
  );
};
export default GoogleSignInButton;
