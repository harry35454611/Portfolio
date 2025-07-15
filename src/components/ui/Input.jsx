import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ 
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  error,
  className = '',
  ...props 
}) => {
  const inputClasses = [
    'form-input',
    error ? 'border-error' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        {...props}
      />
      {error && (
        <p className="text-error text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string
};

export default Input;