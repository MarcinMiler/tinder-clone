import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { DislikeService } from './dislike.service'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '../auth/guards/GqlAuthGuard'
import { Usr } from '../user/decorators/userIdFromJwt.decorator'

@Resolver()
export class DislikeResolver {
    constructor(private readonly dislikeService: DislikeService) {}

    @Mutation('dislike')
    // @UseGuards(new GqlAuthGuard())
    dislike(@Args('toUserId') toUserId: number, @Usr() userId: number) {
        return this.dislikeService.createDislike(toUserId, 1)
    }
}
