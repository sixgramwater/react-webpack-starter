// import styles from './button.module.scss'
import './button.scss'
// const styles = require('./button.module.scss');

// import * as React from 'react';
import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  label?: string;
  theme?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

// type ButtonProps = {

// }

const Button = ({ label, theme, children, onClick }: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;