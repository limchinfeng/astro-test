import React from 'react';

interface ButtonProps {
  title: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ title, link }) => {
  return (
    <a href={link} className='btn btn-primary'>
      <button>{title}</button>
    </a>
  );
};

export default Button;