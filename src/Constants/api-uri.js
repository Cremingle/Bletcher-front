/* init */
export const INIT = '/api';

/* image */
export const IMAGE_API = '/images';
export const IMAGE_PROFILE = '/profile';
export const IMAGE_POST = '/post';

/* auth */
export const AUTH_API = '/auth';

/* users */
export const USER_API = '/users';
export const USER_ONE = '/user';
export const MY = '/my';

/* posts */
export const POST_API = '/posts';
export const POST_ONE = '/one';

/* favorites */
export const FAVORITE_API = '/favorites';

/* mix */
export const MIX_API = '/mix';
export const MIX_ORIGIN = '/origin';
export const MIX_SUB = '/sub';

/* comments */
export const COMMENT_API = '/comments';

/* query */
export const QUERY_EMAIL = '?email=';
export const QUERY_NAME = '?nickname=';

/* apiGroup */
export const USER_REQ_GROUP = [
  `${POST_API}${USER_ONE}`,
  `${MIX_API}${MIX_ORIGIN}`,
  `${MIX_API}${MIX_SUB}`,
];
