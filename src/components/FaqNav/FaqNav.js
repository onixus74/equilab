import React from 'react';
import FaqNavItem from "../FaqNavItem/FaqNavItem";

const FaqNav = props => {

  const renderItems = props.faqCats.map(item => {
    return (
      <FaqNavItem visible={props.visible} faqCat={item} clickFunction={props.clickFunction}/>
    )
  })
    return (
      <ul className="faq-nav">
        {renderItems}
      </ul>
    );


}

export default FaqNav;
