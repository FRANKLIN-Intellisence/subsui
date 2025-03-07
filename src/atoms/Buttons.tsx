import { Link } from "react-router-dom";

type ButtonProps = {
  name: string;
  link: string;
};

const Button = (props: ButtonProps) => {
  return (
    <>
      {props.link && (
        <Link to={props.link}>
          <button className="bg-[#00ffff] text-[#000] px-4 py-4 rounded-[5px] text-[1rem] md:text-[1.1rem] font-semibold cursor-pointer">
            {props.name}
          </button>
        </Link>
      )}

      {!props.link && (
        <button className="bg-[#00ffff] text-[#000] px-4 py-4 rounded-[5px] text-[1rem] md:text-[1.1rem] font-semibold cursor-pointer">
          {props.name}
        </button>
      )}
    </>
  );
};

export default Button;
