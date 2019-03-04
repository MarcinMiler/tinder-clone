import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Dislike } from './dislike.entity'
import { DislikeResolver } from './dislike.resolver'
import { DislikeService } from './dislike.service'

@Module({
    imports: [TypeOrmModule.forFeature([Dislike])],
    providers: [DislikeResolver, DislikeService]
})
export class DislikeModule {}
