import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Dislike {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: number

    @Column()
    toUserId: number

    @Column()
    date: Date

    constructor(userId: number, toUserId: number) {
        this.userId = userId
        this.toUserId = toUserId
        this.date = new Date()
    }
}
