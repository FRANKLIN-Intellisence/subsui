import { Link } from "react-router-dom";

type ButtonProps = {
  name: string;
  link: string;
  children?: React.ReactNode;
  onclick?: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <>
      {props.link && (
        <Link to={props.link}>
          <button className="bg-[#00ffff] text-[#000] px-4 py-4 rounded-[15px] text-[1rem] md:text-[1.1rem] cursor-pointer">
            {props.children}
            {props.name}
          </button>
        </Link>
      )}

      {!props.link && (
        <button
          onClick={() => onclick}
          className="bg-[#00ffff] text-[#000] px-4 py-4 rounded-[15px] text-[1rem] md:text-[1.1rem] cursor-pointer"
        >
          {props.name}
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
