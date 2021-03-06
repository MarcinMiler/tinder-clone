import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AuthService } from '../auth/auth.service'
import { User } from './user.entity'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @Inject('bcrypt') private readonly bcrypt: any,
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ) {}

    async getById(id: number, relations: string[] = []) {
        return await this.userRepository.findOne(id, { relations })
    }

    async getAll() {
        return await this.userRepository.find({
            relations: ['matches', 'matches.match', 'matches.matchedUser']
        })
    }

    async register(register: RegisterDto) {
        const { email, password } = register

        const emailExists = await this.userRepository.findOne({
            where: { email }
        })

        if (emailExists) {
            return
        }

        const hash = await this.bcrypt.hash(password, 10)

        const newUser = this.userRepository.create({
            ...register,
            password: hash
        })
        await this.userRepository.save(newUser)

        return true
    }

    async login(login: LoginDto) {
        const { email, password } = login

        const user = await this.userRepository.findOne({ where: { email } })

        if (!user) {
            return
        }

        const comparePasswords = await this.bcrypt.compare(
            password,
            user.password
        )

        if (!comparePasswords) {
            return
        }

        const token = await this.authService.signIn(user.id)

        return token
    }
}
