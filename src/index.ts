import { Client } from "@notionhq/client";
import { TodoistApi } from "@doist/todoist-api-typescript";
import dotenv from "dotenv";
import { generateReadingDBPayload, getBookInformation } from "./util";
import Notion from "./Notion";
import Todoist from "./Todoist";
import { books } from "./books2";

dotenv.config();

async function main() {
  const notion = new Notion();

  //const result = await notion.addEntryToDatabase("Hui boo");

  //console.log(books);

  console.log(books[0]);
  const result = await notion.addPage(generateReadingDBPayload(books[0]));
  console.log("hello", result);

  // const todoist = new Todoist();

  //  const tasks = await todoist.getTasks();
  // console.log("Tasks:", getBookInformation(tasks));
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
