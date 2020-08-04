import React from 'react';

//funcitonal component
function Test(props) {
    return (     
        <h1 onClick={props.personClicked}>
            Hello {props.person}
        </h1>
    )
}

export default Test;
