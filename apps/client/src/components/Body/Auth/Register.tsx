import { useForm } from "react-hook-form";
import {
  type RegisterFormValues,
  registerSchema,
} from "../../../utils/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Message from "../../../utils/Message";
import { Link } from "react-router";
import {
  AuthStyle,
  FormName,
  FormRefStyle,
  FormStyle,
  InputStyle,
  LinkStyle,
} from "./AuthStyle";

type Props = {};

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: RegisterFormValues) => {
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
        <h3 className={FormName}>Register form</h3>
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className={InputStyle}
          />
          {errors.name && (
            <Message variant="danger">{errors.name.message}</Message>
          )}
        </div>
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
        <div>
          <input
            {...register("name")}
            placeholder="Confirm Password"
            className={InputStyle}
            type="password"
          />
          {errors.confirmPassword && (
            <Message variant="danger">{errors.confirmPassword.message}</Message>
          )}
        </div>
        <button type="submit" className="w-full mx-0 my-4 text-center btn">
          Register
        </button>
        <p className={FormRefStyle}>
          already have an account?&nbsp;
          <Link to="/signin" className={LinkStyle}>
            click here
          </Link>
        </p>
      </form>
    </div>
  );
}
