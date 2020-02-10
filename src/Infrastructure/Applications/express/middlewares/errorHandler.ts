// @ts-nocheck

import _ from 'lodash';

export const errorHandler = (err, _req, res, _next) => {
  console.log('errorHandler: (before)', err);
  if (_.get(err, 'isGuard', null)) {
    err = { status: 403, code: 'forbidden', expose: true };
  }
  if (!err.expose) {
    err = { status: 500, code: 'internal error' };
  }

  console.log('errorHandler: (after)', err);
  res.error(err.status, err.code);
};

export default { errorHandler };
