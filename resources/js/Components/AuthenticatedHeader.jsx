import { useContext } from "react";
import { AuthContext } from "@/Providers/AuthProvider";
import { Link } from "@inertiajs/inertia-react";
import ApplicationLogo from "./ApplicationLogo";
import Dropdown from "./Dropdown";

export default function AuthenticatedHeader({ className = "" }) {
  const { auth } = useContext(AuthContext);

  return (
    <header
      className={`w-full text-gray-100 ${className}`}
    >
      <div className="container flex h-16 w-full items-center justify-between mx-auto">
        <div>
          <Link href="/" className="flex items-center space-x-4">
            <ApplicationLogo className="text-red-600" />
            <span className="text-2xl font-semibold tracking-wider">
              Laravel
            </span>
          </Link>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Trigger>
              <span className="inline-flex rounded-md">
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                >
                  {auth.user.name}
                </button>
              </span>
            </Dropdown.Trigger>

            <Dropdown.Content>
              <Dropdown.Link href={route("logout")} method="post" as="button">
                Log Out
              </Dropdown.Link>
            </Dropdown.Content>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
