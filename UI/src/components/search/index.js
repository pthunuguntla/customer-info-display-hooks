import { useState } from "react";

import { Input, Button } from "../../common";

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
        <div>
            <Input
                placeholder={"Search with user name"}
                searchValue={searchValue}
                onInputChange={onInputChange}
            />
            <Button name={'Submit'} onClick={()=>onClick()}/>
        </div>


    )
}

export default Search;