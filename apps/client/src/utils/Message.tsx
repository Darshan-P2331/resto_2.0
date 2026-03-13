import type { ReactNode } from "react";

type Props = {
  variant: string;
  children: ReactNode;
};

export const AlertStyles: Record<string, string> = {
  success: `text-[##20a020]`,
  danger: "text-[#f01414",
  alert: `p-4 text-[1rem]`,
  "alert-info": `text-[#2020a0]`,
  "alert-danger": `text-[#f01414]`,
  "alert-success": `text-(--background-hover)`,
};

export default function Message({ variant, children }: Props) {
  return (
    <div
      className={`${AlertStyles["alert"]} ${AlertStyles[`alert-${variant || "info"}`]}`}
    >
      {children}
    </div>
  );
}
