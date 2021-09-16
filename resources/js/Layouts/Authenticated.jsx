import { Head } from "@inertiajs/inertia-react";
import AuthenticatedHeader from "@/Components/AuthenticatedHeader";
import AuthenticatedSidebar from "@/Components/AuthenticatedSidebar";
import AuthProvider from "@/Providers/AuthProvider";

export default function Authenticated({ title, auth, children }) {
  return (
    <AuthProvider auth={auth}>
      <Head title={title} />

      <div className="relative min-h-screen flex flex-col items-center bg-gray-100 pb-10">
        <div className="absolute top-0 w-full h-44 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 shadow"></div>

        {/* header */}
        <AuthenticatedHeader className="relative" />

        {/* content */}
        <div className="relative container w-full min-h-full flex space-x-5 pt-7">
          <aside className="w-1/4">
            <AuthenticatedSidebar />
          </aside>
          <main className="w-3/4">
            <h1 className="font-bold text-3xl text-gray-100 mb-5">{title}</h1>
            {children}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
