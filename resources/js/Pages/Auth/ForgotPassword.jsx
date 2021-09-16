import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function ForgotPassword({ auth, status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  });

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("password.email"));
  };

  return (
    <Guest title="Forgot Password" auth={auth}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full p-4 sm:w-5/12 sm:bg-gray-50 sm:rounded-md sm:shadow-md">
          
          <div className="mb-4 text-sm text-gray-500 leading-normal">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
          </div>

          {status && (
            <div className="mb-4 font-medium text-sm text-green-600">
              {status}
            </div>
          )}

          <ValidationErrors errors={errors} />

          <form onSubmit={submit}>
            <Input
              type="email"
              name="email"
              value={data.email}
              isFocused={true}
              handleChange={onHandleChange}
            />

            <div className="flex items-center justify-end mt-4">
              <Button className="ml-4" processing={processing}>
                Email Password Reset Link
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Guest>
  );
}
