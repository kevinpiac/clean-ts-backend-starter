import Guard from 'express-guard';

const authenticated = new Guard.Role('authenticated', {
  can: [
    'createNewTracker',
  ],
  func: req => {
    return req.userId && req.userId.length && !req.userTokenError
  },
});

export const guardRoles = [
  authenticated,
];

const guard = new Guard();
guard.roles = guardRoles;

export default guard;
