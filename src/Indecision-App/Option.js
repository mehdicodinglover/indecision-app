import React from 'react';

const Option = props =>{
    const showMessage = () => console.log('you are to delete an option!');

    return(
        <div>
                <span>{props.content}</span>
                <button
                    onClick={()=>{props.handleRemoveItem(props.Key);}} onMouseEnter={showMessage}>
                    Remove Item
                </button>
    </div>)
}


export default Option;