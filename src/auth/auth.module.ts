import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from 'src/users/users.module'
import {ConfigModule} from '@nestjs/config'
import {JwtModule} from '@nestjs/jwt'

@Module({
  imports:[UsersModule,
  ConfigModule.forRoot(),
  JwtModule.register({
    secret:process.env.JWT_SECRET,
    signOptions:{
      expiresIn:'24h'
    }
  })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
