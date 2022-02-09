import { useContext } from "react";
import keys from "lodash/keys"
import { CustomerContext } from "../../context/CustomerInfoContext";

import { Modal } from "../../common";

import "./additional-details.scss";

const blockName = "additional-details"


const AdditonalDetails = () => {
    const customerInfoAdditionalDetails = useContext(CustomerContext);

    const { rowData: { additionalData, fullName }, onCloseModal } = customerInfoAdditionalDetails;

    const renderAdditionalItem = (key) => {
        const value = `${key}: ${additionalData[key]}`;
       return (
           <>
               <span className={`${blockName}__item`}>{value}</span>
               <br />
           </>
       )
    }

    return (
        <>
            <Modal onCloseModal={onCloseModal}>
                {<div className={blockName}>
                    <h1 className={`${blockName}__title`}>{`${'Additional Details For User : '}${fullName}`}</h1>
                    {keys(additionalData).map((key) => renderAdditionalItem(key))}
                </div>}
            </Modal>
        </>
    )
}

export default AdditonalDetails;