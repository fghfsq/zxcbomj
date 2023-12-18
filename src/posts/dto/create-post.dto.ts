import {IsOptional,IsNotEmpty,IsString} from 'class-validator'

export class CreatePostDto{
    @IsOptional({message:'title'})
    @IsNotEmpty({message:'title'})
    @IsString({message:'title'})
    title:string

    @IsOptional({message:'text'})
    @IsNotEmpty({message:'text'})
    @IsString({message:'text'})
    text:string
}