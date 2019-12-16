import { Observable } from 'rxjs';
import {Success} from "./response";

export interface User{
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
}





export abstract class AuthData {

    abstract isAuthenticated():boolean;
    abstract login():Observable<User>;
    abstract logout():void;
    abstract currentUserValue():Observable<User>;
    
}