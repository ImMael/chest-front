export class User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    friendsRequests: User[];
    friends: User[];

    constructor(id: string, username: string, email: string, password: string, createdAt: Date, friendsRequests: User[], friends: User[] = []) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.friendsRequests = friendsRequests;
        this.friends = friends;
    }
}
