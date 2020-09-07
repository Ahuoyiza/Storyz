import { userRouter } from "./Users";
import { booksRouter } from "./Books";
import { bookFormRouter } from "./BookForm";

export default (app) => {
  app.use(userRouter);
  app.use(booksRouter);
  app.use(bookFormRouter);
};
