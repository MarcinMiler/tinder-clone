import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Match } from './match.entity'
import { MatchResolver } from './match.resolver'
import { MatchService } from './match.service'
import { Member } from '../member/member.entity'
import { PubSupProvider } from 'src/PubSubProvider'

@Module({
    imports: [TypeOrmModule.forFeature([Match, Member])],
    providers: [MatchResolver, MatchService, PubSupProvider],
    exports: [MatchService]
})
export class MatchModule {}
