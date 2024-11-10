import { Task } from "@doist/todoist-api-typescript";
import { Book } from "./types";

export const getBookInformation = (tasks: Task[]) => {
  if (!tasks || !tasks.length) return [];

  return tasks.map((task) => {
    const { content, createdAt } = task;
    const [title, author] = content.split(" - ");

    return {
      title,
      author,
      createdAt,
    };
  });
};

export const generateReadingDBPayload = (book: Book) => ({
  parent: { database_id: process.env.NOTION_DATABASE_ID ?? "" },
  properties: {
    Name: {
      title: [
        {
          text: {
            content: book.title,
          },
        },
      ],
    },
    Author: {
      rich_text: [
        {
          text: {
            content: book.author,
          },
        },
      ],
    },
    "Date Added": {
      date: {
        start: book.createdAt,
      },
    },
    "Recommended by whom?": {
      rich_text: [
        {
          text: {
            content: book.recommendedBy ?? "",
          },
        },
      ],
    },

    Status: {
      select: {
        name: book.recommendedBy ? "Suggested" : "Discovered",
      },
    },
    Language: {
      multi_select: [
        {
          name: "English",
        },
      ],
    },
    Tags: {
      multi_select: [
        {
          name: "Todoist",
        },
      ],
    },
  },
});
