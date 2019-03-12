import * as TypeMoq from 'typemoq'
import { Repository } from 'typeorm'

import { MatchService } from '../match/match.service'
import { Like } from './like.entity'
import { LikeService } from './like.service'
import { PubSub } from 'graphql-subscriptions'

describe('Like module', () => {
    let mockLikeRepo: TypeMoq.IMock<Repository<Like>>
    let matchService: TypeMoq.IMock<MatchService>
    let pubSub: TypeMoq.IMock<PubSub>
    let likeService: LikeService

    beforeEach(() => {
        mockLikeRepo = TypeMoq.Mock.ofType<Repository<Like>>()
        matchService = TypeMoq.Mock.ofType<MatchService>()
        pubSub = TypeMoq.Mock.ofType<PubSub>()
        likeService = new LikeService(
            pubSub.object,
            mockLikeRepo.object,
            matchService.object
        )
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

        matchService
            .setup(x =>
                x.createMatch(
                    TypeMoq.It.isAnyNumber(),
                    TypeMoq.It.isAnyNumber()
                )
            )
            .verifiable(TypeMoq.Times.never())

        mockLikeRepo.setup(x => x.save(TypeMoq.It.isAny())).verifiable()

        // act
        await likeService.like({ userId: 1, toUserId: 2 })

        // assert
        mockLikeRepo.verifyAll()
        matchService.verifyAll()
    })

    it('should create a match and delete like', async () => {
        // arrange
        mockLikeRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() =>
                Promise.resolve({
                    id: 1,
                    userId: 1,
                    toUserId: 2,
                    date: new Date()
                })
            )
            .verifiable()

        mockLikeRepo.setup(x => x.remove(TypeMoq.It.isAny())).verifiable()

        matchService
            .setup(x =>
                x.createMatch(
                    TypeMoq.It.isAnyNumber(),
                    TypeMoq.It.isAnyNumber()
                )
            )
            .verifiable()

        pubSub.setup(x =>
            x.publish(TypeMoq.It.isAnyString(), TypeMoq.It.isAnyObject)
        )

        // act
        const like = await likeService.like({ userId: 1, toUserId: 2 })

        // arrange
        expect(like).toBe('match')
        mockLikeRepo.verifyAll()
        matchService.verifyAll()
    })
})
