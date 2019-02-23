import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'

import { User } from './user.entity'
import { RegisterDto } from './dto/register.dto'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async getById(id: string) {
        return await this.userRepository.findOne(id)
    }

    async getAll() {
        return await this.userRepository.find()
    }

    async register(register: RegisterDto) {
        const newUser = this.userRepository.create({ ...register })

        await this.userRepository.save(newUser)
    }
}
