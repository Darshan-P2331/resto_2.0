import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Message from "../../../components/Message";
import {
  signInSchema,
  type SignInFormValues,
} from "../../../utils/schema/authSchema";
import {
  AuthStyle,
  FormName,
  FormRefStyle,
  FormStyle,
  InputStyle,
  LinkStyle,
} from "./AuthStyle";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

type Props = {};

const initialValues = {
  name: "",
  password: "",
};

export default function SignIn({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log(data);
  };

  return (
    <div className={AuthStyle}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }}
        className={FormStyle}
      >
        <h3 className={FormName}>login form</h3>
        <Input
          placeholder="Email"
          type="email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          placeholder="Password"
          type="password"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Button type="submit" className="w-full mx-0 my-4 text-center">
          log in
        </Button>
        <p className={FormRefStyle}>
          forgot password?&nbsp;
          <Link to="/forgot_password" className={LinkStyle}>
            click here
          </Link>
        </p>
        <p className={FormRefStyle}>
          don't have an account?&nbsp;
          <Link to="/register" className={LinkStyle}>
            click here
          </Link>
        </p>
      </form>
    </div>
  );
}
