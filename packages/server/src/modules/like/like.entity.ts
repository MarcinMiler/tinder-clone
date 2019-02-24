import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: number

    @Column()
    toUserId: number

    @Column()
    date: Date
}
