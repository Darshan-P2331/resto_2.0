import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import {
  type RegisterFormValues,
  registerSchema,
} from "../../../utils/schema/authSchema";
import {
  AuthStyle,
  FormName,
  FormRefStyle,
  FormStyle,
  LinkStyle,
} from "./AuthStyle";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

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
        <Input
            register={register}
            name="name"
            placeholder="Name"
            error={errors.name?.message}
          />
          <Input
            register={register}
            name="email"
            placeholder="Email"
            type="email"
            error={errors.email?.message}
          />
        <Input
            register={register}
            name="password"
            placeholder="Password"
            type="password"
            error={errors.password?.message}
          />
        <Input
            register={register}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            error={errors.confirmPassword?.message}
          />
        <Button className="w-full mx-0 my-4 text-center" type="submit">Register</Button>
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
