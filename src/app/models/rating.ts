export class Rating {
    public id_rating:number
    public id_pipican:number
    public calificacion: number
    public id_usuario: number
    constructor(id_rating:number, id_pipican:number, calificacion:number, id_usuario:number){
        this.id_rating = id_rating
        this.id_pipican = id_pipican;
        this.calificacion = calificacion;
        this.id_usuario = id_usuario;
    }
}
