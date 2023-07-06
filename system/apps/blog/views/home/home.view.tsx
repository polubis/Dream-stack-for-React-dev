import {
  Box,
  Button,
  DiscordIcon,
  LeftBar,
  LinkedinIcon,
  UserIcon,
  ArrowTopIcon,
} from '@system/figa-ui';
import type { HomeViewProps } from './defs';
import { MainLayout } from '../../components';
import {
  GREEN_ON_SOFTWARE_AUTHOR,
  GREEN_ON_SOFTWARE_DISCORD,
  GREEN_ON_SOFTWARE_LINKEDIN,
} from '../../consts';
import { BlackHoleJumbo } from './black-hole/black-hole-jumbo';

const HomeView = ({ articles }: HomeViewProps) => {
  return (
    <>
      <MainLayout>
        <BlackHoleJumbo />
      </MainLayout>
      <LeftBar>
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
      </LeftBar>
    </>
  );
};

export { HomeView };
