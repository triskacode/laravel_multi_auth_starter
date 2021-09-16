import { AuthContext } from "@/Providers/AuthProvider";
import { Link } from "@inertiajs/inertia-react";
import { useContext } from "react";
import ApplicationLogo from "./ApplicationLogo";

export default function GuestHeader() {
  const { auth } = useContext(AuthContext);

  return (
    <header className="container flex h-16 w-full items-center justify-between">
      <div>
        <Link href="/" className="flex items-center space-x-4">
          <ApplicationLogo />
          <span className="text-2xl font-semibold tracking-wider">Laravel</span>
        </Link>
      </div>
      <div>
        {!!auth.user ? (
          <Item href="/dashboard">Dashboard</Item>
        ) : (
          <>
            <Item href={route("login")}>Login</Item>
            <Item href={route("register")}>Register</Item>
          </>
        )}
      </div>
    </header>
  );
}

function Item({ active, href, children }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-gray-600 ${active && "font-semibold"}`}
    >
      {children}
    </Link>
  );
}
