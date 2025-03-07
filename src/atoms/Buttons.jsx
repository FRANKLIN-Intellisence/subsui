const Button = (props) => {
    return (
        <a href="">
            <button className="bg-[#00ffff] text-[#000] px-4 py-4 rounded-[5px] text-xl font-semibold cursor-pointer">
                {props.name}
            </button>
        </a>
    )
}

export default Button;