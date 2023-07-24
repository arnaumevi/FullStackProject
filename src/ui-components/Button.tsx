interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button onClick={props.onClick} className={className} {...props}>
      {children}
    </button>
  );
};
