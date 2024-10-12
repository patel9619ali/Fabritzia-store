import { signOut } from "next-auth/react";

export default function SignInOutLink({ session }: any) {
  return (
    <>
      {session ? (
        <li className="dropdown-item">
          <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
        </li>
      ) : (
        <li>
          <a className="dropdown-item" href="/sign-in">Sign in</a>
        </li>
      )}
    </>
  );
}
