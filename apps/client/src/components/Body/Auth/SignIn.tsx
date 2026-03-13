import { useForm } from "react-hook-form";
import {
  signInSchema,
  type SignInFormValues,
} from "../../../utils/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AuthStyle,
  FormName,
  FormRefStyle,
  FormStyle,
  InputStyle,
  LinkStyle,
} from "./AuthStyle";
import { Link } from "react-router";
import Message from "../../../utils/Message";

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
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            className={InputStyle}
          />
          {errors.email && (
            <Message variant="danger">{errors.email.message}</Message>
          )}
        </div>
        <div>
          <input
            {...register("password")}
            placeholder="Passworrd"
            className={InputStyle}
            type="password"
          />
          {errors.password && (
            <Message variant="danger">{errors.password.message}</Message>
          )}
        </div>
        <button type="submit" className="w-full mx-0 my-4 text-center btn">
          log in
        </button>
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
