import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from '../user/user.entity'
import { Dislike } from '../dislike/dislike.entity'
import { Member } from '../member/member.entity'
import { Like } from '../like/like.entity'
import { DiscoverResolver } from './discover.resolver'
import { DiscoverService } from './discover.service'

@Module({
    imports: [TypeOrmModule.forFeature([User, Dislike, Member, Like])],
    providers: [DiscoverResolver, DiscoverService]
})
export class DiscoverModule {}
