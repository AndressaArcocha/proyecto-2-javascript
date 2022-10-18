export const validateName = (valor,campo) =>{
    //que no este vacio
   
   if( valor.trim(). length < 2 ){
    campo.classList="form-control is in-invalid"
    return false;
   }
   campo.classList="form-control is valid"
  return true;
}
export const validateEmail = (valor, campo) =>{
    //que no este vacio
    if (valor.trim().length < 4) {
        campo.classList="form-control is-invalid"
        return false;
    }
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (regex.test(valor)) {
        campo.classList="form-control is-invalid"
        return false;
    }
    campo.classList="form-control is-valid"
    return true;
}
export const validateContraseña = (valor, campo) =>{
    //que no este vacio
   if( valor.trim(). length < 1 ){
    campo.classList="form-control is-invalid"
    return false;
   }
   const regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;

   if(regex.test(valor)){
    campo.classList="form-control is-invalid"
    return false;
   }
   campo.classList="form-control is-valid"
    return true;
}
