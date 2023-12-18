import { Injectable } from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { PostEntity } from './entity/post.entity'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'

@Injectable()
export class PostsService {
    constructor(@InjectRepository(PostEntity) private repository:Repository<PostEntity>){}

    async createPost(dto:CreatePostDto){
        return this.repository.save(dto)
    }

    async getAllPosts(){
        return this.repository.find()
    }

    async deletePost(id:number){
        await this.repository.delete(id)

        return 'zbs pizda'
    }

    async updatePost(id:number,dto:UpdatePostDto){
        await this.repository.update(id,{
            title:dto.title,
            text:dto.text
        })
        
        return 'zbs'
    }
}
