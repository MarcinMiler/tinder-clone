import * as TypeMoq from 'typemoq'
import { Repository } from 'typeorm'

import { User } from './user.entity'
import { UserService } from './user.service'
import { AuthService } from '../auth/auth.service'

describe('User module', () => {
    let mockUserRepo: TypeMoq.IMock<Repository<User>>
    let authService: TypeMoq.IMock<AuthService>
    let userService: UserService
    const bcrypt = {
        hash: jest.fn(() => 'hash')
    }

    const user = {
        id: 1,
        email: 'm@m.com',
        password: 'hash',
        username: 'm',
        age: 20,
        job: null,
        education: null,
        description: null
    }

    beforeEach(() => {
        mockUserRepo = TypeMoq.Mock.ofType<Repository<User>>()
        authService = TypeMoq.Mock.ofType<AuthService>()
        userService = new UserService(
            mockUserRepo.object,
            bcrypt,
            authService.object
        )
    })

    it(`should'nt register with incorrect credentials`, async () => {
        mockUserRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() => Promise.resolve(user))
            .verifiable()

        mockUserRepo
            .setup(x => x.create(TypeMoq.It.isAny()))
            .verifiable(TypeMoq.Times.never())

        // act
        await userService.register(user)

        // assert
        mockUserRepo.verifyAll()
    })

    it('should register with correct credentials', async () => {
        // arrange
        mockUserRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() => null)
            .verifiable()

        mockUserRepo
            .setup(x => x.create(TypeMoq.It.isObjectWith({ password: 'hash' })))
            .verifiable()

        mockUserRepo.setup(x => x.save(TypeMoq.It.isAny())).verifiable()

        // act
        const register = await userService.register(user)

        // assert
        expect(register).toBe(true)
        expect(bcrypt.hash).toHaveBeenCalledTimes(1)

        mockUserRepo.verifyAll()
    })

    it('should login with correct credentials', async () => {
        // arrange

        const mockBcrypt = {
            compare: jest.fn(() => true)
        }

        userService = new UserService(
            mockUserRepo.object,
            mockBcrypt,
            authService.object
        )

        mockUserRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() => Promise.resolve(user))
            .verifiable()

        authService
            .setup(x => x.signIn(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve('token'))
            .verifiable()

        // act
        const login = await userService.login({
            email: user.email,
            password: user.password
        })

        // arrange
        expect(login).toBe('token')
        mockUserRepo.verifyAll()
        authService.verifyAll()
    })

    it('should not login with invalid email', async () => {
        // arrange
        const mockBcrypt = {
            compare: jest.fn(() => false)
        }

        userService = new UserService(
            mockUserRepo.object,
            mockBcrypt,
            authService.object
        )

        mockUserRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() => null)
            .verifiable()

        authService
            .setup(x => x.signIn(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve('token'))
            .verifiable(TypeMoq.Times.never())

        // act
        const login = await userService.login({
            email: user.email,
            password: user.password
        })

        // arrange
        expect(login).toBeUndefined()
        expect(mockBcrypt.compare).toHaveBeenCalledTimes(0)
        mockUserRepo.verifyAll()
        authService.verifyAll()
    })

    it('should not login with invalid password', async () => {
        // arrange
        const mockBcrypt = {
            compare: jest.fn(() => false)
        }

        userService = new UserService(
            mockUserRepo.object,
            mockBcrypt,
            authService.object
        )

        mockUserRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() => Promise.resolve(user))
            .verifiable()

        authService
            .setup(x => x.signIn(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve('token'))
            .verifiable(TypeMoq.Times.never())

        // act
        const login = await userService.login({
            email: user.email,
            password: user.password
        })

        // arrange
        expect(login).toBeUndefined()
        expect(mockBcrypt.compare).toHaveBeenCalledTimes(1)
        mockUserRepo.verifyAll()
        authService.verifyAll()
    })
})
