const Button = ({ label, href }) => {
  return (
    <a
      href={href}
      className="font-mono uppercase text-[13px] tracking-tight bg-black text-white px-3 py-2 hover:invert"
    >
      {label}
    </a>
  );
};

export default Button;
