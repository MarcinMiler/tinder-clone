import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Like } from './like.entity'
import { LikeResolver } from './like.resolver'
import { LikeService } from './like.service'

@Module({
    imports: [TypeOrmModule.forFeature([Like])],
    providers: [LikeResolver, LikeService]
})
export class LikeModule {}
