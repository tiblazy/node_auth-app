import cors from 'cors';

export default cors({
  origin: `http://localhost:${process.env.PORT}`,
  credentials: true,
});
