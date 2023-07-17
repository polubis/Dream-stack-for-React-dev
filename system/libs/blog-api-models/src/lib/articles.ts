import type {
  Description,
  Email,
  Id,
  Lang,
  Name,
  PaginatedResponse,
  Response,
  Title,
  Content,
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
  lang: Lang;
}

interface FullArticleDto extends ArticleDto {
  content: Content;
}

type GetArticlesResponse = PaginatedResponse<ArticleDto[]>;
interface GetArticlesParams {
  Search?: string;
  ItemsPerPage?: number;
  CurrentPage?: number;
  Status?: ArticleStatus;
  lang: Lang;
}

type GetArticleParams = { url: Url; lang: Lang };
type GetArticleResponse = Response<FullArticleDto>;

export type {
  ArticleDto,
  ArticleStatus,
  GetArticlesResponse,
  GetArticlesParams,
  GetArticleParams,
  GetArticleResponse,
  FullArticleDto,
};
