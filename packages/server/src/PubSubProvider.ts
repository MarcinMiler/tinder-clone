import { PubSub } from 'graphql-subscriptions'

export const PubSupProvider = {
    provide: 'PubSub',
    useValue: new PubSub()
}
