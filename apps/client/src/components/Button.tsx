import type { ElementType, HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  as?: ElementType;
};

const ButtonStyle = `inline-block mt-4 cursor-pointer bg-(--background-hover) text-[1.7rem] text-white py-[.7rem] px-[1.8rem] rounded-lg hover:bg-(--primary-text) dark:hover:bg-white dark:hover:text-(--background-hover)`;

export default function Button({
  as: Component = "button",
  children,
  className,
  type = "submit",
  ...props
}: Props) {
  return (
    <Component type={type} className={`${className} ${ButtonStyle}`} {...props}>
      {children}
    </Component>
  );
}
