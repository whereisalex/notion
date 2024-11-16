import dotenv from "dotenv";
import {
  generateReadingDBPayload,
  getBookInformation,
  logResultToFile,
} from "./util";
import Notion from "./notion/Notion";
import Todoist from "./todoist/Todoist";
import { Book } from "./todoist/types";

dotenv.config();

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

async function main() {
  await syncTasksToBooks();
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
