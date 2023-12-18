import {IsOptional,IsString,Length,IsEmail,IsNotEmpty} from 'class-validator'

export class CreateUserDto{

    @IsOptional({message:'fullName'})
    @IsNotEmpty({message:'fullName'})
    @IsString({message:'fullName'})
    @Length(3,20,{message:'malo, mnogo - pohuy fullName'})
    fullName:string

    @IsOptional({message:'email'})
    @IsNotEmpty({message:'email'})
    @IsString({message:'email'})
    @IsEmail({},{message:'email'})
    email:string

    @IsOptional({message:'password'})
    @IsNotEmpty({message:'password'})
    @IsString({message:'password'})
    @Length(4,16,{message:'mnogo,malo - pohuy password'})
    password:string
}