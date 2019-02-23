/* tslint:disable */
export abstract class RegisterInput {
    name: string;
}

export abstract class IMutation {
    abstract register(input: RegisterInput): string | Promise<string>;
}

export abstract class IQuery {
    abstract user(): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class User {
    id: string;
    name: string;
}
