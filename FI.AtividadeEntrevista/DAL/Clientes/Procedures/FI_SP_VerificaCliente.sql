CREATE PROC FI_SP_VerificaCliente
	@CPF VARCHAR(14),
	@ID BIGINT
AS
BEGIN
	SELECT ID FROM CLIENTES WITH(NOLOCK) WHERE CPF = @CPF AND ID <> @ID
END