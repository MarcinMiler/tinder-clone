import { Resolver, Mutation, Args } from '@nestjs/graphql'

import { LikeService } from './like.service'
import { LikeDto } from './dto/like.dto'

@Resolver()
export class LikeResolver {
    constructor(private readonly likeService: LikeService) {}

    @Mutation('like')
    like(@Args('input') like: LikeDto) {
        return this.likeService.like(like)
    }
}
