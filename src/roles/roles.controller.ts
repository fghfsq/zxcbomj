import { Controller ,Post,Get,Body,Param} from '@nestjs/common'
import { RolesService } from './roles.service'
import { CreateRoleDto } from './dto/create-role.dto'

@Controller('roles')
export class RolesController {
    constructor(private rolesService:RolesService){}

    @Post()
    async create(@Body() dto:CreateRoleDto){
        return this.rolesService.createRole(dto)
    }

    @Get('/:value')
    async getByValue(@Param('value') value){
        return this.rolesService.findRoleByValue(value)
    }
}
