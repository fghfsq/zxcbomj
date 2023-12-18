import { PostEntity } from "src/posts/entity/post.entity"
import { RoleEntity } from "src/roles/entity/role.entity"
import { Column, Entity, PrimaryGeneratedColumn,OneToMany,ManyToMany,JoinTable } from "typeorm"

@Entity('users')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    fullName:string

    @Column()
    email:string

    @Column()
    password:string

    @Column('boolean',{default:false})
    banned:boolean = false

    @OneToMany(()=>PostEntity,(post)=>post.user)
    posts:PostEntity[]

    @ManyToMany(()=>RoleEntity)
    @JoinTable()
    roles:RoleEntity
}