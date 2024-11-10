import { Client } from "@notionhq/client";

class Notion {
  private notion: Client;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
  }

  async addEntryToDatabase(taskName: string) {
    try {
      const response = await this.notion.pages.create({
        parent: { database_id: process.env.NOTION_DATABASE_ID ?? "" },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: taskName,
                },
              },
            ],
          },
        },
      });
      return response;
    } catch (error) {
      console.error("Error adding entry to database:", error);
    }
  }

  async queryDatabase(databaseId: string, filter: any) {
    try {
      const response = await this.notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID ?? "",
      });
      return response.results;
    } catch (error) {
      console.error("Error querying database:", error);
    }
  }
}

export default Notion;
