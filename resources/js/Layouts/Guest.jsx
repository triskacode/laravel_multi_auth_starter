import { Head } from "@inertiajs/inertia-react";
import GuestHeader from "@/Components/GuestHeader";
import AuthProvider from "@/Providers/AuthProvider";

export default function Guest({ title, auth, children }) {
  return (
    <AuthProvider auth={auth}>
      <Head title={title} />

      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <GuestHeader />

        <div className="container flex-auto h-0">{children}</div>
      </div>
    </AuthProvider>
  );
}
