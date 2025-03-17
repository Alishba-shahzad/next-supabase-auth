"use client";
import { createClient } from '@/utils/supabase/client'

const GoogleSignInButton = ({ supabase }: { supabase: any }) => {
  return (
    <button
      onClick={() => {
        supabase.auth.signInWithOAuth({
          provider: "google",
        });
      }}
      className="flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-black font-medium py-2 px-4 rounded-md shadow-sm transition duration-150 ease-in-out"
    >
      <img
        src="/images/google.svg"
        alt="Google Icon"
        className="h-5 w-5 mr-2"
      />
      Sign In with Google
    </button>
  );
};

export default GoogleSignInButton;
