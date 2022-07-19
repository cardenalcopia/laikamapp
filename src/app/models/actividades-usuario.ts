export class ActividadesUsuario {
    public id_actividades:number;
    public imagen:string;
    public titulo:string;
    public tipo:string;
    public fecha:Date;
    public hora:string;
    public localizacion:string;
    public id_usuario:number;
    public nombre:string;
    constructor(id_actividades:number, imagen:string, titulo:string, tipo:string, fecha:Date, hora:string,
                localizacion:string, id_usuario:number, nombre:string){
    this.id_actividades = id_actividades;
    this.imagen = imagen;
    this.titulo = titulo;
    this.tipo = tipo;
    this.fecha = fecha;
    this.hora = hora;
    this.localizacion = localizacion;
    this.id_usuario = id_usuario;
    this.nombre = nombre
                }
}
