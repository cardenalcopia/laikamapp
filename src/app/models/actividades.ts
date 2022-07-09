export class Actividades {
    public id_actividades:number;
    public imagen:string;
    public titulo:string;
    public tipo:string;
    public fecha:Date;
    public hora:string;
    public precio:string;
    public localizacion:string;
    public maxPerros:number;
    public informacion:string;
    constructor(id_actividades:number, imagen:string, titulo:string, tipo:string, 
        fecha:Date, hora:string, precio:string, localizacion:string, maxPerros:number, 
        informacion:string){
    this.id_actividades = id_actividades;
    this.imagen         = imagen;
    this.titulo         = titulo;
    this.tipo           = tipo;
    this.fecha          = fecha;
    this.hora           = hora;
    this.precio         = precio;
    this.localizacion   = localizacion;
    this.maxPerros      = maxPerros;
    this.informacion    = informacion;
    }
}
