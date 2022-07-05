export class Usuario {
    public nombre:string
    public apellidos:string
    public correo:string
    public nPerros:number
    public password:string
    constructor(nombre:string, apellidos:string, correo:string,
                nPerros:number, password:string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.nPerros = nPerros;
        this.password = password;
    }
}
