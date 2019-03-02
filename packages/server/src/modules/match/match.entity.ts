import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany
} from 'typeorm'

import { Member } from '../member/member.entity'
import { Message } from '../message/message.entity'

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @ManyToOne(() => Member, member => member.match)
    member: Member[]

    @OneToMany(() => Message, message => message.match)
    messages: Message[]

    constructor() {
        this.date = new Date()
    }
}
