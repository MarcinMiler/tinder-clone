import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Message } from './message.entity'
import { MessageResolver } from './message.resolver'
import { MessageService } from './message.service'
import { PubSupProvider } from '../../PubSubProvider'

@Module({
    imports: [TypeOrmModule.forFeature([Message])],
    providers: [MessageResolver, MessageService, PubSupProvider]
})
export class MessageModule {}
