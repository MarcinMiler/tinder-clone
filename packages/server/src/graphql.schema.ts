/* tslint:disable */
export abstract class IQuery {
    abstract user(): User | Promise<User>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class User {
    id: string;
    name: string;
}
