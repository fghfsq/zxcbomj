import {IsOptional,IsNotEmpty,IsString} from 'class-validator'

export class UpdatePostDto{
    @IsOptional({message:'title'})
    @IsNotEmpty({message:'title'})
    @IsString({message:'title'})
    title:string

    @IsOptional({message:'text'})
    @IsNotEmpty({message:'text'})
    @IsString({message:'text'})
    text:string
}