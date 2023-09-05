import { Avatar, Font } from '@system/figa-ui';
import type { ArticleDetailsProps } from './defs';

const ArticleDetails = ({
  authorName,
  title,
  description,
}: ArticleDetailsProps) => {
  return (
    <>
      <Avatar
        alt={authorName}
        size="big"
        src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
      />
      <Font variant="h6">{authorName}</Font>
      <Font variant="h3">{title}</Font>
      <Font variant="h6">{description}</Font>
    </>
  );
};

export { ArticleDetails };
