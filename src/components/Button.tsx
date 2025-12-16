import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  children?: ReactNode;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm uppercase tracking-wider cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-pink-600 border-none",
    outline: "border border-primary text-pink-500 hover:bg-primary hover:text-white"
  } as const;

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};