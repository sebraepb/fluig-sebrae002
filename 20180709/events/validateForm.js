function validateForm(form){
	
	var activity = getValue('WKNumState');
	
	if(activity == 6){
		if ((form.getValue("rm_dadoscolab") == null || form.getValue("rm_dadoscolab") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor selecionar os dados do colaborador.";
	    }
		
		if ((form.getValue("tbGerente") == null || form.getValue("tbGerente") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor selecionar os dados do colaborador.";
	    }
		
		if ((form.getValue("tbDiretor") == null || form.getValue("tbDiretor") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor selecionar os dados do colaborador.";
	    }
		
		if ((form.getValue("tbAgencia") == null || form.getValue("tbAgencia") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor selecionar os dados do colaborador.";
	    }
		
		if ((form.getValue("rm_depto") == null || form.getValue("rm_depto") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor selecionar os dados do colaborador.";
	    }
		
		if ((form.getValue("date2") == null || form.getValue("date2") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor informar a data.";
	    }
		
		if ((form.getValue("rm_mesprevbaixa") == null || form.getValue("rm_mesprevbaixa") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor informar o mês de previsão de baixa.";
	    }
		
		if ((form.getValue("rmprojeto") == null || form.getValue("rmprojeto") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor informar o projeto.";
	    }
		
		if ((form.getValue("rmacao") == null || form.getValue("rmacao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor informar a ação.";
	    }
		
		if ((form.getValue("rmunidade") == null || form.getValue("rmunidade") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor informar a unidade.";
	    }
		
		if ((form.getValue("rmrecurso") == null || form.getValue("rmrecurso") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor informar o recurso.";
	    }
		
		if ((form.getValue("tiposervico") == null || form.getValue("tiposervico") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar o tipo de serviço.";
	    }
		
		if ((form.getValue("rmquant") == null || form.getValue("rmquant") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor inserir pelo menos um item de produto/serviço.";
	    }
		
		if ((form.getValue("obsdesciservcmp") == null || form.getValue("obsdesciservcmp") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar a justificativa da necessidade do produto/serviço.";
	    }
	}//activity == 6
	
	if(activity == 8){
		if ((form.getValue("aprovgerente") == null || form.getValue("aprovgerente") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	        throw "Favor informar o parecer do gerente.";
	    }
	}//activity = 8
	
	if(activity == 14){
		if ((form.getValue("tiposervico") == null || form.getValue("tiposervico") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar o tipo de serviço.";
	    }
		
		if ((form.getValue("rmquant") == null || form.getValue("rmquant") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor inserir pelo menos um item de produto/serviço.";
	    }
	}//activity = 8
	
	if(activity == 11){
		if ((form.getValue("aprovclogcompras") == null || form.getValue("aprovclogcompras") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar o parecer da CLOG Compras.";
	    }
	}//activity = 11
	
	if(activity == 20){
		if ((form.getValue("tsserv") == null || form.getValue("tsserv") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar o atesto da prestação dos serviço.";
	    }
	}//activity = 20
	
	/* PEDENTE */
	if(activity == 13){
		if ((form.getValue("existeforncadast") == null || form.getValue("existeforncadast") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar se o fornecedor está cadastrado.";
	    }
	}//activity = 13
	
	if(activity == 17){
		//NENHUMA AÇÃO DEFINIDA
	}//activity = 17
	
	if(activity == 9){
		//NENHUMA AÇÃO DEFINIDA
	}//activity = 9
	
	if(activity == 16){
		if ((form.getValue("aprovfinalizacao") == null || form.getValue("aprovfinalizacao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar a aprovação da CLOG Finalização.";
	    }
		
		if ((form.getValue("dataatesto02") == null || form.getValue("optsimnac") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar se o fornecedor é optante do Simples Nacional.";
	    }
		
		if ((form.getValue("dataatesto02") == null || form.getValue("dataatesto02") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar a data em que regularidade previdenciária do fornecedor foi veirifcada.";
	    }
	}//activity = 16
	
	if(activity == 10){
		if ((form.getValue("aprovfinalizacao") == null || form.getValue("aprovfinalizacao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar a aprovação da CLOG Finalização.";
	    }
		
		if ((form.getValue("dataatesto02") == null || form.getValue("optsimnac") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar se o fornecedor é optante do Simples Nacional.";
	    }
		
		if ((form.getValue("dataatesto02") == null || form.getValue("dataatesto02") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar a data em que regularidade previdenciária do fornecedor foi veirifcada.";
	    }
	}//activity = 10
	
	if(activity == 19){
		if ((form.getValue("aprovgerente") == null || form.getValue("aprovgerente") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
			throw "Favor informar o parecer do gerente.";
	    }
	}//activity = 19
}