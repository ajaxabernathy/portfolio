const Button = ({ label, href }) => {
  return (
    <a
      href={href}
      className="w-fit font-mono uppercase text-[13px] tracking-tight bg-white text-black px-3 py-2 hover:text-white hover:bg-black border-[1px] border-black hover:border-white transition-all duration-200 ease-in-out"
    >
      {label}
    </a>
  );
};

export default Button;
