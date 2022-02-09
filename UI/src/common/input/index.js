
import "./input.scss"

const blockName = "input"

const Input = (props) => {
    const { placeholder, searchValue, onInputChange } = props;

    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => onInputChange(e.target.value)}
            className={blockName}
            value={searchValue}
        />
    );
}

export default Input;
