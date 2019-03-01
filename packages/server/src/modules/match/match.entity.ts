import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    ManyToOne
} from 'typeorm'

import { User } from '../user/user.entity'
import { Member } from '../member/member.entity'

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Member, member => member.match)
    member: Member[]

    // @ManyToMany(() => User, user => user.matches)
    // @JoinTable()
    // users: User[]

    @Column()
    date: Date

    constructor() {
        this.date = new Date()
    }
}
