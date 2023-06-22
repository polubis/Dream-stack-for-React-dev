import { Button } from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';

const UserSection = () => {
  const lang = useLang();

  return (
    <Link href={`/${lang}/sign-in/`}>
      <Button>Join us</Button>
    </Link>
  );
};

export { UserSection };
