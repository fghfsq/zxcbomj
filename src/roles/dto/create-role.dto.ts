import {IsOptional,IsNotEmpty,IsString,Length} from 'class-validator'

export class CreateRoleDto{
    @IsOptional({message:'value'})
    @IsNotEmpty({message:'value'})
    @IsString({message:'value'})
    @Length(4,20,{message:'value'})
    value:string

    @IsOptional({message:'description'})
    @IsNotEmpty({message:'description'})
    @IsString({message:'description'})
    @Length(4,30,{message:'description'})
    description:string
}