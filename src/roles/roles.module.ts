import { Module } from '@nestjs/common'
import { RolesService } from './roles.service'
import { RolesController } from './roles.controller'
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserEntity } from 'src/users/entity/user.entity'
import { RoleEntity } from './entity/role.entity'

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports:[TypeOrmModule.forFeature([RoleEntity,UserEntity])]
})
export class RolesModule {}
