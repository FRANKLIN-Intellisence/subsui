const Button = (props) => {
    return (
        <a href="">
            <button className="bg-[#00ffff] text-[#fff] px-4 py-2 rounded-[5px] font-semibold cursor-pointer">
                {props.name}
            </button>
        </a>
    )
}

export default Button;