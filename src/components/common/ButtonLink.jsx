export default function ButtonLink({
  children,
  href,
  variant = "primary",
  target = "_self",
  ...props
}) {
  const baseClasses =
    "px-5 py-2 rounded-3xl transition-colors duration-300 inline-block text-center";

  const variants = {
    primary: "bg-[#295e90] text-white hover:bg-[#3479b8]",
    secondary:
      "border border-[#295e90] text-[#295e90] hover:bg-[#3479b8] hover:text-white hover:border-[#3479b8]",
  };

  const classes = `${baseClasses} ${variants[variant]}`;

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={classes}
      {...props}
    >
      {children}
    </a>
  );
}
