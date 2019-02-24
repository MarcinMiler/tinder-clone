import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Match } from './match.entity'
import { MatchResolver } from './match.resolver'
import { MatchService } from './match.service'

@Module({
    imports: [TypeOrmModule.forFeature([Match])],
    providers: [MatchResolver, MatchService],
    exports: [MatchService]
})
export class MatchModule {}
