import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

import { Match } from '../match/match.entity'

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column()
    date: string

    @Column()
    userId: number

    @Column()
    matchId: number

    @ManyToOne(() => Match, match => match.messages)
    match: Match

    constructor(matchId: number, userId: number, text: string) {
        this.matchId = matchId
        this.userId = userId
        this.text = text
        this.date = `${new Date()}`
    }
}
