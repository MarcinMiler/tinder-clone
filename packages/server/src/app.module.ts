import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { UserModule } from './modules/user/user.module'

@Module({
    imports: [
        UserModule,
        GraphQLModule.forRoot({
            context: ({ req }) => ({ req }),
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/graphql.schema.ts'),
                outputAs: 'class'
            },
            path: '/'
        })
    ]
})
export class AppModule {}
