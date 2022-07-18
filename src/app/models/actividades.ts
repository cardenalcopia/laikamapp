export class Actividades {
    public id_actividades:number;
    public imagen:string;
    public titulo:string;
    public tipo:string;
    public fecha:Date;
    public hora:string;
    public precio:string;
    public localizacion:string;
    public maxperros:number;
    public informacion:string;
    public id_creador:number;
    public disponibles:number;
    constructor(id_actividades:number, imagen:string, titulo:string, tipo:string, 
        fecha:Date, hora:string, precio:string, localizacion:string, maxperros:number, 
        informacion:string, id_creador:number, disponibles:number ){
    this.id_actividades = id_actividades;
    this.imagen         = imagen;
    this.titulo         = titulo;
    this.tipo           = tipo;
    this.fecha          = fecha;
    this.hora           = hora;
    this.precio         = precio;
    this.localizacion   = localizacion;
    this.maxperros      = maxperros;
    this.informacion    = informacion;
    this.id_creador    = id_creador;
    this.disponibles    = disponibles;
    }
}
