export class Pipican {
    public id_pipican:number
    public imagen:string
    public titulo:string
    public calle:string
    public distancia:string
    constructor(id_pipican:number, imagen:string, titulo:string,
                calle:string, distancia:string){
        this.id_pipican = id_pipican;
        this.imagen = imagen;
        this.titulo = titulo;
        this.calle = calle
        this.distancia = distancia
    }
}
