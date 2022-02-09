import { useState } from "react";

import { Input, Button } from "../../common";
import './search.scss';

const blockName = 'search-wrapper'

const Search = (props) => {

    const { onSubmitClick } = props;

    const [searchValue, setSearchValue] = useState('');
    const onInputChange = (inputValue) => {
        const re = /^[A-Za-z]+$/;
        if (inputValue === "" || re.test(inputValue))
        setSearchValue(inputValue);
    }

    const onClick = () => {
        onSubmitClick(searchValue)
    }

    return (
        <div className={blockName}>
            <Input
                placeholder={"Search with user name"}
                searchValue={searchValue}
                onInputChange={onInputChange}
                extraClasName={`${blockName}__input`}
            />
            <Button name={'Submit'} onClick={()=>onClick()} extraClassName={`${blockName}__submit-btn`}/>
        </div>


    )
}

export default Search;