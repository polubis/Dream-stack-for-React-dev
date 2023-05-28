import {
  Box,
  Button,
  CodeBlock,
  Font,
  DiscordIcon,
  LeftBar,
  LinkedinIcon,
  UserIcon,
  ArrowTopIcon,
} from '@system/figa-ui';
import type { HomeViewProps } from './defs';
import { MainLayout } from '../../components';

const HomeView = ({ articles }: HomeViewProps) => {
  return (
    <>
      <MainLayout>
        <Box spacing={[150]}>
          <CodeBlock>
            <Font variant="h5">{articles.length} articles</Font>
          </CodeBlock>
        </Box>
      </MainLayout>
      <LeftBar>
        <Button shape="rounded" size={2}>
          <ArrowTopIcon />
        </Button>
        <a
          className="icon-link"
          href="https://discord.gg/PxXQayT3x3"
          title="GreenOn Software Discord channel"
          target="_blank"
          rel="noreferrer"
        >
          <Button shape="rounded" size={2}>
            <DiscordIcon />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/adrian-po%C5%82ubi%C5%84ski-281ab2172/"
          title="Adrian Połubiński Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <Button shape="rounded" size={2}>
            <UserIcon />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/company/greenon-software/"
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
