import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Not, In } from 'typeorm'

import { User } from '../user/user.entity'
import { Dislike } from '../dislike/dislike.entity'
import { Member } from '../member/member.entity'
import { Like } from '../like/like.entity'

@Injectable()
export class DiscoverService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Dislike)
        private readonly dislikeRepository: Repository<Dislike>,
        @InjectRepository(Member)
        private readonly memberRepository: Repository<Member>,
        @InjectRepository(Like)
        private readonly likeRepository: Repository<Like>
    ) {}

    // needs improvements, later maybe elasticsearch
    async search(userId: number) {
        const dislikes = await this.dislikeRepository.find({
            where: { userId },
            select: ['toUserId']
        })

        const matches = await this.memberRepository.find({
            where: { userId },
            select: ['matchedUserId']
        })
        const likes = await this.likeRepository.find({
            where: { userId },
            select: ['toUserId']
        })

        const ids = [userId]

        dislikes.forEach(dislike => ids.push(dislike.toUserId))
        matches.forEach(match => ids.push(match.matchedUserId))
        likes.forEach(like => ids.push(like.toUserId))

        return await this.userRepository.find({
            where: { id: Not(In(ids)) }
        })
    }
}
