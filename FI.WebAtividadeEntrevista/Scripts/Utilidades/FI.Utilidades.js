function setarMascara(idElemento, mascara) {
    $("#" + idElemento).mask(mascara, { reverse: true });
}

function isCpfValido(cpf) {
	cpf = cpf.replace(/[^\d]+/g, '');

	if (cpf == '')
		return false;

	if (cpf.length != 11 || isTodosCaracteresIguais(cpf))
		return false;
	
	var soma = 0;

	for (var i = 0; i < 9; i++)
		soma += parseInt(cpf.charAt(i)) * (10 - i);

	var resto = 11 - (soma % 11);

	if (resto == 10 || resto == 11)
		resto = 0;

	if (resto != parseInt(cpf.charAt(9)))
		return false;

	soma = 0;

	for (var i = 0; i < 10; i++)
		soma += parseInt(cpf.charAt(i)) * (11 - i);

	resto = 11 - (soma % 11);

	if (resto == 10 || resto == 11)
		resto = 0;

	if (resto != parseInt(cpf.charAt(10)))
		return false;

	return true;
}

function isTodosCaracteresIguais(valor) {
	return valor.split('').every(char => char === valor[0]);
}