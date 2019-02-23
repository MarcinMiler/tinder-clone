import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    username: string

    @Column()
    age: number

    @Column({ nullable: true })
    job: string

    @Column({ nullable: true })
    education: string

    @Column({ nullable: true })
    description: string
}
