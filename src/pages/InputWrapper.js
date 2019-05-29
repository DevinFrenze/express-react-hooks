import React from 'react';

export default ({ children, label, className }) => {
  return (
    <div className={`uk-form-row uk-margin ${className}`}>
      {label && <label className="uk-form-label">{label}</label>}
      {children}
    </div>
  );
};
