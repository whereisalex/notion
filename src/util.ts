import { Task } from "@doist/todoist-api-typescript";

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
