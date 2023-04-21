export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    friends: User[];
    friendRequests: User[];

    constructor(id: number, username: string, email: string, password: string, createdAt: Date, updatedAt: Date, friends: User[], friendRequests: User[]) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.friends = friends;
        this.friendRequests = friendRequests;
    }
}
