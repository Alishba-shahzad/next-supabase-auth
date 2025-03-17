"use client";
import { createClient } from "@supabase/supabase-js";
// import { useRouter } from "next/navigation";
// import { createClient } from "@/utils/supabase/client";
// import { SubmitButton } from "@/app/login/submit-button";

// export default function GoogleLoginButton() {
//   const router = useRouter(); 

//   const handleGoogleSignIn = async () => {
//     const supabase = createClient();
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: { redirectTo: "http://localhost:3000/auth/callback" },
//     });

//     if (error) {
//       console.error("Google Sign-In Error:", error);
//     } else if (data?.url) {
//       router.push(data.url); 
//   };

//   return (
//     <SubmitButton onClick={handleGoogleSignIn}>Sign in with Google</SubmitButton>
//   );
// }
// };

