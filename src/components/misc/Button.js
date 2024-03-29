import React from "react";

const Button = ({ children, onClick }) => <button className='button' type='button' onClick={onClick}>{children}</button>;

export default Button