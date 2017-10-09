import React from 'react';

const FaqNavItem = props => {

    let active = props.visible === props.faqCat ? "3px solid rgba(255,255,255,1.0)" : "";


    return (

        <li className="small-bold" style={{borderBottom: active}} key={props.faqCat} onClick={() => props.clickFunction(props.faqCat)}>{props.faqCat}</li>

    );


}

export default FaqNavItem;
