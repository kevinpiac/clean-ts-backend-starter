import debug from 'debug';

export const log = (namespace: string) => (debug(`${process.env.LOGGER_NAME}:${namespace}`));

export default { log };
