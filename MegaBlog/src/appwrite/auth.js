import config from "../config/config.js";
import {Client, Account, ID} from "appwrite"

export class AuthService { 
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.ProjectId);

        this.account = new Account(this.client);
    }

};

const authService = new AuthService();

export default authService;