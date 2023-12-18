import { Module } from "@nestjs/common"
import { UsersModule } from './users/users.module'
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UserEntity } from "./users/entity/user.entity"
import { PostsModule } from './posts/posts.module'
import { PostEntity } from "./posts/entity/post.entity"
import { AuthModule } from './auth/auth.module'
import { RolesModule } from './roles/roles.module';
import { RoleEntity } from "./roles/entity/role.entity"

@Module({
  imports: [UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserEntity,PostEntity,RoleEntity],
      synchronize: true,
    }),
    PostsModule,
    AuthModule,
    RolesModule,]
})

export class AppModule{}