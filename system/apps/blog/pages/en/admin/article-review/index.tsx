import { AdminsOnly } from '../../../../core';
import { ArticleReviewView } from '../../../../views/article-review';

const ArticleReviewPage = () => {
  return (
    <AdminsOnly>
      <ArticleReviewView />
    </AdminsOnly>
  );
};

export default ArticleReviewPage;
