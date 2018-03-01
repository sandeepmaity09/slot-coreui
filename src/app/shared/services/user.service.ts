import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Response } from '@angular/http';
import { IResponseObject, IUser } from '../models/index'
import { environment } from '../../../environments/environment';
import { BaseService } from './base.service';


/**
 * Represents a user service
 * Deals with all api related to user
 * @Class 
 */

@Injectable()
export class UserService extends BaseService {

    private host = environment.API_HOST;

    constructor(protected http: HttpClient) {
        super(http);
    }

    public getAllUsers() {
        let path = "/user/list";
        return this.http.get(this.host + path)
            .map(this.handleMap)
            .catch(this.handleError);
    }

    public deleteUser(id) {
        let path = "/user/delete";
        return this.http.delete(this.host + path, { params: { userId: id } })
            .map(this.handleMap)
            .catch(this.handleError);
    }

    public addUser(user: IUser,token?:string) {
        let obj:any  = {};
        obj.user = user;
        let path = "/user/add";
        return this.http.post(this.host + path, obj)
            .map(this.handleMap)
            .catch(this.handleError);
    }

    public getUser(id) {
        let path = "/user/find";
        return this.http.get(this.host + path + "/" + id)
            .map(this.handleMap)
            .catch(this.handleError);
    }

    public getUserByEmail(email:string){
        let path = "/user/find";
        return this.http.get(this.host + path + "/" + email)
            .map(this.handleMap)
            .catch(this.handleError);
    }

    public inviteUsers(emails:string[]){
        let path = "/user/invite";
        return this.http.post(this.host+path,emails)
            .map(this.handleMap)
            .catch(this.handleError)
    }

    public updateUser(id:number,user:IUser){
        let path = "/user/update/" + id;
        return this.http.put(this.host+path,user)
            .map(this.handleMap)
            .catch(this.handleError)
    }

    public 
}