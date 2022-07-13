export class Usuario {
    public nombre:string
    public apellidos:string
    public correo:string
    public num_perros:number
    public password:string
    
    constructor(nombre:string, apellidos:string, correo:string,
                num_perros:number, password:string){
        this.nombre    = nombre;
        this.apellidos = apellidos;
        this.correo    = correo;
        this.num_perros   = num_perros;
        this.password  = password;
    }

}
