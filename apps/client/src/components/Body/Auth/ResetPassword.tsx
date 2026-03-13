import { useForm } from "react-hook-form";
import {
  resetPasswordSchema,
  type ResetPasswordValues,
} from "../../../utils/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Message from "../../../utils/Message";
import { AuthStyle, FormName, FormStyle, InputStyle } from "./AuthStyle";

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
  
  return <div className={AuthStyle}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
          }}
          className={FormStyle}
        >
          <h3 className={FormName}>reset password</h3>
          <div>
            <input
              {...register("password")}
              placeholder="Password"
              type="password"
              className={InputStyle}
            />
            {errors.password && (
              <Message variant="danger">{errors.password.message}</Message>
            )}
          </div>
          <div>
            <input
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              type="password"
              className={InputStyle}
            />
            {errors.confirmPassword && (
              <Message variant="danger">{errors.confirmPassword.message}</Message>
            )}
          </div>
          <button type="submit" className="w-full mx-0 my-4 text-center btn">
            reset password
          </button>
        </form>
      </div>;
}
