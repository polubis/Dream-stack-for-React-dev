import {
  Description,
  Email,
  Id,
  Name,
  PaginatedResponse,
  Title,
  Url,
} from './general';

type ArticleStatus = 'Draft' | 'WaitingForApproval' | 'NeedWork' | 'Accepted';

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
interface GetArticlesPayload {
  Search?: string;
  ItemsPerPage?: number;
  CurrentPage?: number;
}

export type {
  ArticleDto,
  ArticleStatus,
  GetArticlesResponse,
  GetArticlesPayload,
};
