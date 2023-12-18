import { Controller,Post,Get,Delete,Put ,Param,Body} from '@nestjs/common'
import { PostsService } from './posts.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'

@Controller('posts')
export class PostsController {
    constructor(private postService:PostsService){}

    @Post()
    async create(@Body() dto:CreatePostDto){
        return this.postService.createPost(dto)
    }

    @Get()
    async findAll(){
        return this.postService.getAllPosts()
    }

    @Delete('/:id')
    async deletePost(@Param('id') id){
        return this.postService.deletePost(id)
    }

    @Put('/:id')
    async updatePost(@Param('id') id,@Body() dto:UpdatePostDto){
        return this.postService.updatePost(id,dto)
    }
}
