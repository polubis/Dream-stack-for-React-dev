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

const CheckIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('check-icon', className)} {...props}>
      <path d="M9.54998 18.0001L3.84998 12.3001L5.27498 10.8751L9.54998 15.1501L18.725 5.9751L20.15 7.4001L9.54998 18.0001Z" />
    </Icon>
  );
};

const FormIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('form-icon', className)} {...props}>
      <path d="M11 15H17V17H11V15ZM9 7H7V9H9V7ZM11 13H17V11H11V13ZM11 9H17V7H11V9ZM9 11H7V13H9V11ZM21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5ZM19 5H5V19H19V5ZM9 15H7V17H9V15Z" />
    </Icon>
  );
};

const MobileIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('mobile-icon', className)} {...props}>
      <path d="M16.5 1.5C16.8978 1.5 17.2794 1.65804 17.5607 1.93934C17.842 2.22064 18 2.60218 18 3V21C18 21.3978 17.842 21.7794 17.5607 22.0607C17.2794 22.342 16.8978 22.5 16.5 22.5H7.5C7.10218 22.5 6.72064 22.342 6.43934 22.0607C6.15804 21.7794 6 21.3978 6 21V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H16.5ZM7.5 0C6.70435 0 5.94129 0.316071 5.37868 0.87868C4.81607 1.44129 4.5 2.20435 4.5 3V21C4.5 21.7956 4.81607 22.5587 5.37868 23.1213C5.94129 23.6839 6.70435 24 7.5 24H16.5C17.2956 24 18.0587 23.6839 18.6213 23.1213C19.1839 22.5587 19.5 21.7956 19.5 21V3C19.5 2.20435 19.1839 1.44129 18.6213 0.87868C18.0587 0.316071 17.2956 0 16.5 0L7.5 0Z" />
      <path d="M12 21C12.3978 21 12.7794 20.842 13.0607 20.5607C13.342 20.2794 13.5 19.8978 13.5 19.5C13.5 19.1022 13.342 18.7206 13.0607 18.4393C12.7794 18.158 12.3978 18 12 18C11.6022 18 11.2206 18.158 10.9393 18.4393C10.658 18.7206 10.5 19.1022 10.5 19.5C10.5 19.8978 10.658 20.2794 10.9393 20.5607C11.2206 20.842 11.6022 21 12 21Z" />
    </Icon>
  );
};

const SwapIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('swap-icon', className)} {...props}>
      <path
        d="M21 4.5V14.25C21 14.6478 20.842 15.0294 20.5607 15.3107C20.2794 15.592 19.8978 15.75 19.5 15.75H9.31031L10.2806 16.7194C10.3503 16.7891 10.4056 16.8718 10.4433 16.9628C10.481 17.0539 10.5004 17.1515 10.5004 17.25C10.5004 17.3485 10.481 17.4461 10.4433 17.5372C10.4056 17.6282 10.3503 17.7109 10.2806 17.7806C10.2109 17.8503 10.1282 17.9056 10.0372 17.9433C9.94613 17.981 9.84855 18.0004 9.75 18.0004C9.65145 18.0004 9.55387 17.981 9.46283 17.9433C9.37178 17.9056 9.28906 17.8503 9.21937 17.7806L6.96937 15.5306C6.89964 15.461 6.84432 15.3783 6.80658 15.2872C6.76884 15.1962 6.74941 15.0986 6.74941 15C6.74941 14.9014 6.76884 14.8038 6.80658 14.7128C6.84432 14.6217 6.89964 14.539 6.96937 14.4694L9.21937 12.2194C9.36011 12.0786 9.55098 11.9996 9.75 11.9996C9.94902 11.9996 10.1399 12.0786 10.2806 12.2194C10.4214 12.3601 10.5004 12.551 10.5004 12.75C10.5004 12.949 10.4214 13.1399 10.2806 13.2806L9.31031 14.25H19.5V4.5H9V5.25C9 5.44891 8.92098 5.63968 8.78033 5.78033C8.63968 5.92098 8.44891 6 8.25 6C8.05109 6 7.86032 5.92098 7.71967 5.78033C7.57902 5.63968 7.5 5.44891 7.5 5.25V4.5C7.5 4.10218 7.65804 3.72064 7.93934 3.43934C8.22064 3.15804 8.60218 3 9 3H19.5C19.8978 3 20.2794 3.15804 20.5607 3.43934C20.842 3.72064 21 4.10218 21 4.5ZM15.75 18C15.5511 18 15.3603 18.079 15.2197 18.2197C15.079 18.3603 15 18.5511 15 18.75V19.5H4.5V9.75H14.6897L13.7194 10.7194C13.5786 10.8601 13.4996 11.051 13.4996 11.25C13.4996 11.449 13.5786 11.6399 13.7194 11.7806C13.8601 11.9214 14.051 12.0004 14.25 12.0004C14.449 12.0004 14.6399 11.9214 14.7806 11.7806L17.0306 9.53063C17.1004 9.46097 17.1557 9.37825 17.1934 9.28721C17.2312 9.19616 17.2506 9.09856 17.2506 9C17.2506 8.90144 17.2312 8.80384 17.1934 8.71279C17.1557 8.62175 17.1004 8.53903 17.0306 8.46937L14.7806 6.21937C14.6399 6.07864 14.449 5.99958 14.25 5.99958C14.051 5.99958 13.8601 6.07864 13.7194 6.21937C13.5786 6.36011 13.4996 6.55098 13.4996 6.75C13.4996 6.94902 13.5786 7.13989 13.7194 7.28063L14.6897 8.25H4.5C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H15C15.3978 21 15.7794 20.842 16.0607 20.5607C16.342 20.2794 16.5 19.8978 16.5 19.5V18.75C16.5 18.5511 16.421 18.3603 16.2803 18.2197C16.1397 18.079 15.9489 18 15.75 18Z"
        fill="black"
      />
    </Icon>
  );
};

const EditIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('edit-icon', className)} {...props}>
      <path
        d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.421 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.65433 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z"
        fill="black"
      />
    </Icon>
  );
};

const HamburgerIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('hamburger-icon', className)} {...props}>
      <path
        d="M4 7H7M20 7H11M20 17H17M4 17H13M4 12H20"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Icon>
  );
};

const SearchIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('search-icon', className)} {...props}>
      <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.854 3.62933 14.112 4.888C15.37 6.14667 15.9993 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5623 12.688 12.687C13.5633 11.8117 14.0007 10.7493 14 9.5C14 8.25 13.5623 7.18733 12.687 6.312C11.8117 5.43667 10.7493 4.99933 9.5 5C8.25 5 7.18733 5.43767 6.312 6.313C5.43667 7.18833 4.99933 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z" />
    </Icon>
  );
};

const FiltersIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('filters-icon', className)} {...props}>
      <path d="M2.75 6C2.55109 6 2.36032 6.07902 2.21967 6.21967C2.07902 6.36032 2 6.55109 2 6.75C2 6.94891 2.07902 7.13968 2.21967 7.28033C2.36032 7.42098 2.55109 7.5 2.75 7.5H21.25C21.4489 7.5 21.6397 7.42098 21.7803 7.28033C21.921 7.13968 22 6.94891 22 6.75C22 6.55109 21.921 6.36032 21.7803 6.21967C21.6397 6.07902 21.4489 6 21.25 6H2.75ZM6 11.75C6 11.5511 6.07902 11.3603 6.21967 11.2197C6.36032 11.079 6.55109 11 6.75 11H17.25C17.4489 11 17.6397 11.079 17.7803 11.2197C17.921 11.3603 18 11.5511 18 11.75C18 11.9489 17.921 12.1397 17.7803 12.2803C17.6397 12.421 17.4489 12.5 17.25 12.5H6.75C6.55109 12.5 6.36032 12.421 6.21967 12.2803C6.07902 12.1397 6 11.9489 6 11.75ZM10 16.688C10 16.4891 10.079 16.2983 10.2197 16.1577C10.3603 16.017 10.5511 15.938 10.75 15.938H13.25C13.4489 15.938 13.6397 16.017 13.7803 16.1577C13.921 16.2983 14 16.4891 14 16.688C14 16.8869 13.921 17.0777 13.7803 17.2183C13.6397 17.359 13.4489 17.438 13.25 17.438H10.75C10.5511 17.438 10.3603 17.359 10.2197 17.2183C10.079 17.0777 10 16.8869 10 16.688Z" />
    </Icon>
  );
};

const PlusIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('plus-icon', className)} {...props}>
      <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" />
    </Icon>
  );
};

const TagsIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('tags-icon', className)} {...props}>
      <path d="M21.41 11.58L12.41 2.58C12.035 2.20808 11.5281 1.99958 11 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V11C1.99979 11.2639 2.05182 11.5253 2.15308 11.769C2.25434 12.0127 2.40283 12.2339 2.59 12.42L11.59 21.42C11.965 21.7919 12.4719 22.0004 13 22C13.5296 21.9978 14.0367 21.7856 14.41 21.41L21.41 14.41C21.7856 14.0367 21.9978 13.5296 22 13C22.0002 12.7361 21.9482 12.4747 21.8469 12.231C21.7457 11.9873 21.5972 11.7661 21.41 11.58ZM13 20L4 11V4H11L20 13M6.5 5C6.79667 5 7.08668 5.08797 7.33336 5.2528C7.58003 5.41762 7.77229 5.65189 7.88582 5.92598C7.99935 6.20006 8.02906 6.50166 7.97118 6.79264C7.9133 7.08361 7.77044 7.35088 7.56066 7.56066C7.35088 7.77044 7.08361 7.9133 6.79264 7.97118C6.50166 8.02906 6.20006 7.99935 5.92598 7.88582C5.65189 7.77229 5.41762 7.58003 5.2528 7.33336C5.08797 7.08668 5 6.79667 5 6.5C5 6.10218 5.15804 5.72064 5.43934 5.43934C5.72064 5.15804 6.10218 5 6.5 5Z" />
    </Icon>
  );
};

const ReviewsIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('reviews-icon', className)} {...props}>
      <path d="M6 14H9.05L14.05 9C14.2 8.85 14.3127 8.679 14.388 8.487C14.4633 8.295 14.5007 8.10767 14.5 7.925C14.5 7.74167 14.4583 7.56267 14.375 7.388C14.2917 7.21334 14.1833 7.05067 14.05 6.9L13.15 5.95C13 5.8 12.8333 5.68733 12.65 5.612C12.4667 5.53667 12.275 5.49934 12.075 5.5C11.8917 5.5 11.7043 5.53767 11.513 5.613C11.3217 5.68833 11.1507 5.80067 11 5.95L6 10.95V14ZM7.5 12.5V11.55L10.025 9.025L10.525 9.475L10.975 9.975L8.45 12.5H7.5ZM10.525 9.475L10.975 9.975L10.025 9.025L10.525 9.475ZM11.175 14H18V12H13.175L11.175 14ZM2 22V4C2 3.45 2.196 2.979 2.588 2.587C2.98 2.195 3.45067 1.99934 4 2H20C20.55 2 21.021 2.196 21.413 2.588C21.805 2.98 22.0007 3.45067 22 4V16C22 16.55 21.804 17.021 21.412 17.413C21.02 17.805 20.5493 18.0007 20 18H6L2 22ZM5.15 16H20V4H4V17.125L5.15 16Z" />
    </Icon>
  );
};

const ActionsIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('actions-icon', className)} {...props}>
      <path d="M10.55 18.2L15.725 12H11.725L12.45 6.325L7.825 13H11.3L10.55 18.2ZM8 22L9 15H4L13 2H15L14 10H20L10 22H8Z" />
    </Icon>
  );
};

const StatusIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('status-icon', className)} {...props}>
      <path d="M16.5 11L13 7.5L14.4 6.1L16.5 8.2L20.7 4L22.1 5.4L16.5 11ZM11 7H2V9H11V7ZM21 13.4L19.6 12L17 14.6L14.4 12L13 13.4L15.6 16L13 18.6L14.4 20L17 17.4L19.6 20L21 18.6L18.4 16L21 13.4ZM11 15H2V17H11V15Z" />
    </Icon>
  );
};

const SunIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('sun-icon', className)} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25C12.1989 1.25 12.3897 1.32902 12.5303 1.46967C12.671 1.61032 12.75 1.80109 12.75 2V3C12.75 3.19891 12.671 3.38968 12.5303 3.53033C12.3897 3.67098 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.67098 11.4697 3.53033C11.329 3.38968 11.25 3.19891 11.25 3V2C11.25 1.80109 11.329 1.61032 11.4697 1.46967C11.6103 1.32902 11.8011 1.25 12 1.25ZM4.399 4.399C4.53963 4.25855 4.73025 4.17966 4.929 4.17966C5.12775 4.17966 5.31837 4.25855 5.459 4.399L5.852 4.791C5.98869 4.93239 6.06437 5.1218 6.06276 5.31845C6.06114 5.5151 5.98235 5.70325 5.84336 5.84237C5.70437 5.98149 5.5163 6.06046 5.31965 6.06226C5.123 6.06406 4.93352 5.98855 4.792 5.852L4.399 5.459C4.25855 5.31837 4.17966 5.12775 4.17966 4.929C4.17966 4.73025 4.25855 4.53963 4.399 4.399ZM19.601 4.399C19.7415 4.53963 19.8203 4.73025 19.8203 4.929C19.8203 5.12775 19.7415 5.31837 19.601 5.459L19.208 5.852C19.0658 5.98448 18.8778 6.0566 18.6835 6.05317C18.4892 6.04975 18.3038 5.97103 18.1664 5.83362C18.029 5.69621 17.9503 5.51082 17.9468 5.31652C17.9434 5.12222 18.0155 4.93417 18.148 4.792L18.541 4.399C18.6816 4.25855 18.8722 4.17966 19.071 4.17966C19.2697 4.17966 19.4604 4.25855 19.601 4.399ZM12 6.75C10.6076 6.75 9.27226 7.30312 8.28769 8.28769C7.30312 9.27226 6.75 10.6076 6.75 12C6.75 13.3924 7.30312 14.7277 8.28769 15.7123C9.27226 16.6969 10.6076 17.25 12 17.25C13.3924 17.25 14.7277 16.6969 15.7123 15.7123C16.6969 14.7277 17.25 13.3924 17.25 12C17.25 10.6076 16.6969 9.27226 15.7123 8.28769C14.7277 7.30312 13.3924 6.75 12 6.75ZM5.25 12C5.25 10.2098 5.96116 8.4929 7.22703 7.22703C8.4929 5.96116 10.2098 5.25 12 5.25C13.7902 5.25 15.5071 5.96116 16.773 7.22703C18.0388 8.4929 18.75 10.2098 18.75 12C18.75 13.7902 18.0388 15.5071 16.773 16.773C15.5071 18.0388 13.7902 18.75 12 18.75C10.2098 18.75 8.4929 18.0388 7.22703 16.773C5.96116 15.5071 5.25 13.7902 5.25 12ZM1.25 12C1.25 11.8011 1.32902 11.6103 1.46967 11.4697C1.61032 11.329 1.80109 11.25 2 11.25H3C3.19891 11.25 3.38968 11.329 3.53033 11.4697C3.67098 11.6103 3.75 11.8011 3.75 12C3.75 12.1989 3.67098 12.3897 3.53033 12.5303C3.38968 12.671 3.19891 12.75 3 12.75H2C1.80109 12.75 1.61032 12.671 1.46967 12.5303C1.32902 12.3897 1.25 12.1989 1.25 12ZM20.25 12C20.25 11.8011 20.329 11.6103 20.4697 11.4697C20.6103 11.329 20.8011 11.25 21 11.25H22C22.1989 11.25 22.3897 11.329 22.5303 11.4697C22.671 11.6103 22.75 11.8011 22.75 12C22.75 12.1989 22.671 12.3897 22.5303 12.5303C22.3897 12.671 22.1989 12.75 22 12.75H21C20.8011 12.75 20.6103 12.671 20.4697 12.5303C20.329 12.3897 20.25 12.1989 20.25 12ZM18.148 18.148C18.2886 18.0076 18.4792 17.9287 18.678 17.9287C18.8768 17.9287 19.0674 18.0076 19.208 18.148L19.601 18.541C19.6747 18.6097 19.7338 18.6925 19.7748 18.7845C19.8158 18.8765 19.8378 18.9758 19.8396 19.0765C19.8414 19.1772 19.8228 19.2772 19.7851 19.3706C19.7474 19.464 19.6913 19.5488 19.62 19.62C19.5488 19.6913 19.464 19.7474 19.3706 19.7851C19.2772 19.8228 19.1772 19.8414 19.0765 19.8396C18.9758 19.8378 18.8765 19.8158 18.7845 19.7748C18.6925 19.7338 18.6097 19.6747 18.541 19.601L18.148 19.208C18.0076 19.0674 17.9287 18.8768 17.9287 18.678C17.9287 18.4792 18.0076 18.2886 18.148 18.148ZM5.852 18.148C5.99245 18.2886 6.07134 18.4792 6.07134 18.678C6.07134 18.8768 5.99245 19.0674 5.852 19.208L5.459 19.601C5.39034 19.6747 5.30754 19.7338 5.21554 19.7748C5.12354 19.8158 5.02423 19.8378 4.92352 19.8396C4.82282 19.8414 4.72279 19.8228 4.6294 19.7851C4.53601 19.7474 4.45118 19.6913 4.37996 19.62C4.30874 19.5488 4.2526 19.464 4.21488 19.3706C4.17716 19.2772 4.15863 19.1772 4.16041 19.0765C4.16219 18.9758 4.18423 18.8765 4.22522 18.7845C4.26621 18.6925 4.32531 18.6097 4.399 18.541L4.791 18.148C4.86065 18.0783 4.94335 18.023 5.03438 17.9853C5.1254 17.9476 5.22297 17.9282 5.3215 17.9282C5.42003 17.9282 5.5176 17.9476 5.60862 17.9853C5.69965 18.023 5.78235 18.0783 5.852 18.148ZM12 20.25C12.1989 20.25 12.3897 20.329 12.5303 20.4697C12.671 20.6103 12.75 20.8011 12.75 21V22C12.75 22.1989 12.671 22.3897 12.5303 22.5303C12.3897 22.671 12.1989 22.75 12 22.75C11.8011 22.75 11.6103 22.671 11.4697 22.5303C11.329 22.3897 11.25 22.1989 11.25 22V21C11.25 20.8011 11.329 20.6103 11.4697 20.4697C11.6103 20.329 11.8011 20.25 12 20.25Z"
      />
    </Icon>
  );
};

const HalfMoonIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('half-moon-icon', className)} {...props}>
      <path d="M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.2333 3 12.4627 3.00833 12.688 3.025C12.9133 3.04167 13.134 3.06667 13.35 3.1C12.6667 3.58333 12.1207 4.21267 11.712 4.988C11.3033 5.76333 11.0993 6.60067 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.4167 12.9 18.2583 12.6957 19.025 12.287C19.7917 11.8783 20.4167 11.3327 20.9 10.65C20.9333 10.8667 20.9583 11.0873 20.975 11.312C20.9917 11.5367 21 11.766 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21ZM12 19C13.4667 19 14.7833 18.5957 15.95 17.787C17.1167 16.9783 17.9667 15.9243 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.704 14.179 11.262 12.737C9.82 11.295 9.09933 9.54933 9.1 7.5C9.1 7.16667 9.125 6.83333 9.175 6.5C9.225 6.16667 9.29167 5.83333 9.375 5.5C8.075 6.03333 7.02067 6.88333 6.212 8.05C5.40333 9.21667 4.99933 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z" />
    </Icon>
  );
};

const TrashIcon = ({ className, ...props }: IconProps) => {
  return (
    <Icon className={c('trash-icon', className)} {...props}>
      <path
        d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
        fill="black"
      />
    </Icon>
  );
};

export {
  Icon,
  SunIcon,
  DiscordIcon,
  LinkedinIcon,
  UserIcon,
  HalfMoonIcon,
  ArrowTopIcon,
  ErrorIcon,
  WarnIcon,
  SwapIcon,
  InfoIcon,
  TagsIcon,
  OkIcon,
  FullScreenIcon,
  StatusIcon,
  TileFlipIcon,
  FullScreenCloseIcon,
  CodeIcon,
  PageIcon,
  CloseIcon,
  CheckIcon,
  FormIcon,
  MobileIcon,
  EditIcon,
  HamburgerIcon,
  SearchIcon,
  FiltersIcon,
  PlusIcon,
  ReviewsIcon,
  ActionsIcon,
  TrashIcon,
};
