import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Like } from './like.entity'
import { LikeDto } from './dto/like.dto'

@Injectable()
export class LikeService {
    constructor(
        @InjectRepository(Like)
        private readonly likeRepository: Repository<Like>
    ) {}

    async like(like: LikeDto) {
        const { userId, toUserId } = like

        const isMatch = await this.likeRepository.findOne({
            where: { userId: toUserId, toUserId: userId }
        })

        if (isMatch) {
            return 'its a match'
        }

        const newLike = this.likeRepository.create({
            ...like,
            date: new Date()
        })
        await this.likeRepository.save(newLike)
    }
}
