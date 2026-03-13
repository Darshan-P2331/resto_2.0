import { useForm } from 'react-hook-form';
import { forgotPasswordSchema, type ForgotPasswordValues } from '../../../utils/schema/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Message from '../../../utils/Message';
import { AuthStyle, FormName, FormStyle, InputStyle } from './AuthStyle';

type Props = {}

export default function ForgotPassworrd({}: Props) {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ForgotPasswordValues>({
      resolver: zodResolver(forgotPasswordSchema),
      defaultValues: {
        email: ""
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
        <button type="submit" className="w-full mx-0 my-4 text-center btn">
          reset password
        </button>
      </form>
    </div>
  )
}