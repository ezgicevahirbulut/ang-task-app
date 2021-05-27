import { v4 as uuidv4 } from 'uuid'

export class User {
    id: string
    name: string
    mail:string

    constructor(name: string, url: string) {
        this.id = uuidv4()
        this.mail = this.mail
        
        this.name = name
    }
}