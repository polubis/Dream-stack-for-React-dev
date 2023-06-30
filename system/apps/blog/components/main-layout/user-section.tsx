import { Button } from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';
import { get } from '@system/blog-selectors';

const UserSection = () => {
  const lang = useLang();

  return (
    <Link href={`/${lang}/sign-in/`}>
      <Button data-i={get('app-nav-sign-in-btn')}>Join us</Button>
    </Link>
  );
};

export { UserSection };
