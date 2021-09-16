import { v4 as uuid } from "uuid";

class User {

    id?: string;
    name: string;
    email: string;
    admin: boolean;
    created_at: Date;

    constructor(){
      if(!this.id){
        this.id = uuid();
        this.admin = false;
        this.created_at = new Date();
      }
    }
}

export { User };