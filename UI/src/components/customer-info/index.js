import { useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from '../../core/api';

import Search from "../search";
import { Table } from "../../common";

import { tableHeaders, excludedHeaders } from "../../core/constants/tabledata"

import "./customer-info.scss"


const blockName  = "customer-info"

const CustomerInfo = (props) => {

    const { initialPageNumber } = props;
    const { customers: globalCustomers } = useSelector(state => state.dataReducer);

    const [userNameValue, setUserNameValue] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        getCustomers(dispatch);
    }, [dispatch])

    const sortCustomerInfoById = useCallback(() => {
        return globalCustomers.sort((a, b) => {
            const aCustId = Number(a.customerId);
            const bCustId = Number(b.customerId);
            return aCustId - bCustId;
        })
    })

    const onSubmitClick = (value) => {
        setUserNameValue(value)
    }

    return (
        <div className={blockName}>
            <Search onSubmitClick={onSubmitClick}/>
            <Table 
                isPagination 
                tableData={sortCustomerInfoById()}
                tableHeaders={tableHeaders} 
                excludedHeaders={excludedHeaders}
                userNameValue={userNameValue}
                initialPageNumber={initialPageNumber}
            />
        </div>

    )
}

export default CustomerInfo;