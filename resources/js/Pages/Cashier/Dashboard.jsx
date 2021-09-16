import Authenticated from "@/Layouts/Authenticated";

export default function Dashboard({ auth }) {
  return (
    <Authenticated title="Dashboard" auth={auth}>
      <div className="p-6 bg-white shadow-md rounded">Welcome cashier...</div>
    </Authenticated>
  );
}
