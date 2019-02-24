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
    userId1: string;
    userId2: string;
    date: string;
}

export abstract class IMutation {
    abstract like(input: LikeInput): string | Promise<string>;

    abstract login(input: LoginInput): string | Promise<string>;

    abstract register(input: RegisterInput): boolean | Promise<boolean>;
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
}
