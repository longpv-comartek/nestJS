import { Controller, Get, Post, Body, Put, Delete, Patch, Param, Query, HttpStatus, Version } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUser } from './dto/create-user.dto';
import { replaceUser } from './dto/replace-user.dto';
import { deleteUser } from './dto/delete-user.dto';
import { updateUser } from './dto/update-user.dto';
import { checkId } from './dto/check-id.dto';
import { ParseIntPipe } from './dto/parse-int.pipe'

@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService) { }

    @Get('/findAll')
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
    async delete(@Param() id: checkId) {
        return this.UserService.deleteUser(id);
    }

    @Patch('/update')
    async updateUser(@Body() updateUser: updateUser) {
        return this.UserService.updateUser(updateUser);
    }

    @Get(':id')
    async findOne(
        @Param('id', new ParseIntPipe())
        id: number,
    ) {
        return id;
    }

}
