import { credentials } from "./data";
const emailOrLegajoRegex = /^(?:[1-9][0-9]{7}|[^\s@]+@[^\s@]+\.[^\s@]+)$/;

const passwordValidator = (password) =>{
    let result = "";
    if(password.length < 8 || credentials.password !== password)
      result = "Ingresá tu contraseña";
    return result;
};

const mailCredentialValidator = (mail) =>{
    let result = "";

    if (!emailOrLegajoRegex.test(mail)) {
        result = "Ingresá un correo o legajo válido";
    } else {

    if (/^[1-9][0-9]{7}$/.test(mail) && mail !== credentials.credential) {
        result = "Ingresá un correo o legajo válido";
    }

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) && mail !== credentials.mail) {
        result = "Ingresá un correo o legajo válido";
    }
    }
    return result;
};

const mailValidator = (mail) =>{
    let result = "";

    if (!emailOrLegajoRegex.test(mail)) {
        result = "Ingresá un correo válido";
    } else {

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) && mail !== credentials.mail) {
            result = "Ingresá un correo válido";
        }
    }
    return result;
};

module.exports = {mailCredentialValidator,passwordValidator,mailValidator}