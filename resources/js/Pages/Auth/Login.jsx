import { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import ApplicationLogo from "@/Components/ApplicationLogo";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ auth, status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: "",
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };

  const submit = (event) => {
    event.preventDefault();

    post(route("login"));
  };

  return (
    <Guest title="Login" auth={auth}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="mb-8">
          <ApplicationLogo className="w-20 h-20 text-red-600" />
        </div>
        <div className="w-full p-4 sm:w-5/12 sm:bg-gray-50 sm:rounded-md sm:shadow-md">
          {status && (
            <div className="mb-4 px-4 py-2 font-semibold text-sm bg-green-100 text-green-600 rounded-md">
              {status}
            </div>
          )}

          <ValidationErrors errors={errors} />

          <form onSubmit={submit}>
            <div>
              <Input
                label="Email"
                type="text"
                name="email"
                value={data.email}
                autoComplete="email"
                isFocused={true}
                handleChange={onHandleChange}
              />
            </div>

            <div className="mt-4">
              <Input
                label="Password"
                type="password"
                name="password"
                value={data.password}
                autoComplete="current-password"
                handleChange={onHandleChange}
              />
            </div>

            <div className="block mt-4">
              <Checkbox
                label="Remember me"
                name="remember"
                value={data.remember}
                handleChange={onHandleChange}
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              {canResetPassword && (
                <Link
                  href={route("password.request")}
                  className="text-sm text-blue-600 hover:text-blue-900"
                >
                  Forgot your password?
                </Link>
              )}

              <Button className="ml-4" processing={processing}>
                Log in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Guest>
  );
}
