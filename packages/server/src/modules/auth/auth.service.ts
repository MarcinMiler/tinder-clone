import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserService } from '../user/user.service'
import { JwtPayload } from './interfaces/JwtPayload.interface'

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async signIn(id: number) {
        const user: JwtPayload = { id }

        return this.jwtService.sign(user)
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.userService.getById(payload.id)
    }
}
