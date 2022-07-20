export class Conversacion {
    public id_conversacion:number
    public nomCreador :string
    public mensaje:string;
    public id_usuario:number;
    public id_chat:number
    constructor(id_conversacion:number,nomCreador:string,mensaje:string,id_usuario:number,id_chat:number)
    {
        this.id_conversacion=id_conversacion
        this.nomCreador=nomCreador
        this.mensaje=mensaje
        this.id_usuario=id_usuario
        this.id_chat=id_chat
    }
}
