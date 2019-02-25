import * as TypeMoq from 'typemoq'
import { Repository } from 'typeorm'

import { Match } from '../match/match.entity'
import { MatchService } from '../match/match.service'
import { Like } from './like.entity'
import { LikeService } from './like.service'

describe('Like module', () => {
    let mockLikeRepo: TypeMoq.IMock<Repository<Like>>
    let mockMatchRepo: TypeMoq.IMock<Repository<Match>>
    let likeService: LikeService
    let matchService: MatchService

    beforeEach(() => {
        mockMatchRepo = TypeMoq.Mock.ofType<Repository<Match>>()
        mockLikeRepo = TypeMoq.Mock.ofType<Repository<Like>>()

        matchService = new MatchService(mockMatchRepo.object)
        likeService = new LikeService(mockLikeRepo.object, matchService)
    })

    it('should save like to database and dont create match', async () => {
        // arrange
        mockLikeRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() => null)
            .verifiable()

        mockLikeRepo
            .setup(x => x.create(TypeMoq.It.isAny()))
            .returns(() => null)
            .verifiable()

        mockLikeRepo.setup(x => x.save(TypeMoq.It.isAny())).verifiable()

        // act
        await likeService.like({ userId: 1, toUserId: 2 })

        // assert
        mockLikeRepo.verifyAll()
    })

    it('should create a match and delete like', async () => {
        // arrange
        mockLikeRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(
                async () =>
                    new Promise(res =>
                        res({ id: 1, userId: 1, toUserId: 2, date: new Date() })
                    )
            )
            .verifiable()

        mockLikeRepo.setup(x => x.remove(TypeMoq.It.isAny())).verifiable()

        // act
        const like = await likeService.like({ userId: 1, toUserId: 2 })

        // arrange
        mockLikeRepo.verifyAll()
        expect(like).toBe('match')
    })
})
