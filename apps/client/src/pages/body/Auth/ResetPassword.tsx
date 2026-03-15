import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  resetPasswordSchema,
  type ResetPasswordValues,
} from "../../../utils/schema/authSchema";
import { AuthStyle, FormName, FormStyle } from "./AuthStyle";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

type Props = {};

export default function ResetPassword({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ResetPasswordValues) => {
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
        <h3 className={FormName}>reset password</h3>
        <Input
          placeholder="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password?.message}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          register={register}
          error={errors.confirmPassword?.message}
          name="confirmPassword"
        />
        <Button type="submit" className="w-full mx-0 my-4 text-center">
          reset password
        </Button>
      </form>
    </div>
  );
}
