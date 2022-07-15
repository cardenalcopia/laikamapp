export class Pipican {
    public id_pipican:number
    public imagen:string
    public titulo:string
    public calle:string
    public distrito: string
    public longitud: string
    public latitud: string
    constructor(id_pipican:number, imagen:string, titulo:string,
                calle:string, distrito:string, longitud: string, latitud: string){
        this.id_pipican = id_pipican;
        this.imagen = imagen;
        this.titulo = titulo;
        this.calle = calle;
        this.distrito = distrito;
        this.longitud = longitud;
        this.latitud = latitud;
    }
}
