import { DataSource } from "typeorm"
import { Project } from "../src/entities/project";

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    logging: false,
    entities: [Project],
});

export default AppDataSource;