import { TodoistApi } from "@doist/todoist-api-typescript";

class Todoist {
  private api: TodoistApi;

  constructor() {
    this.api = new TodoistApi(process.env.TODOIST_TOKEN ?? "");
  }

  public async getTasks() {
    try {
      const response = await this.api.getTasks({
        projectId: process.env.TODOIST_PROJECT_ID,
      });
      return response;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  }
}

export default Todoist;
