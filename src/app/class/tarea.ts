export class tarea{
    nombre:string='';
    estado:string='';
    fecha:Date=new Date;
    fecha_cumplida:Date;
    class:{ [key: string]: boolean }={};
    
    constructor(){
        this.fecha_cumplida=new Date();
    }
    cambiarEstado(estado:string):void{
        if('Pendiente' in this.class){
            delete this.class['Pendiente'];
        } 
        this.fecha_cumplida=new Date();
        this.estado=estado;
        this.class[estado]=true;
        }

}
