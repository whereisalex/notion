import { TodoistApi } from "@doist/todoist-api-typescript";

class Todoist {
  private api: TodoistApi;

  constructor() {
    this.api = new TodoistApi(process.env.TODOIST_TOKEN ?? "");
  }

  public async getTasks(projectId: string) {
    try {
      const response = await this.api.getTasks({ projectId });
      return response;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  }
}

export default Todoist;
