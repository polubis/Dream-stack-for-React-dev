import type { ArticlesCreator } from './defs';
import type {
  FullArticleDto,
  ResponseError,
  Url,
} from '@system/blog-api-models';

const idle = (): ArticlesCreator.Idle => ({ is: 'idle' });
const creation = (
  form: ArticlesCreator.FormDataState
): ArticlesCreator.Creation => ({
  is: 'creation',
  form,
});
const creating = (
  form: ArticlesCreator.FormDataState
): ArticlesCreator.Creating => ({
  is: 'creating',
  form,
});
const created = (
  form: ArticlesCreator.FormDataState
): ArticlesCreator.Created => ({
  is: 'created',
  form,
});
const createFail = (
  form: ArticlesCreator.FormDataState,
  error: ResponseError
): ArticlesCreator.CreateFail => ({
  is: 'create-fail',
  form,
  error,
});
const loading = (url: Url): ArticlesCreator.Loading => ({
  is: 'loading',
  url,
});
const loadFail = (error: ResponseError): ArticlesCreator.LoadFail => ({
  is: 'load-fail',
  error,
});
const edition = (
  url: Url,
  form: ArticlesCreator.FormDataState,
  article: FullArticleDto
): ArticlesCreator.Edition => ({
  is: 'edition',
  url,
  form,
  article,
});
const edited = (
  url: Url,
  form: ArticlesCreator.FormDataState,
  article: FullArticleDto
): ArticlesCreator.Edited => ({
  is: 'edited',
  url,
  form,
  article,
});
const editing = (
  url: Url,
  form: ArticlesCreator.FormDataState,
  article: FullArticleDto
): ArticlesCreator.Editing => ({
  is: 'editing',
  form,
  url,
  article,
});
const editFail = (
  url: Url,
  form: ArticlesCreator.FormDataState,
  error: ResponseError,
  article: FullArticleDto
): ArticlesCreator.EditFail => ({
  is: 'edit-fail',
  url,
  form,
  error,
  article,
});

export {
  idle,
  creation,
  creating,
  createFail,
  created,
  loading,
  edition,
  editFail,
  loadFail,
  edited,
  editing,
};
