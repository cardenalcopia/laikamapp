export class Actividades {
    public titulo:string
    public tipo:string
    public fecha:string
    public localizacion:string
    public maxPerros:number
    public informacion:string
    constructor(titulo:string, tipo:string, fecha:string, localizacion:string,
        maxPerros:number, informacion:string){
    this.titulo = titulo;
    this.tipo = tipo;
    this.fecha = fecha;
    this.localizacion = localizacion;
    this.maxPerros = maxPerros;
    this.informacion = informacion
        }
}
