import { Inject } from '@nestjs/common'
import { Resolver, Args, Query, Mutation, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'

import { MessageService } from './message.service'
import { MessageDto } from './dto/message.dto'

@Resolver()
export class MessageResolver {
    constructor(
        @Inject('PubSub') private readonly pubSub: PubSub,
        private readonly messageService: MessageService
    ) {}

    @Query('messages')
    messages(@Args('matchId') matchId: number, @Args('cursor') cursor: string) {
        return this.messageService.getByMatchId(matchId, cursor)
    }

    @Mutation('createMessage')
    createMessage(@Args('input') message: MessageDto) {
        this.messageService.createMessage(message)
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
            subscribe: () => this.pubSub.asyncIterator('createdMessage')
        }
    }
}
