
export enum EstadoCoche {BUENO, MALO}
export class Coche {
  foto:string;
  marca:string;
  modelo:string;
  fecha_venta:Date;
  fecha_modelo:Date;
  precio:number;
  estado:EstadoCoche;


  constructor(  marca:string,  modelo:string,  fecha_venta:Date,
           fecha_modelo:Date,  precio:number, foto: string, estado:EstadoCoche) {
             this.foto=foto;
             this.marca=marca;
             this.modelo=modelo;
             this.fecha_venta=fecha_venta;
             this.fecha_modelo=fecha_modelo;
             this.precio=precio;
             this.estado=estado;
          }
  getPVP() { return this.precio * 1.21 }

}
