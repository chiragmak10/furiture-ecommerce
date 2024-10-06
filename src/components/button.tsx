import React, { useState } from "react";
import { cn } from "./utils";

export const Button = ({
  className,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [pending, setPending] = useState(false);
  return (
    <button
      className={cn("bg-blue-100 py-2 px-4", className, {
        "bg-green-200": pending,
      })}
    >
      Submit
    </button>
  );
};
