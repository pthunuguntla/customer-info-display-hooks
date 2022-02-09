import { Modal } from "../../common";

import "./light-box.scss"

const blockName = "light-box"

const LightBox = (props) => {

    const { onOpenModal, onCloseModal, showModal, modalRef, thumbNailUrl, wideImageUrl  } = props;

    const childrenComp = () => {
        return (
            <img src={wideImageUrl} className={`${blockName}__image-wide`} alt="wider" />
        )
    }
    
    return (
        <div className={blockName}>
            <img src={thumbNailUrl} onClick={() => onOpenModal()} className={`${blockName}__image-normal`} alt="normal"/>
            {showModal && <Modal onCloseModal={onCloseModal} modalRef={modalRef}> {childrenComp()} </Modal>}
        </div>

    )

}

export default LightBox;