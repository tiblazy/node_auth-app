const asyncError = (err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(400).send({
      issue: err.message,
    });
  }

  res.status(500).send({
    issue: 'Internal server error',
  });
};

export default asyncError;
