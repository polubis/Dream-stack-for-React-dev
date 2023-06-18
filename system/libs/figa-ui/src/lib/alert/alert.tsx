import type { AlertProps } from './defs';
import { ErrorIcon, InfoIcon, WarningIcon, SuccessIcon } from '../icon';
import { Font } from '../font';

function getIcon(type: AlertProps["alertType"]): JSX.Element  {
    return type === 'error' ? <ErrorIcon /> 
    : type === 'warning' ? <WarningIcon />
    : type === 'success' ? <SuccessIcon />
    : <InfoIcon />
}

const Alert = ({ className, ...rest }: AlertProps) => {
  const {
    variant = 'filled',
    alertType,
    message = ""
  } = rest;

  const formattedClassName = className ? ` ${className}` : '';

  return (
    <div
      className={`alert alert-${alertType} alert-${variant}  alert-${formattedClassName}`}
    >
        {getIcon(alertType)}
        <Font variant="b2" children={message}/>
    </div>
  );
};

export { Alert };