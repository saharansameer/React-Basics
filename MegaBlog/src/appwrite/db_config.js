import config from "../config/config.js";
import { Client, Databases, Storage} from "appwrite";

export class DatabaseService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    
}

const dbService = new DatabaseService();

export default dbService;