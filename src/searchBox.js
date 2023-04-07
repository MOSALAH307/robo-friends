import React from "react";

const SearchBox = ({ searchfield, search }) => {
    return (
        <div className="pa2">
            <input 
            className="bg-lightest-blue pa3 ba b--green"
            type={"search"}
            placeholder={'search robots'}
            onChange={ search }
            />
        </div>
    );
}
export default SearchBox;