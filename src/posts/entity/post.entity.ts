import { UserEntity } from 'src/users/entity/user.entity'
import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,DeleteDateColumn} from 'typeorm'

@Entity('posts')
export class PostEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    text:string

    @DeleteDateColumn()
    deleteAt?:Date
    
    @ManyToOne(()=>UserEntity,(user)=>user.posts)
    user:UserEntity
}