/* tslint:disable */
export abstract class LikeInput {
    userId: string;
    toUserId: string;
}

export abstract class LoginInput {
    email: string;
    password: string;
}

export abstract class RegisterInput {
    email: string;
    password: string;
    username: string;
    age: number;
    job?: string;
    education?: string;
    description?: string;
}

export abstract class Match {
    id: string;
    date: string;
    users?: User[];
}

export abstract class Member {
    id?: number;
    matchId?: number;
    match?: Match;
    userId?: number;
    matchedUserId?: number;
    matchedUser?: User;
}

export abstract class IMutation {
    abstract login(input: LoginInput): string | Promise<string>;

    abstract register(input: RegisterInput): boolean | Promise<boolean>;

    abstract like(input: LikeInput): string | Promise<string>;
}

export abstract class IQuery {
    abstract matches(userId: string): Match[] | Promise<Match[]>;

    abstract user(): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class User {
    id: number;
    username: string;
    age: number;
    job?: string;
    education?: string;
    description?: string;
    matches?: Member[];
}
