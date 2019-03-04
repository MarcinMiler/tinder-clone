import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Dislike } from './dislike.entity'

@Injectable()
export class DislikeService {
    constructor(
        @InjectRepository(Dislike)
        private readonly dislikeRepository: Repository<Dislike>
    ) {}

    async createDislike(userId: number, toUserId: number) {
        const newDislike = new Dislike(userId, toUserId)

        await this.dislikeRepository.save(newDislike)
    }
}
