

import sn from "classnames"
import "./button.scss";

const blockName = "button";


const Button = (props) => {
    const { name, onClick, extraClassName, btnRef } = props;
    return (
        <button className={sn(blockName, extraClassName)} onClick={() => onClick()} ref={btnRef}>
            {name}
        </button>

    );
}

export default Button;
