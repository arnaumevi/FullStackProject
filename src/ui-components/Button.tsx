interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
