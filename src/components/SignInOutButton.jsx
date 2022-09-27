import { useAuth, useSigninCheck } from "reactfire";
import { signInWithGoogle, signOut } from "../utils/firebase/auth";

export default function SignInOutButton() {
  const { data: signInCheckResult } = useSigninCheck();
  const auth = useAuth();

  return signInCheckResult.signedIn ? (
    <span onClick={() => signOut(auth)}>Sign out</span>
  ) : (
    <span onClick={() => signInWithGoogle(auth)}>Sign in with Google</span>
  );
}