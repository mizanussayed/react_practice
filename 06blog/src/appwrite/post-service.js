import { Client, Databases, Query, Storage, ID } from "appwrite";
import { conf } from "../conf/conf";

export class PostService {
    client = new Client();
    database;
    storage;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId)
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featureImage, status, userId }) {
        try {
            return await this.database.createDocument(conf.dbId, conf.collecitonId, slug, {
                title,
                content,
                featureImage,
                status,
                userId,
            })
        } catch (err) {
            console.log("appwrite error to create post", err);
        }
    }
    async updatePost({ slug, title, content, featureImage, status }) {
        try {
            return await this.database.updateDocument(conf.dbId, conf.collecitonId, slug, { title, content, featureImage, status });
        } catch (err) {
            console.log("appwrite error to update post", err);
        }
    }
    async deletePost({ slug }) {
        try {
            await this.database.deleteDocument(conf.dbId, conf.collecitonId, slug);
        } catch (err) {
            console.log("appwrite error to update post", err);
        }
    }
    async getPosts(que = [Query.equal("status", "active")]) {
        try {
            return this.database.listDocuments(conf.dbId, conf.collecitonId, que)
        } catch (error) {
            console.log("apwrite error to get list", error)
        }
    }
    async uploadFile(file) {
        try {
            return await this.storage.createFile(conf.bucketId, ID.unique(), FileList)
        } catch (error) {
            console.log("apwrite error to upload file", error)
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(fileId);
        } catch (error) {
            console.log("apwrite error to file", error)
        }
    }
    getFilePreview(fileId){
        return this.storage.getFilePreview(conf.bucketId, fileId)
    }
}
export const postService = new PostService()