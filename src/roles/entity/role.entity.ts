import { UserEntity } from 'src/users/entity/user.entity'
import {Entity,PrimaryGeneratedColumn,Column,ManyToMany,JoinTable} from 'typeorm'

@Entity('roles')
export class RoleEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    value:string

    @Column()
    description:string

    @ManyToMany(()=>UserEntity)
    @JoinTable()
    users:UserEntity
}