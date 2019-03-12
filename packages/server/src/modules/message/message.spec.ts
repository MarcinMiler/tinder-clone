import { Repository } from 'typeorm'
import { PubSub } from 'graphql-subscriptions'
import * as TypeMoq from 'typemoq'

import { Message } from './message.entity'
import { MessageService } from './message.service'

describe('Message module', () => {
    let mockMessageRepo: TypeMoq.IMock<Repository<Message>>
    let pubSub: TypeMoq.IMock<PubSub>
    let messageService: MessageService

    beforeEach(() => {
        mockMessageRepo = TypeMoq.Mock.ofType<Repository<Message>>()
        pubSub = TypeMoq.Mock.ofType<PubSub>()
        messageService = new MessageService(
            pubSub.object,
            mockMessageRepo.object
        )
    })

    it('should create message', async () => {
        // arrange
        const message = {
            matchId: 1,
            userId: 1,
            text: 'Hey!'
        }
        mockMessageRepo
            .setup(x => x.save(TypeMoq.It.isObjectWith({ ...message })))
            .verifiable()

        pubSub
            .setup(x =>
                x.publish(
                    TypeMoq.It.isValue('createdMessage'),
                    TypeMoq.It.isObjectWith({ ...message })
                )
            )
            .verifiable()

        // act
        await messageService.createMessage(message)

        // assert
        mockMessageRepo.verifyAll()
        pubSub.verifyAll()
    })
})
