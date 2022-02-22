import { Controller, Get, Post, Body, Put, Delete, Patch, Param, Query } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUser } from './dto/CreateUser';
import { replaceUser } from './dto/ReplaceUser';
import { deleteUser } from './dto/deleteUser'
import { updateUser } from './dto/updateUser'
import { PostRouteDto } from './dto/validation';

@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService) { }

    @Get()
    getUser(): object {
        return this.UserService.getUser()
    }

    @Get('/search/:key')
    async searchUser(@Param('key') key: string) {
        return this.UserService.searchUser(key)
    }


    @Post('/create')
    async createUser(@Body() CreateUser: CreateUser) {
        return this.UserService.createUser(CreateUser)
    }

    @Put('/replace')
    async replace(@Body() replaceUser: replaceUser) {
        return this.UserService.replaceUser(replaceUser);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id: number) {
        return this.UserService.deleteUser(id);
    }

    @Patch('/update')
    async updateUser(@Body() updateUser: updateUser) {
        return this.UserService.updateUser(updateUser);
    }

    @Get('/test')
    test(): PostRouteDto {
        return  
    }
}
