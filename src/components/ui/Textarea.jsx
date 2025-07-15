import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ 
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  error,
  rows = 4,
  className = '',
  ...props 
}) => {
  const textareaClasses = [
    'form-textarea',
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
      <textarea
        className={textareaClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        rows={rows}
        {...props}
      />
      {error && (
        <p className="text-error text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  rows: PropTypes.number,
  className: PropTypes.string
};

export default Textarea;