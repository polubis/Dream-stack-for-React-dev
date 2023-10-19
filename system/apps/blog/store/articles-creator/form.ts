import {
  NullableValidatorType,
  form,
  maxLength,
  minLength,
  pascalCase,
  required,
} from '@system/utils';
import type { ArticlesCreator } from './defs';
import type { ArticleTag } from '@system/blog-api-models';

const noDuplicatedTags = (
  tag: ArticleTag,
  values: ArticlesCreator.TagFormData
): NullableValidatorType => {
  return values.tags.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase())
    ? 'duplicated'
    : null;
};

const tagForm = form<ArticlesCreator.TagFormData>({
  validateOnInit: true,
})({
  tag: [required, minLength(1), maxLength(20), pascalCase, noDuplicatedTags],
});

const creatorForm = form<ArticlesCreator.FormData>({
  validateOnInit: true,
})({
  title: [required],
  description: [required],
  content: [required],
  lang: [required],
  tags: [minLength(1), maxLength(10)],
});

export { creatorForm, tagForm };
