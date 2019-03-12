import { Repository } from 'typeorm'
import { PubSub } from 'graphql-subscriptions'
import * as TypeMoq from 'typemoq'

import { Match } from './match.entity'
import { Member } from '../member/member.entity'
import { MatchService } from './match.service'

describe('Match module', () => {
    let mockMatchRepo: TypeMoq.IMock<Repository<Match>>
    let mockMemberRepo: TypeMoq.IMock<Repository<Member>>
    let pubSub: TypeMoq.IMock<PubSub>
    let matchService: MatchService

    beforeEach(() => {
        mockMatchRepo = TypeMoq.Mock.ofType<Repository<Match>>()
        mockMemberRepo = TypeMoq.Mock.ofType<Repository<Member>>()
        pubSub = TypeMoq.Mock.ofType<PubSub>()
        matchService = new MatchService(
            pubSub.object,
            mockMatchRepo.object,
            mockMemberRepo.object
        )
    })

    it('should create match', async () => {
        // arrange
        const match = new Match()
        const member1 = new Member(1, 1, 2)
        const member2 = new Member(1, 2, 1)

        mockMatchRepo.setup(x => x.save(TypeMoq.It.isObjectWith({ ...match })))

        mockMemberRepo.setup(x =>
            x.save([
                TypeMoq.It.isObjectWith({ ...member1 }),
                TypeMoq.It.isObjectWith({ ...member2 })
            ])
        )

        pubSub.setup(x =>
            x.publish(
                TypeMoq.It.isValue('newMatch'),
                TypeMoq.It.isObjectWith({ ...match, userId1: 1, userId2: 2 })
            )
        )

        // act
        await matchService.createMatch(1, 2)

        // assert
        mockMatchRepo.verifyAll()
        mockMemberRepo.verifyAll()
    })
})
