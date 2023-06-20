import { createMethodWithBody } from './create-method-with-body';
import { createMethodWithoutBody } from './create-method-without-body';

const get = createMethodWithoutBody('get');
const del = createMethodWithoutBody('delete');

const pst = createMethodWithBody('post');
const put = createMethodWithBody('put');
const pch = createMethodWithBody('patch');

export { get, del, pst, put, pch };
