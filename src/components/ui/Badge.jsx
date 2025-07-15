import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const baseClasses = 'badge';
  const variantClasses = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    outline: 'badge-outline'
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'outline']),
  className: PropTypes.string
};

export default Badge;