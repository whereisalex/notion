import dotenv from "dotenv";
import syncTasksToBooks from "./syncTasksToBooks";

dotenv.config();

async function main() {
  await syncTasksToBooks();
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
