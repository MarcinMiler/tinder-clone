import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { LikeModule } from './modules/like/like.module'
import { MatchModule } from './modules/match/match.module'

@Module({
    imports: [
        UserModule,
        AuthModule,
        LikeModule,
        MatchModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5431,
            username: 'root',
            password: 'root',
            database: 'tinder',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true
        }),
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
