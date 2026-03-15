import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  forgotPasswordSchema,
  type ForgotPasswordValues,
} from "../../../utils/schema/authSchema";
import { AuthStyle, FormName, FormStyle } from "./AuthStyle";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

type Props = {};

export default function ForgotPassworrd({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordValues) => {
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
        <h3 className={FormName}>forgot password</h3>
        <Input
        placeholder="Email"
        type="email"
        register={register}
        name="email"
        error={errors.email?.message}
         />
        <Button type="submit" className="w-full mx-0 my-4 text-center">
          reset password
        </Button>
      </form>
    </div>
  );
}
