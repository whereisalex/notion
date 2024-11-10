import { Client } from "@notionhq/client";
import { TodoistApi } from "@doist/todoist-api-typescript";
import dotenv from "dotenv";
import { getBookInformation } from "./util";
import Notion from "./Notion";

dotenv.config();

async function main() {
  const notion = new Notion();

  const result = await notion.addEntryToDatabase("Hui boo");

  console.log("hello", result);
  /*const api = new TodoistApi(process.env.TODOIST_TOKEN ?? "");

  try {
    const tasks = await api.getTasks({
      projectId: process.env.TODOIST_PROJECT_ID,
    });
    console.log("Tasks:", getBookInformation(tasks));
  } catch (e) {} */
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
