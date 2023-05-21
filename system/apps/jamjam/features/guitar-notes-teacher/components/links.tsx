import { Link as FigaUILink, type LinkProps } from '@system/figa-ui';

const Link = ({ children, href, ...props }: LinkProps & { href: string }) => {
  return (
    <FigaUILink {...props}>
      <a target="_blank" rel="noreferrer" href={href}>
        {children}
      </a>
    </FigaUILink>
  );
};

const PlatformLink = (props: LinkProps) => {
  return <Link {...props} href="https://greenonsoftware.com/" />;
};

const AdriansLink = (props: LinkProps) => {
  return (
    <Link
      {...props}
      href="https://www.linkedin.com/in/adrian-po%C5%82ubi%C5%84ski-281ab2172"
    />
  );
};

const PlatformLinkedInLink = (props: LinkProps) => {
  return (
    <Link
      {...props}
      href="https://www.linkedin.com/company/greenon-software/"
    />
  );
};

const DreamStackRepoLink = (props: LinkProps) => {
  return (
    <Link
      {...props}
      href="https://github.com/polubis/Dream-stack-for-React-dev"
    />
  );
};

const PlatformRepoLink = (props: LinkProps) => {
  return <Link {...props} href="https://github.com/polubis/WebBlog" />;
};

const PlatformBoardLink = (props: LinkProps) => {
  return <Link {...props} href="https://github.com/users/polubis/projects/1" />;
};

export {
  PlatformLink,
  AdriansLink,
  PlatformLinkedInLink,
  DreamStackRepoLink,
  PlatformRepoLink,
  PlatformBoardLink,
};
