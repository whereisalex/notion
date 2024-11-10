import { Client } from "@notionhq/client";
import { TodoistApi } from "@doist/todoist-api-typescript";
import dotenv from "dotenv";
import {
  generateReadingDBPayload,
  getBookInformation,
  logResultToFile,
} from "./util";
import Notion from "./Notion";
import Todoist from "./Todoist";
import { books } from "./books";
import fs from "fs";
import { Book } from "./types";

dotenv.config();

async function main() {
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
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
