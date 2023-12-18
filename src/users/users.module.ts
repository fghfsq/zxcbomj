import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entity/user.entity'
import { PostEntity } from 'src/posts/entity/post.entity'
import { RoleEntity } from 'src/roles/entity/role.entity'

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports:[TypeOrmModule.forFeature([UserEntity,PostEntity,RoleEntity])],
  exports:[UsersService]
})
export class UsersModule {}
