import React from 'react';

export default function Button({ children, onClick, type = 'button', className = '', href, target, rel, icon }) {
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`custom-btn ${className}`}>
        {children}
        {icon && <i className={icon}></i>}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`custom-btn ${className}`}>
      {children}
      {icon && <i className={icon}></i>}
    </button>
  );
}
