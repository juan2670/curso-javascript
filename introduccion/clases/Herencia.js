class Usuario{
    constructor(usuario,constraseña){
        this._usuario = usuario;
        this._constraseña = constraseña;
    }
    pots(){
        const pots = ["post1", "post2"];
        return pots
    }
}

class Moderador extends Usuario{
    constructor(usuario,constraseña,permiso){
        super(usuario,constraseña)
        this._permiso = permiso
    }
    BorrarPost(id){
        if(this._permiso.includes("borrar")){
            return `el post numero ${id} se ha borrado`
        }else{
            return "no tienes permisos de administrador"
        }
    }
    
}

const usuario = new Moderador("juan",123,["borrar","editar"]);
console.log(usuario.pots());
console.log(usuario.BorrarPost(11))
