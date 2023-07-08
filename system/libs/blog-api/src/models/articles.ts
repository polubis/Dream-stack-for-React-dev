import {
  Content,
  Description,
  Email,
  Id,
  Lang,
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
interface GetArticlesSearchParams {
  Search?: string;
  ItemsPerPage?: number;
  CurrentPage?: number;
}

interface CreateArticlePayload {
  title: Title;
  description: Description;
  content: Content;
  lang: Lang;
  url: Url;
  thumbnail: unknown;
}
type CreateArticleResponse = void;

export type {
  ArticleDto,
  ArticleStatus,
  GetArticlesResponse,
  GetArticlesSearchParams,
  CreateArticlePayload,
  CreateArticleResponse,
};
