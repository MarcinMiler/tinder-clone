import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Member } from './member.entity'

@Injectable()
export class MemberService {
    constructor(
        @InjectRepository(Member)
        private readonly memberRepository: Repository<Member>
    ) {}

    findByMatchId(matchId: number, userId: number, relations: string[]) {
        return this.memberRepository.findOne({
            where: { matchId, userId },
            relations
        })
    }
}
