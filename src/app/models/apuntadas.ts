export class Apuntadas {
    public id_apuntadas:number
    public id_actividades:number
    public id_usuario:number
    public num_perros:number
    public id_creador:number
    public titulo:string
    constructor(id_apuntadas:number,id_actvidades:number,id_usuario:number,num_perros:number,id_creador:number,titulo:string)
    {
        this.id_apuntadas=id_apuntadas;
        this.id_actividades=id_actvidades;
        this.id_usuario=id_usuario;
        this.num_perros=num_perros;
        this.id_creador=id_creador;
        this.titulo=titulo;
    }
}
