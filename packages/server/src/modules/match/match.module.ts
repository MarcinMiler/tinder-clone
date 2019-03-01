import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Match } from './match.entity'
import { MatchResolver } from './match.resolver'
import { MatchService } from './match.service'
import { User } from '../user/user.entity'
import { Member } from '../member/member.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Match, Member])],
    providers: [MatchResolver, MatchService],
    exports: [MatchService]
})
export class MatchModule {}
