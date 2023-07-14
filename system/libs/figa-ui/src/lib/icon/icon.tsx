import type { IconBaseProps, IconProps } from './defs';

import c from 'classnames';

const Icon = ({ className, children, size = 24 }: IconBaseProps) => {
  return (
    <svg
      className={c('icon', className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

const DiscordIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('discord-icon', className)} {...props}>
      <path d="M19.2701 5.33C17.9401 4.71 16.5001 4.26 15.0001 4C14.987 3.99958 14.9739 4.00205 14.9618 4.00723C14.9497 4.01241 14.9389 4.02019 14.9301 4.03C14.7501 4.36 14.5401 4.79 14.4001 5.12C12.8091 4.88 11.1911 4.88 9.60012 5.12C9.46012 4.78 9.25012 4.36 9.06012 4.03C9.05012 4.01 9.02012 4 8.99012 4C7.49012 4.26 6.06012 4.71 4.72012 5.33C4.71012 5.33 4.70012 5.34 4.69012 5.35C1.97012 9.42 1.22012 13.38 1.59012 17.3C1.59012 17.32 1.60012 17.34 1.62012 17.35C3.42012 18.67 5.15012 19.47 6.86012 20C6.89012 20.01 6.92012 20 6.93012 19.98C7.33012 19.43 7.69012 18.85 8.00012 18.24C8.02012 18.2 8.00012 18.16 7.96012 18.15C7.39012 17.93 6.85012 17.67 6.32012 17.37C6.28012 17.35 6.28012 17.29 6.31012 17.26C6.42012 17.18 6.53012 17.09 6.64012 17.01C6.66012 16.99 6.69012 16.99 6.71012 17C10.1501 18.57 13.8601 18.57 17.2601 17C17.2801 16.99 17.3101 16.99 17.3301 17.01C17.4401 17.1 17.5501 17.18 17.6601 17.27C17.7001 17.3 17.7001 17.36 17.6501 17.38C17.1301 17.69 16.5801 17.94 16.0101 18.16C15.9701 18.17 15.9601 18.22 15.9701 18.25C16.2901 18.86 16.6501 19.44 17.0401 19.99C17.0701 20 17.1001 20.01 17.1301 20C18.8501 19.47 20.5801 18.67 22.3801 17.35C22.4001 17.34 22.4101 17.32 22.4101 17.3C22.8501 12.77 21.6801 8.84 19.3101 5.35C19.3001 5.34 19.2901 5.33 19.2701 5.33ZM8.52012 14.91C7.49012 14.91 6.63012 13.96 6.63012 12.79C6.63012 11.62 7.47012 10.67 8.52012 10.67C9.58012 10.67 10.4201 11.63 10.4101 12.79C10.4101 13.96 9.57012 14.91 8.52012 14.91ZM15.4901 14.91C14.4601 14.91 13.6001 13.96 13.6001 12.79C13.6001 11.62 14.4401 10.67 15.4901 10.67C16.5501 10.67 17.3901 11.63 17.3801 12.79C17.3801 13.96 16.5501 14.91 15.4901 14.91Z" />
    </Icon>
  );
};

const LinkedinIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('linkedin-icon', className)} {...props}>
      <path d="M6.93994 4.99999C6.93968 5.53043 6.72871 6.03903 6.35345 6.41391C5.97819 6.7888 5.46937 6.99926 4.93894 6.99899C4.40851 6.99873 3.89991 6.78776 3.52502 6.4125C3.15014 6.03724 2.93968 5.52843 2.93994 4.99799C2.94021 4.46756 3.15117 3.95896 3.52644 3.58407C3.9017 3.20919 4.41051 2.99873 4.94094 2.99899C5.47137 2.99926 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46956 6.93994 4.99999ZM6.99994 8.47999H2.99994V21H6.99994V8.47999ZM13.3199 8.47999H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.89999 14.9399 7.12999 13.2799 10.16L13.3199 8.47999Z" />
    </Icon>
  );
};

const UserIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('user-icon', className)} {...props}>
      <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" />
    </Icon>
  );
};

const ArrowTopIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('arrow-top-icon', className)} {...props}>
      <path d="M13.0001 20H11.0001V8L5.50008 13.5L4.08008 12.08L12.0001 4.16L19.9201 12.08L18.5001 13.5L13.0001 8V20Z" />
    </Icon>
  );
};

const ErrorIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('error-icon', className)} {...props}>
      <path d="M1.5 12C1.5 14.0767 2.11581 16.1068 3.26957 17.8335C4.42332 19.5602 6.0632 20.906 7.98182 21.7007C9.90045 22.4955 12.0116 22.7034 14.0484 22.2982C16.0852 21.8931 17.9562 20.8931 19.4246 19.4246C20.8931 17.9562 21.8931 16.0852 22.2982 14.0484C22.7034 12.0116 22.4955 9.90045 21.7007 7.98182C20.906 6.0632 19.5602 4.42332 17.8335 3.26957C16.1068 2.11581 14.0767 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12ZM18.8625 17.8125L6.1875 5.1375C7.91298 3.70125 10.1129 2.96173 12.3556 3.0641C14.5983 3.16646 16.7218 4.10331 18.3092 5.69077C19.8967 7.27824 20.8335 9.40169 20.9359 11.6444C21.0383 13.8871 20.2988 16.087 18.8625 17.8125ZM6.18 18.87C4.36374 17.3276 3.23325 15.1279 3.03642 12.7533C2.83959 10.3787 3.59248 8.02286 5.13 6.2025L17.7975 18.87C16.1732 20.2425 14.1153 20.9955 11.9887 20.9955C9.86219 20.9955 7.80433 20.2425 6.18 18.87Z" />
    </Icon>
  );
};

const WarnIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('warn-icon', className)} {...props}>
      <path d="M11.001 10H13.001V15H11.001V10ZM11 16H13V18H11V16Z" />
      <path d="M13.7679 4.19994C13.4199 3.54494 12.7419 3.13794 11.9999 3.13794C11.2579 3.13794 10.5799 3.54494 10.2319 4.20094L2.89395 18.0639C2.73112 18.3684 2.65046 18.71 2.65993 19.0551C2.6694 19.4002 2.76867 19.7369 2.94795 20.0319C3.12465 20.3283 3.37559 20.5735 3.676 20.7432C3.97641 20.913 4.3159 21.0015 4.66095 20.9999H19.3389C20.0469 20.9999 20.6879 20.6379 21.0529 20.0319C21.2319 19.7368 21.331 19.4001 21.3405 19.0551C21.35 18.71 21.2695 18.3685 21.1069 18.0639L13.7679 4.19994ZM4.66095 18.9999L11.9999 5.13694L19.3439 18.9999H4.66095Z" />
    </Icon>
  );
};

const InfoIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('info-icon', className)} {...props}>
      <path d="M12 17C12.2833 17 12.521 16.904 12.713 16.712C12.905 16.52 13.0007 16.2827 13 16C13 15.7167 12.904 15.479 12.712 15.287C12.52 15.095 12.2827 14.9993 12 15C11.7167 15 11.479 15.096 11.287 15.288C11.095 15.48 10.9993 15.7173 11 16C11 16.2833 11.096 16.521 11.288 16.713C11.48 16.905 11.7173 17.0007 12 17ZM11 13H13V7H11V13ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" />
    </Icon>
  );
};

const OkIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('success-icon', className)} {...props}>
      <path d="M10.243 16.3139L6 12.0699L7.414 10.6559L10.243 13.4839L15.899 7.8269L17.314 9.2419L10.243 16.3119V16.3139Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12ZM12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21Z"
      />
    </Icon>
  );
};

const CodeIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('code-icon', className)} {...props}>
      <path d="M23 12.0001L17.55 18.5001L16 17.2101L20.39 12.0001L16 6.79008L17.55 5.50008L23 12.0001ZM8 6.79008L6.45 5.50008L1 12.0001L6.45 18.5001L8 17.2101L3.61 12.0001L8 6.79008ZM8.45 21.4001L10.38 21.9201L15.55 2.60008L13.62 2.08008L8.45 21.4001Z" />
    </Icon>
  );
};

const PageIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('page-icon', className)} {...props}>
      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM4 9H14.5V12.5H4V9ZM4 14.5H14.5V18H5C4.45 18 4 17.55 4 17V14.5ZM19 18H16.5V9H20V17C20 17.55 19.55 18 19 18Z" />
    </Icon>
  );
};

const CloseIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('close-icon', className)} {...props}>
      <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
    </Icon>
  );
};

const FullScreenIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('full-screen-icon', className)} {...props}>
      <path d="M5 19V14H7V17H10V19H5ZM5 10V5H10V7H7V10H5ZM14 19V17H17V14H19V19H14ZM17 10V7H14V5H19V10H17Z" />
    </Icon>
  );
};

const FullScreenCloseIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('full-screen-close-icon', className)} {...props}>
      <path d="M3.4 22L2 20.6L8.6 14H4V12H12V20H10V15.4L3.4 22ZM12 12V4H14V8.6L20.6 2L22 3.4L15.4 10H20V12H12Z" />
    </Icon>
  );
};

const TileFlipIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('tile-flip-icon', className)} {...props}>
      <path d="M16 19.2598H18.6667V16.5931H16M16 3.25981H18.6667V0.59314H16M2.66667 5.92647H0V21.9265C0 22.6337 0.280951 23.312 0.781048 23.8121C1.28115 24.3122 1.95942 24.5931 2.66667 24.5931H18.6667V21.9265H2.66667M21.3333 19.2598C22.0406 19.2598 22.7189 18.9789 23.219 18.4788C23.719 17.9787 24 17.3004 24 16.5931H21.3333M21.3333 8.59314H24V5.92647H21.3333M21.3333 13.9265H24V11.2598H21.3333M8 19.2598V16.5931H5.33333C5.33333 17.3004 5.61428 17.9787 6.11438 18.4788C6.61448 18.9789 7.29276 19.2598 8 19.2598ZM13.3333 0.59314H10.6667V3.25981H13.3333M21.3333 0.59314V3.25981H24C24 2.55256 23.719 1.87429 23.219 1.37419C22.7189 0.874091 22.0406 0.59314 21.3333 0.59314ZM13.3333 16.5931H10.6667V19.2598H13.3333M8 0.59314C6.52 0.59314 5.33333 1.77981 5.33333 3.25981H8M8 11.2598H5.33333V13.9265H8M8 5.92647H5.33333V8.59314H8V5.92647Z" />
    </Icon>
  );
};

export {
  Icon,
  DiscordIcon,
  LinkedinIcon,
  UserIcon,
  ArrowTopIcon,
  ErrorIcon,
  WarnIcon,
  InfoIcon,
  OkIcon,
  FullScreenIcon,
  TileFlipIcon,
  FullScreenCloseIcon,
  CodeIcon,
  PageIcon,
  CloseIcon,
};
