import { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { useForm } from "@inertiajs/inertia-react";

export default function ResetPassword({ auth, token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("password.update"));
  };

  return (
    <Guest title="Reset Password" auth={auth}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full p-4 sm:w-5/12 sm:bg-gray-50 sm:rounded-md sm:shadow-md">
          <ValidationErrors errors={errors} />

          <form onSubmit={submit}>
            <div>
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
                isFocused={true}
                handleChange={onHandleChange}
              />
            </div>

            <div className="mt-4">
              <Input
                label="Confirm Password"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                autoComplete="new-password"
                handleChange={onHandleChange}
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <Button className="ml-4" processing={processing}>
                Reset Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Guest>
  );
}
