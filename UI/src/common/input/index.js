import sn from "classnames"

import "./input.scss"

const blockName = "input"

const Input = (props) => {
    const { placeholder, searchValue, onInputChange, extraClasName } = props;

    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => onInputChange(e.target.value)}
            className={sn(blockName, extraClasName)}
            value={searchValue}
        />
    );
}

export default Input;
