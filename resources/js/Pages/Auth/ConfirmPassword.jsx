import { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { useForm } from "@inertiajs/inertia-react";

export default function ConfirmPassword({ auth }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: "",
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("password.confirm"));
  };

  return (
    <Guest title="Confirm Password" auth={auth}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full p-4 sm:w-5/12 sm:bg-gray-50 sm:rounded-md sm:shadow-md">
          <div className="mb-4 text-sm text-gray-600">
            This is a secure area of the application. Please confirm your
            password before continuing.
          </div>

          <ValidationErrors errors={errors} />

          <form onSubmit={submit}>
            <div className="mt-4">
              <Input
                label="Password"
                type="password"
                name="password"
                value={data.password}
                isFocused={true}
                handleChange={onHandleChange}
                required
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <Button className="ml-4" processing={processing}>
                Confirm
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Guest>
  );
}
