import { AuthContext } from "@/Providers/AuthProvider";
import { Link } from "@inertiajs/inertia-react";
import { useContext } from "react";

export default function AuthenticatedSidebar() {
  const { auth } = useContext(AuthContext);

  return (
    <aside className="w-full p-4 bg-gray-50 rounded shadow-md">
      <div className="flex flex-col items-center py-5 space-y-4">
        <div className="w-32 h-32 rounded-full bg-gray-300 border-2 border-gray-400 shadow-md"></div>
        <span className="font-semibold text-xl">{auth.user?.name}</span>
      </div>
      <hr />
      <div className="pt-4 pb-2">
        <Item href={route("dashboard")}>Dashboard</Item>
        <Item href={route("logout")} method="post">
          Logout
        </Item>
      </div>
    </aside>
  );
}

function Item({ href, active, children, ...props }) {
  return (
    <Link
      href={href}
      className={`block p-2 text-gray-600 hover:text-indigo-500 ${
        active && "font-semibold"
      }`}
      {...props}
    >
      {children}
    </Link>
  );
}
