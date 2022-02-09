import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { createBrowserHistory } from "history";
import sn from "classnames";

import { Select, Pagination, Button } from "../";

import AdditonalDetails from "../../components/additonal-details";
import LightBox from "../../components/light-box"

import { CustomerContext } from "../../context/CustomerInfoContext";

import {
    decrement,
    increment,
    selectPageNumber,
    setPersistedPageNumber,
} from '../../core/reducers/customerInfo';

import "./table.scss";


const blockName = "table-container";


const Table = (props) => {
    const history = createBrowserHistory();
    const persistedPageNumber = useSelector(selectPageNumber);
    const dispatch = useDispatch();


    const { isPagination, tableData, tableHeaders, excludedHeaders, userNameValue, initialPageNumber } = props;
    const [ pageNumber, setPageNumber] = useState(initialPageNumber);
    const [ displayValue, setDisplayValue ] = useState(5);
    const [ data, setTableData] = useState(tableData);
    const [ noOfPages , setNumberOfPages ] = useState(1);
    const [ displayAdditonalDetails, setDisplayAdditionalDetails] = useState(false);
    const [ rowData, setRowData ] = useState ({});
    
  

    const viewLinkRef = useRef(null);
    const modalRef = useRef(null);



    useEffect(()=> {
        setPageNumber(initialPageNumber)
    }, [initialPageNumber])

 
    useEffect(() => {
        const sliceValue = pageNumber === noOfPages ? tableData.length : displayValue * pageNumber
        const finalData = userNameValue !== '' ? filterByUserName() : tableData;
        const numberOfPages = userNameValue !== '' ? Math.ceil(finalData.length / displayValue) : Math.ceil(tableData.length / displayValue);
        setTableData(finalData.slice((pageNumber - 1) * displayValue, sliceValue))
        setNumberOfPages(numberOfPages)
        history.push(`?pageNumber=${pageNumber}`);
    }, [pageNumber, displayValue, tableData])

    useEffect(()=> {
        const filteredData = filterByUserName();
        const noOfPageValue = filteredData.length > displayValue ? Math.ceil(filteredData.length / displayValue) : Math.ceil(filteredData.length / displayValue);
        setTableData(filteredData.slice(0, displayValue))
        setPageNumber(1)
        const numberOfPages = userNameValue !== '' ? noOfPageValue : Math.ceil(tableData.length / displayValue);
        setNumberOfPages(numberOfPages)
    }, [userNameValue])
    

    const filterByUserName = () => {
        const result =  tableData.filter((tData) => {
            const userName = tData.userName.replace(/\s/g, '');
            return userName !== '' ? userName.toLowerCase().includes(userNameValue.toLowerCase()) : true
        })
        return result;

    }

    const renderHeaders = () => {
        return tableHeaders.map((header) => {
            return <th className={`${blockName}__table-header`}>{header}</th>
        })
    }

    const onViewMoreClick = (rowData) => {
        setDisplayAdditionalDetails(true)
        setRowData(rowData)
    }


    const renderViewMoreBtn = (tbData) => {
        return (
            <Button
                name={'View More Details'}
                onClick={(e) => onViewMoreClick(tbData)}
                extraClassName={`${blockName}__view-more`}
                btnRef={viewLinkRef}
            />
        )
    }



    const onCloseAdditionalDetails = () => {
        setDisplayAdditionalDetails(false)
    }


    const renderLightBox = (tbData) => {
        return (
            <LightBox 
                modalRef={modalRef}
                tbData={tbData}
            />
        )
    }

  

    const renderTableValues = () => {
        return data.map((tbData) => {
            return <tr className={`${blockName}__table-row`} key={tbData['customerId']}>
                {Object.keys(tbData).map((key) => {
                    if (key === "additionalData"){
                        return <td className={sn(`${blockName}__table-data`)}>{renderViewMoreBtn(tbData)}</td>
                    }
                    if (key === "image") {
                        return <td className={sn(`${blockName}__table-data`)}>{renderLightBox(tbData)}</td>
                    }
                    return excludedHeaders.findIndex((header) => header === key) < 0 && <td className={sn(`${blockName}__table-data`)}>{tbData[key]}</td>
                })}
            </tr>
        })
    }

    const onPageNumberClick = (pageNum) => {
        setPageNumber(pageNum);
        dispatch(setPersistedPageNumber(pageNum))
        setDisplayAdditionalDetails(false)

    }

    const onLeftArrowClick = () => {
        setPageNumber(pageNumber-1)
        dispatch(decrement())
        setDisplayAdditionalDetails(false)
    }

    const onRightArrowClick = () => {
        setPageNumber(pageNumber + 1)
        dispatch(increment())
        setDisplayAdditionalDetails(false)
    }

    const renderPagination = () => {

        return (
            <Pagination 
                activePageNumber={pageNumber} 
                noOfPages={noOfPages} 
                onPageNumberClick={onPageNumberClick}
                onLeftArrowClick={onLeftArrowClick}
                onRightArrowClick={onRightArrowClick}
            />
        )

    }

    const renderAdditionalDetails = () => {
        return (
            <AdditonalDetails />
        )
    }


    const onSelectChange = (value) => {
        setDisplayValue(value.currentTarget.value)
        setPageNumber(1)
        setNumberOfPages(Math.ceil(tableData.length / value.currentTarget.value))
    }
    
    return (
        
        <CustomerContext.Provider value={{ onCloseModal :onCloseAdditionalDetails, rowData: rowData }} >
            <div className={blockName}>
                {isPagination && < Select onSelectChange={onSelectChange} />}
                <table className={`${blockName}__table`}>
                    <colgroup span="5"></colgroup>
                    <tr className={`${blockName}__table-row`}>
                        {renderHeaders()}
                    </tr>
                    {renderTableValues()}
                </table>
                {isPagination && renderPagination()}
                {displayAdditonalDetails && renderAdditionalDetails()}
            </div>
        </CustomerContext.Provider>
    );
}

export default Table;
