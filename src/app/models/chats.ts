export class Chats {
    public id_chat :number
    public titulo:string
    public fotocreador:string
    public creador:number
    public id_usuario:number
    constructor(id_chat:number,titulo:string,fotocreador:string,creador:number,id_usuario:number)
    {
        this.id_chat=id_chat;
        this.titulo=titulo;
        this.fotocreador=fotocreador;
        this.creador=creador;
        this.id_usuario=id_usuario
    }

}
