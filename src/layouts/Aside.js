import React from "react";
import Option from "../components/Option";
import "../styles/Aside.css";
const Aside = props => {
  const menuOptionsList = props.menuOptions.map(option => (
    <Option key={option.id} param={option} />
  ));
  return <ul>{menuOptionsList}</ul>;
};
export default Aside;
