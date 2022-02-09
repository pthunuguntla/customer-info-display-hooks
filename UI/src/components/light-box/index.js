import { useState } from "react";
import { Modal } from "../../common";

import "./light-box.scss"

const blockName = "light-box"

const LightBox = (props) => {

    const [showModal, setShowModal ] = useState(false);

    const [ widerUrl, setWiderUrl ] = useState('');

    const {  modalRef, tbData:{image}, tbData  } = props;

    const childrenComp = () => {
        return (
            <img src={widerUrl} className={`${blockName}__image-wide`} alt="wider" />
        )
    }

    const onOpenModal = (tbData) => {
        setShowModal(true)
        setWiderUrl(tbData.lightBoxImage)
    }

    const onCloseModal = () => {
        setShowModal(false)
    }
    
    return (
        <div className={blockName}>
            <img src={image} onClick={() => onOpenModal(tbData)} className={`${blockName}__image-normal`} alt="normal"/>
            {showModal && <Modal onCloseModal={onCloseModal} modalRef={modalRef}> {childrenComp()} </Modal>}
        </div>

    )

}

export default LightBox;