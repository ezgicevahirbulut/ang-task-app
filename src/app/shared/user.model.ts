import { v4 as uuidv4 } from 'uuid'

export class User {
    public id: string
    public name: string
    public mail:string

    constructor(name: string, mail: string) {
        this.id = uuidv4()
        this.mail = mail
        
        this.name = name
    }
}