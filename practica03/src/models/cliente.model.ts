export class Cliente {

    public id: string;
    public usuario: string;
    public contraseña: string;
    public nombre: string;
    public genero: string;
    public fecha_nacimiento:Date;
    public apellidos: string;
    public telefono: number;
    public email: string;
    public tipo: string;
	
	constructor()
	{
		this.id="";
	}
}