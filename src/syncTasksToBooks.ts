import {
  generateReadingDBPayload,
  getBookInformation,
  logResultToFile,
} from "./util";
import Notion from "./notion/Notion";
import Todoist from "./todoist/Todoist";
import { Book } from "./todoist/types";

const syncTasksToBooks = async () => {
  const notion = new Notion();
  const todoist = new Todoist();

  const tasks = await todoist.getTasks();
  const books = getBookInformation(tasks);

  await Promise.all(
    books.map(async (book: Book) => {
      const result = await notion.addPage(generateReadingDBPayload(book));
      await logResultToFile(result);
    })
  );
};

export default syncTasksToBooks;