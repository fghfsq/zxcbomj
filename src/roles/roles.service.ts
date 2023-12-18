import { Injectable } from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { RoleEntity } from './entity/role.entity'
import { CreateRoleDto } from './dto/create-role.dto'

@Injectable()
export class RolesService {
    constructor(@InjectRepository(RoleEntity) private repository:Repository<RoleEntity>){}

    async createRole(dto:CreateRoleDto){
        return this.repository.save(dto)
    }

    async findRoleByValue(value:string){
        return this.repository.findOneBy({value})
    }
}
