import { Resolver, Query, Args } from '@nestjs/graphql'

import { MatchService } from './match.service'

@Resolver('Match')
export class MatchResolver {
    constructor(private readonly matchService: MatchService) {}

    @Query('matches')
    matches(@Args('userId') userId: number) {
        return this.matchService.findByUserId(userId)
    }
}
