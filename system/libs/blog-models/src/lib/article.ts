type ArticleStatus = 'Draft' | 'SendForApproval' | 'Rejected' | 'Published';

interface Article {
  id: string;
  title: string;
  description: string;
  authorEmail: string;
  authorName: string;
  thumbnailUrl: string;
  status: ArticleStatus;
  url: string;
}

export type { Article };
