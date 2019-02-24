import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId1: number

    @Column()
    userId2: number

    @Column()
    date: Date

    constructor(userId1: number, userId2: number) {
        this.userId1 = userId1
        this.userId2 = userId2
        this.date = new Date()
    }
}
