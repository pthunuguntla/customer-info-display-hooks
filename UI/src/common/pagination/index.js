import sn from "classnames";

import "./pagination.scss"

const blockName = "pagination";



const Pagination = (props) => {

    const { noOfPages, activePageNumber, onPageNumberClick, onLeftArrowClick, onRightArrowClick} = props;

    const renderButtons = () => {

    const buttonArray = [];
        
    for(let i=0; i<noOfPages; i++) {
        buttonArray.push(
            <button
                className={i === activePageNumber - 1 ? sn(`${blockName}__button`, `${blockName}__button-active`) : sn(`${blockName}__button`, `${blockName}__button-not-active`)}
                onClick={() => onPageNumberClick(i+1)}
            >
            {i + 1}
            </button>
            )
        }
        
        return buttonArray
    }

    return (
        <div className={blockName}>
            <button onClick={() => onLeftArrowClick()} disabled={activePageNumber === 1} className={`${blockName}__button`}>&laquo;</button>
            {renderButtons()}
            <button onClick={() => onRightArrowClick()} disabled={activePageNumber === noOfPages} className={`${blockName}__button`} >&raquo;</button>
        </div>
    )

}

export default Pagination;