import { Module } from '@nestjs/common'

import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
    providers: [UserService, UserResolver]
})
export class UserModule {}
