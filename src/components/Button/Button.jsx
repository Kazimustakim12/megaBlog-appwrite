/* eslint-disable react/prop-types */
const Button = ({
  onClick,
  isActive = false,
  varient = "normal",
  type = "button",
  title,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        (varient === "danger" && "bg-red-500 hover:bg-red-700") ||
        (varient === "success" && "bg-green-500 hover:bg-green-700") ||
        (varient === "warning" && "bg-yellow-500 hover:bg-yellow-700") ||
        (varient === "active" && "bg-blue-500 hover:bg-blue-700") ||
        (varient === "normal" && " hover:bg-blue-700")
      } ${className} mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out   hover:text-neutral-100 focus:text-natural-600 focus:outline-none focus:ring-0 active:text-natural-700 motion-reduce:transition-none`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
