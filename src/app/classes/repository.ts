import { User } from "./user";

export class Repository {
    constructor(
        public id: number,
        public name: string,
        public full_name: string,
        public forks: number,
        public language: string,
        public html_url: string,
        public owner: User,
        public created_at: Date,
    ){}
}
