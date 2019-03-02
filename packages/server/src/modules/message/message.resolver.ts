import { Resolver, Args, Query, Mutation, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'

import { MessageService } from './message.service'
import { MessageDto } from './dto/message.dto'

const pubSub = new PubSub()

@Resolver()
export class MessageResolver {
    constructor(private readonly messageService: MessageService) {}

    @Query('messages')
    messages(@Args('matchId') matchId: number) {
        return this.messageService.getByMatchId(matchId)
    }

    @Mutation('createMessage')
    createMessage(@Args('input') message: MessageDto) {
        this.messageService.createMessage(message, pubSub)
    }

    @Subscription('createdMessage')
    createdMessage() {
        return {
            resolve: (payload, args) => {
                if (payload.matchId !== parseInt(args.matchId, 10)) {
                    return null
                }
                return payload
            },
            subscribe: () => pubSub.asyncIterator('createdMessage')
        }
    }
}
