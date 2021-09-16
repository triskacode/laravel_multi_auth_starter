import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function VerifyEmail({ auth, status }) {
  const { post, processing } = useForm();

  const submit = (event) => {
    event.preventDefault();

    post(route("verification.send"));
  };

  return (
    <Guest title="Email Verification" auth={auth}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full p-4 sm:w-5/12 sm:bg-gray-50 sm:rounded-md sm:shadow-md">
          
          <div className="mb-4 text-sm text-gray-600">
            Thanks for signing up! Before getting started, could you verify your
            email address by clicking on the link we just emailed to you? If you
            didn't receive the email, we will gladly send you another.
          </div>

          {status === "verification-link-sent" && (
            <div className="mb-4 px-4 py-2 font-semibold text-sm bg-green-100 text-green-600 rounded-md">
              A new verification link has been sent to the email address you
              provided during registration.
            </div>
          )}

          <form onSubmit={submit}>
            <div className="mt-4 flex items-center justify-between">
              <Button processing={processing}>Resend Verification Email</Button>

              <Link
                href={route("logout")}
                method="post"
                as="button"
                className="underline text-sm text-gray-600 hover:text-gray-900"
              >
                Log Out
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Guest>
  );
}
