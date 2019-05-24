import React from 'react';

export default ({ children, label }) => {
  return (
    <div className="uk-form-row uk-margin">
      {label && <label className="uk-form-label">{label}</label>}
      {children}
    </div>
  );
};
