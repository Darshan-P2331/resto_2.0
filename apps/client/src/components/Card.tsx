import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

const CardStyle = `relative p-8 text-center rounded-lg bg-[#f7f7f7] dark:bg-gray-800`;

export default function Card({ className, children, ...props }: Props) {
  return (
    <div className={`${CardStyle} ${className}`} {...props}>
      {children}
    </div>
  );
}
