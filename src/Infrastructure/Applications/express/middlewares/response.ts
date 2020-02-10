export const ok = (res:any) => (data: any): void => {
  res.status(200);
  res.send(data);
};

export const error = (res: any) => (status, code, message) => {
  res.status(status);
  res.send({
    status,
    message,
    code,
  });
};

export const response = (_: any, res: any, next: any) => {
  res.ok = ok(res);
  res.error = error(res);
  next();
};

export default { response, ok, error };
