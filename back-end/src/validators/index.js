function validaQuantCaracteres(campo) {
    if (!campo || campo.length < 4) {
        return false;
    } else {
        return true;
    }
}

module.exports = validaQuantCaracteres