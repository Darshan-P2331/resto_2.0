import type { FieldPath, FieldValues, UseFormRegister } from "react-hook-form";
import Message from "./Message";
import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react";

type Props<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
  name: FieldPath<T>;
  register: UseFormRegister<T>;
  error?: string;
};

const InputStyle: string = `my-[0.7rem] mx-0 rounded-lg py-4 px-[1.2rem] w-full text-[1.6rem] bg-[#f7f7f7] normal-case text-(--primary-text) dark:text-white dark:bg-gray-900`;

export default function Input<T extends FieldValues>({
  name,
  register,
  error,
  type = "text",
  ...props
}: Props<T>) {
  return (
    <div>
      <input
        {...register(name)}
        type={type}
        className={InputStyle}
        {...props}
      />
      {error && <Message variant="danger">{error}</Message>}
    </div>
  );
}

type SelectProp<T extends FieldValues> =
  SelectHTMLAttributes<HTMLSelectElement> & {
    children: ReactNode;
    name: FieldPath<T>;
    register: UseFormRegister<T>;
    error?: string;
  };

export function Select<T extends FieldValues>({
  children,
  name,
  register,
  error,
}: SelectProp<T>) {
  return (
    <div>
      <select className={InputStyle} {...register(name)}>
        {children}
      </select>
      {error && <Message variant="danger">{error}</Message>}
    </div>
  );
}
