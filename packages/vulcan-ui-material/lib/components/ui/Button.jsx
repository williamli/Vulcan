import React from 'react';
import PropTypes from 'prop-types';
import { registerComponent } from 'meteor/vulcan:core';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiButton from '@material-ui/core/Button';
import MuiIconButton from '@material-ui/core/IconButton';
import withTheme from '@material-ui/core/styles/withTheme';


const styles = theme => ({
  
  success: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  
  outline_success: {
    borderColor: theme.palette.success.main,
    color: theme.palette.success.main,
  },
  
  warning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
  
  outline_warning: {
    borderColor: theme.palette.warning.main,
    color: theme.palette.warning.main,
  },
  
  danger: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  
  outline_danger: {
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
  },
  
  info: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
  },
  
  outline_info: {
    borderColor: theme.palette.info.main,
    color: theme.palette.info.main,
  },
  
  light: {},
  
  outline_light: {},
  
  dark: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  
  outline_dark: {
    borderColor: theme.palette.common.black,
    color: theme.palette.common.black,
  },
  
});


const Button = ({ children, variant, size, iconButton, classes, theme, ...rest }) => {
  const varParts = variant && variant.split('-');
  const outline = varParts && varParts.length > 1 ? varParts[0] : null;
  variant = varParts && varParts.length > 1 ? varParts[1] : varParts && varParts.length > 0 ? varParts[0] : null;
  let color;
  
  switch(variant) {
    case 'primary':
      color = 'primary';
      break;
    case 'secondary':
      color = 'secondary';
      break;
    case 'inherit':
      color = 'inherit';
      break;
    default:
      color = 'default';
      break;
  }
  
  const root = ['success', 'warning', 'danger', 'info', 'light', 'dark'].includes(variant) ? 
    classes[outline ? outline + '_' + variant : variant] : 
    null;
  
  variant = outline === 'outline' ? 'outlined' : variant && variant !== 'link' ? 'contained' : 'text';
  
  switch(size) {
    case 'sm':
      size = 'small';
      break;
    case 'md':
      size = 'medium';
      break;
    case 'lg':
      size = 'large';
      break;
    default: 
      size = undefined;
      break;
  }
  
  if (iconButton) {
    return (
      <MuiIconButton color={color} variant={variant} size={size} classes={{ root }} {...rest}>
        {children}
      </MuiIconButton>
    );
  }
  
  return (
    <MuiButton color={color} variant={variant} size={size} classes={{ root }} {...rest}>
      {children}
    </MuiButton>
  );
};


Button.displayName = 'Button';


Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link',
    'outline-primary', 'outline-secondary', 'outline-success', 'outline-warning', 'outline-danger', 'outline-info', 
    'outline-light', 'outline-dark', 'inherit']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  iconButton: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


registerComponent('Button', Button, [withStyles, styles], [withTheme]);
