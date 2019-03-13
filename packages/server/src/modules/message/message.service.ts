import { Injectable, Inject } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, LessThan, FindManyOptions } from 'typeorm'
import { PubSub } from 'graphql-subscriptions'

import { Message } from './message.entity'
import { MessageDto } from './dto/message.dto'

@Injectable()
export class MessageService {
    constructor(
        @Inject('PubSub') private readonly pubSub: PubSub,
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>
    ) {}

    async getByMatchId(matchId: number, cursor: string) {
        const options: FindManyOptions<Message> = {
            where: { matchId },
            order: { date: 'DESC' },
            take: 30
        }

        if (cursor) {
            options.where = {
                matchId,
                date: LessThan(cursor)
            }
        }

        return await this.messageRepository.find(options)
    }

    async createMessage(message: MessageDto) {
        const { matchId, userId, text } = message

        const newMessage = new Message(matchId, userId, text)
        await this.messageRepository.save(newMessage)

        this.pubSub.publish('createdMessage', newMessage)
    }
}
