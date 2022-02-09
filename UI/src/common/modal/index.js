import sn from "classnames";


import "./modal.scss"


const blockName = "modal"

const Modal = (props) => {

    const { children, onCloseModal, modalRef } = props

    return (
        <div className={`${blockName}`} ref={modalRef}>
            <span
                className={sn(`${blockName}__close`, `${blockName}__cursor`)}
                onClick={() => onCloseModal()}>&times;</span>
            
            <div className = { `${blockName}-content`}>{children}</div>
        </div>
    )
}

export default Modal