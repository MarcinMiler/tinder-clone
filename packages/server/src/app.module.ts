import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { LikeModule } from './modules/like/like.module'
import { DislikeModule } from './modules/dislike/dislike.module'
import { MatchModule } from './modules/match/match.module'
import { MessageModule } from './modules/message/message.module'
import { MemberModule } from './modules/member/member.module'
import { DiscoverModule } from './modules/discover/discover.module'

@Module({
    imports: [
        UserModule,
        AuthModule,
        LikeModule,
        DislikeModule,
        MatchModule,
        MessageModule,
        MemberModule,
        DiscoverModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.HOST,
            url: process.env.DATABASE_URL,
            port: 5432,
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            extra: {
                ssl: true
            }
            // type: 'postgres',
            // host: 'localhost',
            // port: 5431,
            // username: 'root',
            // password: 'root',
            // database: 'tinder',
            // entities: [__dirname + '/**/*.entity{.ts,.js}'],
            // synchronize: true
        }),
        GraphQLModule.forRoot({
            context: ({ req }) => ({ req }),
            typePaths: ['./**/*.graphql'],
            installSubscriptionHandlers: true,
            definitions: {
                path: join(process.cwd(), 'src/graphql.schema.ts'),
                outputAs: 'class'
            },
            path: '/'
        })
    ]
})
export class AppModule {}
