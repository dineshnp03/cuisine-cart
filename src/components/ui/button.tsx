import * as React from "react";

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={`bg-gradient-to-r from-[#E47D02] via-[#FF9A1F] to-[#F4A343] flex items-center justify-center text-black px-4 py-2 rounded-full hover:bg-blue-600 ${className}`}
      {...props}
    />
  )
);

Button.displayName = "Button";

export { Button };
