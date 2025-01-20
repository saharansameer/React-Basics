import config from "../config/config.js";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class DatabaseService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({slug, title, content, featuredImage, status, userId, userName }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    userName,
                }
            );
        } catch (error) {
            console.log("Appwrite/createPost : ", error);
        }
    };

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite/updatePost : ", error);
        }
    };

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            );
            return true;
        } catch (error) {
            console.log("Appwrite/deletePost : ", error);
        }
    };

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            );
        } catch (error) {
            console.log("Appwrite/getPost : ", error);
            return false;
        }
    };

    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite/getAllPosts : ", error);
            return false;
        }
    };

    async getUserAllPosts(userId) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [Query.equal("userId", userId)],
            )
        } catch (error) {
            console.log("Appwrite/getUserAllPosts : ", error);
            return false;
        }
    };

    // File upload/delete services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            );
        } catch (error) {
            console.log("Appwrite/uploadFile : ", error);
        }
    };

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId,
            );
        } catch (error) {
            console.log("Appwrite/deleteFile : ", error);
        }
    };

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId, 
        );
    }
}

const dbService = new DatabaseService();

export default dbService;