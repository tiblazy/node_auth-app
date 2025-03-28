const create = (status, message) => {
  const err = new Error(message);

  err.status = status;

  return err;
};

const badRequest = (message) => create(400, message);
const notFound = (message) => create(404, message);

export { badRequest, notFound };
