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
  Parametrized,
  DateStamp,
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

interface ArticleReviewDto {
  id: Id;
  articleId: Id;
  createdDate: DateStamp;
  modifiedDate: DateStamp;
  reviewerName: Name;
  // @TODO: Missing content property here - ask backend for that.
  isCurrentUserReviewer: boolean;
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

interface CreateArticlePayload {
  title: Title;
  description: Description;
  content: Content;
  lang: Lang;
  thumbnail: File;
}

type CreateArticleResponse = Response<{
  id: Id;
  url: Url;
}>;

interface UpdateArticlePayload extends CreateArticlePayload {
  url: Url;
}

type UpdateArticleResponse = Response<{
  id: Id;
  url: Url;
}>;

type DeleteArticlePayload = Parametrized;
type DeleteArticleResponse = void;

type AcceptArticlePayload = Parametrized;
type AcceptArticleResponse = void;

type RejectArticlePayload = Parametrized;
type RejectArticleResponse = void;

type SendArticleForApprovalPayload = Parametrized;
type SendArticleForApprovalResponse = void;

type GetArticleReviewsPayload = Parametrized;
type GetArticleReviewsResponse = Response<ArticleReviewDto[]>;

type CreateArticleReviewPayload = Parametrized & { content: Content };
// @TODO: Ask backend to return full created review.
type CreateArticleReviewResponse = Response<ArticleReviewDto>;

export type {
  AcceptArticlePayload,
  AcceptArticleResponse,
  RejectArticlePayload,
  ArticleReviewDto,
  RejectArticleResponse,
  SendArticleForApprovalPayload,
  SendArticleForApprovalResponse,
  ArticleDto,
  ArticleStatus,
  GetArticlesResponse,
  GetArticlesParams,
  GetArticleParams,
  CreateArticlePayload,
  CreateArticleResponse,
  UpdateArticlePayload,
  UpdateArticleResponse,
  GetArticleResponse,
  FullArticleDto,
  DeleteArticlePayload,
  DeleteArticleResponse,
  GetArticleReviewsResponse,
  GetArticleReviewsPayload,
  CreateArticleReviewPayload,
  CreateArticleReviewResponse,
};
