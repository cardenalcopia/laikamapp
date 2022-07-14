export class Usuario {
    public id_usuario:number
    public nombre:string
    public apellidos:string
    public correo:string
    public num_perros:number
    public password:string
    
    constructor( id_usuario:number ,nombre:string, apellidos:string, correo:string,
                num_perros:number, password:string){
        this.id_usuario=id_usuario
        this.nombre    = nombre;
        this.apellidos = apellidos;
        this.correo    = correo;
        this.num_perros   = num_perros;
        this.password  = password;
    }

}
