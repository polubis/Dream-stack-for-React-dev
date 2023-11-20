import { useScrollTo } from '@system/figa-hooks';
import {
  ArrowTopIcon,
  Bar,
  Button,
  HalfMoonIcon,
  SunIcon,
  useThemeProvider,
} from '@system/figa-ui';

const LeftBar = () => {
  const theme = useThemeProvider();
  const [, { toTop }] = useScrollTo();

  return (
    <Bar>
      <Button
        size={2}
        shape="rounded"
        onClick={() => theme.setTheme(theme.key === 'dark' ? 'light' : 'dark')}
      >
        {theme.key === 'dark' ? <SunIcon /> : <HalfMoonIcon />}
      </Button>
      <Button shape="rounded" size={2} onClick={() => toTop()}>
        <ArrowTopIcon />
      </Button>
    </Bar>
  );
};

export { LeftBar };
