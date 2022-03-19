# Teste Prático - Função Sistemas
Teste prático da empresa para vaga de desenvolvedor na empresa Função Sistemas.

- Adicionado o plugin [jQuery Mask](https://igorescobar.github.io/jQuery-Mask-Plugin/) para validação da máscara do CPF.
- O campo do CPF é salvo formatado.
- Para validar a duplicidade do CPF, foi adicionado o Id como segundo parâmetro no método já existente BoCliente.VerificarExistencia, para comparar o Id do cliente em casos de alteração.


# Script para criação do campo CPF #
~~~~sql
ALTER TABLE CLIENTES
ADD CPF VARCHAR(14) NOT NULL;
~~~~
