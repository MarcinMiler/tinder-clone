import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Match } from './match.entity'

@Injectable()
export class MatchService {
    constructor(
        @InjectRepository(Match)
        private readonly matchRepository: Repository<Match>
    ) {}

    async createMatch(userId1: number, userId2: number) {
        const newMatch = new Match(userId1, userId2)

        await this.matchRepository.save(newMatch)
    }

    findByUserId(userId: number) {
        return this.matchRepository
            .createQueryBuilder('match')
            .where('match.userId1 = :userId OR match.userId2 = :userId', {
                userId
            })
            .getMany()
    }
}
