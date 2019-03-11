import { Inject, UseGuards } from '@nestjs/common'
import { Resolver, Mutation, Args, Query, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'

import { GqlAuthGuard } from '../auth/guards/GqlAuthGuard'
import { Usr } from '../user/decorators/userIdFromJwt.decorator'
import { LikeService } from './like.service'
import { LikeDto } from './dto/like.dto'

@Resolver()
export class LikeResolver {
    constructor(
        @Inject('PubSub') private readonly pubSub: PubSub,
        private readonly likeService: LikeService
    ) {}

    @Query('likes')
    @UseGuards(new GqlAuthGuard())
    likes(@Usr() user) {
        return this.likeService.getByUserIdAndCount(user.id)
    }

    @Mutation('like')
    like(@Args('input') like: LikeDto) {
        return this.likeService.like(like)
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
            subscribe: () => this.pubSub.asyncIterator('newLike')
        }
    }
}
