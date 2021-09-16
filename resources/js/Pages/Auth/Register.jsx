import { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";

export default function Register({ auth }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
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

    post(route("register"));
  };

  return (
    <Guest title="Register" auth={auth}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full p-4 sm:w-5/12 sm:bg-gray-50 sm:rounded-md sm:shadow-md">
          <ValidationErrors errors={errors} />

          <form onSubmit={submit}>
            <div>
              <Input
                label="Name"
                type="text"
                name="name"
                value={data.name}
                autoComplete="name"
                isFocused={true}
                handleChange={onHandleChange}
              />
            </div>

            <div className="mt-4">
              <Input
                label="Email"
                type="email"
                name="email"
                value={data.email}
                autoComplete="email"
                handleChange={onHandleChange}
              />
            </div>

            <div className="mt-4">
              <Input
                label="Password"
                type="password"
                name="password"
                value={data.password}
                autoComplete="new-password"
                handleChange={onHandleChange}
              />
            </div>

            <div className="mt-4">
              <Input
                label="Confirm Password"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                handleChange={onHandleChange}
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <Link
                href={route("login")}
                className="text-sm text-blue-600 hover:text-blue-900"
              >
                Already registered?
              </Link>

              <Button className="ml-4" processing={processing}>
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Guest>
  );
}
