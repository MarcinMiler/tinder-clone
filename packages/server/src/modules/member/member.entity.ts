import {
    Entity,
    Column,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm'

import { User } from '../user/user.entity'
import { Match } from '../match/match.entity'

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    matchId: number

    @ManyToOne(() => Match)
    @JoinColumn()
    match: Match

    @Column()
    userId: number

    @ManyToOne(() => User, user => user.matches)
    user: User

    @Column()
    matchedUserId: number

    @ManyToOne(() => User)
    @JoinColumn({ name: 'matchedUserId' })
    matchedUser: User

    constructor(matchId: number, userId: number, matchedUserId: number) {
        this.matchId = matchId
        this.userId = userId
        this.matchedUserId = matchedUserId
    }
}
