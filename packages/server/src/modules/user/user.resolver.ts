import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { UserService } from './user.service'
import { RegisterDto } from './dto/register.dto'

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query('user')
    async getUser() {
        return this.userService.getById('1')
    }

    @Query('users')
    async getUsers() {
        return this.userService.getAll()
    }

    @Mutation('register')
    async register(@Args('input') register: RegisterDto) {
        await this.userService.register(register)

        return 'ok'
    }
}
