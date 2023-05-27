import {
  Description,
  Email,
  Id,
  Name,
  PaginatedResponse,
  Title,
  Url,
} from './general';

type ArticleStatus = 'Draft' | 'SendForApproval' | 'Rejected' | 'Published';

interface ArticleDto {
  id: Id;
  title: Title;
  description: Description;
  authorEmail: Email;
  authorName: Name;
  thumbnailUrl: Url;
  status: ArticleStatus;
  url: Url;
}

type GetArticlesResponse = PaginatedResponse<ArticleDto[]>;

export type { ArticleDto, ArticleStatus, GetArticlesResponse };
