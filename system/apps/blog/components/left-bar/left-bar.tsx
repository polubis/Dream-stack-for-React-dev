import {
  ArrowTopIcon,
  Button,
  DiscordIcon,
  LinkedinIcon,
  LeftBar as UILeftBar,
  UserIcon,
} from '@system/figa-ui';
import {
  GREEN_ON_SOFTWARE_AUTHOR,
  GREEN_ON_SOFTWARE_DISCORD,
  GREEN_ON_SOFTWARE_LINKEDIN,
} from '../../consts';

const LeftBar = () => {
  return (
    <UILeftBar>
      <Button shape="rounded" size={2}>
        <ArrowTopIcon />
      </Button>
      <a
        href={GREEN_ON_SOFTWARE_DISCORD}
        title="GreenOn Software Discord channel"
        target="_blank"
        rel="noreferrer"
      >
        <Button shape="rounded" size={2}>
          <DiscordIcon />
        </Button>
      </a>
      <a
        href={GREEN_ON_SOFTWARE_AUTHOR}
        title="Adrian Połubiński Linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <Button shape="rounded" size={2}>
          <UserIcon />
        </Button>
      </a>
      <a
        href={GREEN_ON_SOFTWARE_LINKEDIN}
        title="Linkedin GreenOn Software profile"
        target="_blank"
        rel="noreferrer"
      >
        <Button shape="rounded" size={2}>
          <LinkedinIcon />
        </Button>
      </a>
    </UILeftBar>
  );
};

export { LeftBar };
