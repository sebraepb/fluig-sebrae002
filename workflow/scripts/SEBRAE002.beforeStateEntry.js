var GERENCIA = 8;
var CLASSIFICARDESPESA = 14;
var REALIZARCOMPRA = 20;

function beforeStateEntry(sequenceId){
	
	//LOG
	log.info("######## ENTRANDO NO BEFORESTATEENTRY ########");
	
	if (sequenceId == GERENCIA)
	{
		//LOG
		log.info("######## INCLUINDO OS DADOS NO BEFORESTATEENTRY DA SOLICITACAO DE MATERIAIS ########");
		
		//Recupera mapeamento de todos campos do formulário
		var camposFichario = new java.util.HashMap();
		camposFichario = hAPI.getCardData(getValue("WKNumProces"));				
		
		var tableXml = "";
		
		SalvaProposta(camposFichario, tableXml);				
	}
	
}


function SalvaProposta(camposFichario, xmlTables)
{
	var NOME_SERVICO = "WSDATASERVER";
    var CAMINHO_SERVICO = "com.totvs.WsDataServer";
    
    var IdProcesso = getValue("WKNumProces"); 
    
    var servico = ServiceManager.getServiceInstance(NOME_SERVICO);
	
	var serviceHelper = servico.getBean();
    var instancia = servico.instantiate(CAMINHO_SERVICO);

    var ws = instancia.getRMIwsDataServer();
    
    var ds_usuariorm = DatasetFactory.getDataset("rm_edu_fontedados_usuariorm", null, null, null);
    
    var authenticatedService = serviceHelper.getBasicAuthenticatedClient(ws, "com.totvs.IwsDataServer", ds_usuariorm.getValue(0, "CODUSUARIO"), ds_usuariorm.getValue(0, "SENHA"));	

    log.error(ws);		
	
	var fieldsXml = "<TMOV>";
				fieldsXml += ValidaCampo("CODCOLIGADA", "1");
				fieldsXml += ValidaCampo("CODFILIAL", camposFichario.get("tbFilial"));
				fieldsXml += ValidaCampo("IDMOV", "-1");
				fieldsXml += ValidaCampo("CAMPOLIVRE1", IdProcesso);
				
				if (camposFichario.get("tiposervico") == "Compra"){
					fieldsXml += ValidaCampo("CODTMV", "1.1.03");
					fieldsXml += ValidaCampo("SERIE", "SCD");
				} else {
					fieldsXml += ValidaCampo("CODTMV", "1.1.11");
					fieldsXml += ValidaCampo("SERIE", "SS");
				}
				
				fieldsXml += ValidaCampo("INTEGRAAPLICACAO", "T");
				fieldsXml += ValidaCampo("STATUS", "A");
				fieldsXml += ValidaCampo("DATAEMISSAO", camposFichario.get("date2"));
				fieldsXml += ValidaCampo("CODCCUSTO", camposFichario.get("rm_codunidade"));
				fieldsXml += ValidaCampo("CODDEPARTAMENTO", camposFichario.get("rm_coddepto"));
				fieldsXml += ValidaCampo("CODVEN1", camposFichario.get("tbCodVen"));
				fieldsXml += ValidaCampo("NUMEROMOV", "-1");
				fieldsXml += ValidaCampo("CODCOLTBORCAMENTO",		"1");
				fieldsXml += ValidaCampo("CODTBORCAMENTO",			"001");
				
				fieldsXml += getXMLItensTMOV(camposFichario);
			
				fieldsXml += "<TMOVCOMPL>";
					fieldsXml += ValidaCampo("CODCOLIGADA", "1");
					fieldsXml += ValidaCampo("IDMOV", "-1");
					fieldsXml += ValidaCampo("ENQUADRAMENTO", "01.001");
					
					if (camposFichario.get("tiposervico") == "Compra"){
						fieldsXml += ValidaCampo("MODALIDADE", "019");
					} else {
						fieldsXml += ValidaCampo("MODALIDADE", "018");
					}
					
				fieldsXml += "</TMOVCOMPL>";
		
		fieldsXml += "</TMOV>";
	
	//Cria contexto RM
	var contexto = DatasetFactory.createConstraint("RMSContext","CodColigada= 1;CodFilial=1;CodTipoCurso=1;CodSistema=T", "", ConstraintType.MUST);
	
	try{
		//Salva movimento e outros
		var result = authenticatedService.saveRecord("MovMovimentoTBCData", fieldsXml, contexto);
		
		if ((result != null) && (result.indexOf("===") != -1))
		{
			var msgErro = result.substring(0, result.indexOf("==="));
			
			throw msgErro;
		}
	}
	catch (e){
		
		if (e == null)
		{
			e = "Erro desconhecido; verifique o log do AppServer";
    	}
		
		var mensagemErro = "Erro na comunicação com o TOTVS TBC: " + e;
		log.error(mensagemErro + " ---> " + fieldsXml);
		
		throw mensagemErro;
	}	
}

function getXMLItensTMOV(camposFichario){
	
	var xml = "";
	
	var arrayCampos = getIndiceFields(camposFichario, "rm_item");
	
	for ( var i = 0; i < arrayCampos.length; i++) {
		var idx = arrayCampos[i];
		
		xml += "<TITMMOV> ";
		xml += ValidaCampo("CODCOLIGADA", 				"1");		
		xml += ValidaCampo("IDMOV",						"-1"/*"-" + idx + 2*/); // Setamos um número negativo, pois esse será gerado ao salvar o registro RM (AUTOINC)
		xml += ValidaCampo("NUMEROSEQUENCIAL", 			idx);
		xml += ValidaCampo("NSEQITMMOV",				idx);
		xml += ValidaCampo("CODFILIAL", 				camposFichario.get("tbFilial"));
		xml += ValidaCampo("CODIGOPRD", 				camposFichario.get("rm_codprod___" + idx));
		xml += ValidaCampo("IDPRD", 					camposFichario.get("rm_idprod___" + idx));
		xml += ValidaCampo("QUANTIDADE",				camposFichario.get("rmquant___" + idx));
		xml += ValidaCampo("PRECOUNITARIO",				camposFichario.get("rmpreco___" + idx));
		xml += ValidaCampo("VALORTOTALITEM",			camposFichario.get("rmtotal___" + idx));
		xml += ValidaCampo("CODDEPARTAMENTO",			camposFichario.get("rm_coddepto"));
		xml += ValidaCampo("CODTB1FAT",					"01.02.01");
		xml += ValidaCampo("CODTB2FAT",					camposFichario.get("rm_codrecurso"));
		xml += ValidaCampo("CODCOLTBORCAMENTO",			"1");
		xml += ValidaCampo("CODTBORCAMENTO",			"001");
		
			xml += "<TITMMOVRATCCU> ";
			xml += ValidaCampo("CODCOLIGADA", 				"1");		
			xml += ValidaCampo("IDMOV",						"-1"); // Setamos um número negativo, pois esse será gerado ao salvar o registro RM (AUTOINC)
			xml += ValidaCampo("NSEQITMMOV",				idx);
			xml += ValidaCampo("IDMOVRATCCU",				"-1");
			xml += ValidaCampo("VALOR",						camposFichario.get("rmtotal___" + idx));
			xml += ValidaCampo("CODCCUSTO",					camposFichario.get("rm_codunidade"));
			xml += "</TITMMOVRATCCU> ";
		
		xml += "</TITMMOV> ";
	}
	
	return xml;
}

function getIndiceFields(camposFichario, nomePesquisa){
	
	//Cria array para armazenar os campos do dataset
	var indiceFields = new Array();
	
	var percorre = camposFichario.keySet().iterator();
	
	while (percorre.hasNext()){
		
		var campo = percorre.next();
		
		// Busca somente os campos filhos (todos utilizam o padrão "___")
		if (campo.indexOf('___') >= 0){
			
			var nomecampo = String(campo.split('___')[0]);
			var indice = campo.split('___')[1];
			
			if (nomecampo == nomePesquisa){
				indiceFields.push(indice);
			}		
		}
	}
	
	return indiceFields;
}


function ValidaCampo(campo, valor)
{
	if ((valor != null) && (valor != ""))
	{
		return "<"+campo+">"+valor+"</"+ campo + "> ";
	}
	else
	{
		return "";
	}
}