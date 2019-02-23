import {
    Injectable,
    ExecutionContext,
    UnauthorizedException
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context)
        return ctx.getContext().req
    }

    handleRequest(err, user, info) {
        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}
