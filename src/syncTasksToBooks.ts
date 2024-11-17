import {
  generateReadingDBPayload,
  getBookInformation,
  logResultToFile,
} from "./util";
import Notion from "./notion/Notion";
import Todoist from "./todoist/Todoist";
import { Book } from "./todoist/types";

const notionDataBaseId = process.env.NOTION_BOOKS_DATABASE_ID ?? "";
const todoistProjectId = process.env.TODOIST_READING_PROJECT_ID ?? "";

const syncTasksToBooks = async () => {
  const notion = new Notion();
  const todoist = new Todoist();

  const tasks = await todoist.getTasks(todoistProjectId);
  const books = getBookInformation(tasks);

  await Promise.all(
    books.map(async (book: Book) => {
      const result = await notion.addPage(
        generateReadingDBPayload(notionDataBaseId, book)
      );
      await logResultToFile(result);
    })
  );
};

export default syncTasksToBooks;
