import { Injectable } from '@nestjs/common';
import User from './dto/user'
import { CreateUser } from './dto/CreateUser';
import { replaceUser } from './dto/replaceUser';
import { deleteUser } from './dto/deleteUser'
import { updateUser } from './dto/updateUser'

@Injectable()
export class UserService {
    private user = User.Users

    getUser(): object {
        return this.user;
    }

    async createUser(CreateUser: CreateUser) {
        try {
            this.user.push(CreateUser);
            return this.user;
        } catch {
            return false;
        }
    }

    async replaceUser(replaceUser: replaceUser) {
        try {
            this.user = this.user.map(u => u.id !== +replaceUser.id ? u : replaceUser);;
            console.log(replaceUser, this.user);

            return this.user;
        } catch {
            return false;
        }
    }

    async deleteUser(id: number) {
        try {
            this.user.splice(id, 1);
            return this.user;
        } catch {
            return false;
        }
    }

    async updateUser(updateUser: updateUser) {
        try {
            this.user[updateUser.index] = updateUser
            return this.user;
        } catch {
            return false;
        }
    }

    async searchUser(str: string) {
        try {
            const keysearch = this.user.filter(item => item.name.toLowerCase().trim().includes(str.toLowerCase().trim()))
            return keysearch
        } catch {
            return false;
        }
    }
}
