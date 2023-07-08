import {
  Content,
  Description,
  Email,
  Id,
  Name,
  PaginatedResponse,
  Response,
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

interface FullArticleDto extends ArticleDto {
  content: Content;
}

type GetArticlesResponse = PaginatedResponse<ArticleDto[]>;
interface GetArticlesParams {
  Search?: string;
  ItemsPerPage?: number;
  CurrentPage?: number;
}

type GetArticleParams = { id: Id };
type GetArticleResponse = Response<FullArticleDto>;

export type {
  ArticleDto,
  ArticleStatus,
  GetArticlesResponse,
  GetArticlesParams,
  GetArticleParams,
  GetArticleResponse,
};
