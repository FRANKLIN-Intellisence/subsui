type ButtonProps = {
  name: string;
  link: string;
};

const Button = (props: ButtonProps) => {
  return (
    <a href="">
      <button className="bg-[#00ffff] text-[#000] px-4 py-4 rounded-[5px] text-[1rem] md:text-[1.1rem] font-semibold cursor-pointer">
        {props.name} {props.link}
      </button>
    </a>
  );
};

export default Button;
