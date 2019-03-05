import { Resolver, Mutation, Args, Query, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'

import { LikeService } from './like.service'
import { LikeDto } from './dto/like.dto'

const pubsub = new PubSub()

@Resolver()
export class LikeResolver {
    constructor(private readonly likeService: LikeService) {}

    @Query('likes')
    likes() {
        return this.likeService.getByUserIdAndCount(2)
    }

    @Mutation('like')
    like(@Args('input') like: LikeDto) {
        return this.likeService.like(like, pubsub)
    }

    @Subscription('newLike')
    newLike() {
        return {
            resolve: (payload, args) => {
                if (payload.toUserId !== args.userId) {
                    return null
                }
                return true
            },
            subscribe: () => pubsub.asyncIterator('newLike')
        }
    }
}
