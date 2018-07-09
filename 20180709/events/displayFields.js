function displayFields(form,customHTML){
	
	form.setShowDisabledFields(true);
	form.setHidePrintLink(true);
	
	var mode = form.getFormMode();
	
	var atividade = parseInt(getValue("WKNumState"));
	
	if (mode == "ADD") {
		var c1 = DatasetFactory.createConstraint("companyId", getValue("WKCompany"), getValue("WKCompany"), ConstraintType.MUST);		
		var c2 = DatasetFactory.createConstraint("colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);		
		var constraints = new Array(c1, c2);
		var colleague = DatasetFactory.getDataset("colleague", null, constraints, null);
		
		form.setValue('tbNomePessoa', colleague.getValue(0,"colleagueName"));
		form.setValue('tbCodPessoa', colleague.getValue(0,"login"));
		
	} else if(atividade == 8){
		form.setEnabled("rm_dadoscolab", false);
		form.setEnabled("nomeevento", false);
		form.setEnabled("datainicial", false);
		form.setEnabled("datafinal", false);
		form.setEnabled("justinecess", false);
		form.setEnabled("date2", false);
		form.setEnabled("rm_mesprevbaixa", false);
		form.setEnabled("rmprojeto", false);
		form.setEnabled("rmacao", false);
		form.setEnabled("rmunidade", false);
		form.setEnabled("rm_codunidade", false);
		form.setEnabled("rmrecurso", false);
		form.setEnabled("rm_codrecurso", false);
		form.setEnabled("tiposervico", false);
		form.setEnabled("rm_categoria", false);
		form.setEnabled("rm_item", false);
		form.setEnabled("obsdesciservcmp", false);
		
		
		//form.setVisibleById("aprovgerente", false);
		//form.setVisibleById("obsaprovgerente", false);
		form.setVisibleById("aprovclogcompras", false);
		form.setVisibleById("obsaprovclogcompras", false);
		form.setVisibleById("existeforncadast", false);
		form.setVisibleById("aprovfinalizacao", false);
		form.setVisibleById("obsaprovfinalizacao", false);
		form.setVisibleById("tsserv", false);
		form.setVisibleById("optsimnac", false);
		form.setVisibleById("dataatesto02", false);
		form.setVisibleById("existeforncadast", false);
		
	} else if(atividade == 14){
		form.setEnabled("rm_dadoscolab", false);
		form.setEnabled("nomeevento", false);
		form.setEnabled("datainicial", false);
		form.setEnabled("datafinal", false);
		form.setEnabled("justinecess", false);
		form.setEnabled("date2", false);
		form.setEnabled("rm_mesprevbaixa", false);
		form.setEnabled("rmprojeto", false);
		form.setEnabled("rmacao", false);
		form.setEnabled("rmunidade", false);
		form.setEnabled("rm_codunidade", false);
		form.setEnabled("rmrecurso", false);
		form.setEnabled("rm_codrecurso", false);
		form.setEnabled("tiposervico", false);
		form.setEnabled("rm_categoria", false);
		form.setEnabled("rm_item", false);
		form.setEnabled("obsdesciservcmp", false);
		
		
		form.setVisibleById("aprovgerente", false);
		form.setVisibleById("obsaprovgerente", false);
		form.setVisibleById("aprovclogcompras", false);
		form.setVisibleById("obsaprovclogcompras", false);
		form.setVisibleById("existeforncadast", false);
		form.setVisibleById("aprovfinalizacao", false);
		form.setVisibleById("obsaprovfinalizacao", false);
		form.setVisibleById("tsserv", false);
		form.setVisibleById("optsimnac", false);
		form.setVisibleById("dataatesto02", false);
		form.setVisibleById("existeforncadast", false);
	} else if(atividade == 11){
		form.setEnabled("rm_dadoscolab", false);
		form.setEnabled("nomeevento", false);
		form.setEnabled("datainicial", false);
		form.setEnabled("datafinal", false);
		form.setEnabled("justinecess", false);
		form.setEnabled("date2", false);
		form.setEnabled("rm_mesprevbaixa", false);
		form.setEnabled("rmprojeto", false);
		form.setEnabled("rmacao", false);
		form.setEnabled("rmunidade", false);
		form.setEnabled("rm_codunidade", false);
		form.setEnabled("rmrecurso", false);
		form.setEnabled("rm_codrecurso", false);
		form.setEnabled("tiposervico", false);
		form.setEnabled("rm_categoria", false);
		form.setEnabled("rm_item", false);
		form.setEnabled("obsdesciservcmp", false);
		
		
		form.setVisibleById("aprovgerente", false);
		form.setVisibleById("obsaprovgerente", false);
		//form.setVisibleById("aprovclogcompras", false);
		//form.setVisibleById("obsaprovclogcompras", false);
		form.setVisibleById("existeforncadast", false);
		form.setVisibleById("aprovfinalizacao", false);
		form.setVisibleById("obsaprovfinalizacao", false);
		form.setVisibleById("tsserv", false);
		form.setVisibleById("optsimnac", false);
		form.setVisibleById("dataatesto02", false);
		form.setVisibleById("existeforncadast", false);
	} else if(atividade == 20){
		form.setEnabled("rm_dadoscolab", false);
		form.setEnabled("nomeevento", false);
		form.setEnabled("datainicial", false);
		form.setEnabled("datafinal", false);
		form.setEnabled("justinecess", false);
		form.setEnabled("date2", false);
		form.setEnabled("rm_mesprevbaixa", false);
		form.setEnabled("rmprojeto", false);
		form.setEnabled("rmacao", false);
		form.setEnabled("rmunidade", false);
		form.setEnabled("rm_codunidade", false);
		form.setEnabled("rmrecurso", false);
		form.setEnabled("rm_codrecurso", false);
		form.setEnabled("tiposervico", false);
		form.setEnabled("rm_categoria", false);
		form.setEnabled("rm_item", false);
		form.setEnabled("obsdesciservcmp", false);
		
		
		form.setVisibleById("aprovgerente", false);
		form.setVisibleById("obsaprovgerente", false);
		form.setVisibleById("aprovclogcompras", false);
		form.setVisibleById("obsaprovclogcompras", false);
		form.setVisibleById("existeforncadast", false);
		form.setVisibleById("aprovfinalizacao", false);
		form.setVisibleById("obsaprovfinalizacao", false);
		//form.setVisibleById("tsserv", false);
		form.setVisibleById("optsimnac", false);
		form.setVisibleById("dataatesto02", false);
		form.setVisibleById("existeforncadast", false);
	} else if(atividade == 16){
		form.setEnabled("rm_dadoscolab", false);
		form.setEnabled("nomeevento", false);
		form.setEnabled("datainicial", false);
		form.setEnabled("datafinal", false);
		form.setEnabled("justinecess", false);
		form.setEnabled("date2", false);
		form.setEnabled("rm_mesprevbaixa", false);
		form.setEnabled("rmprojeto", false);
		form.setEnabled("rmacao", false);
		form.setEnabled("rmunidade", false);
		form.setEnabled("rm_codunidade", false);
		form.setEnabled("rmrecurso", false);
		form.setEnabled("rm_codrecurso", false);
		form.setEnabled("tiposervico", false);
		form.setEnabled("rm_categoria", false);
		form.setEnabled("rm_item", false);
		form.setEnabled("obsdesciservcmp", false);
		
		
		form.setVisibleById("aprovgerente", false);
		form.setVisibleById("obsaprovgerente", false);
		form.setVisibleById("aprovclogcompras", false);
		form.setVisibleById("obsaprovclogcompras", false);
		form.setVisibleById("existeforncadast", false);
		//form.setVisibleById("aprovfinalizacao", false);
		//form.setVisibleById("obsaprovfinalizacao", false);
		form.setVisibleById("tsserv", false);
		form.setVisibleById("optsimnac", false);
		//form.setVisibleById("dataatesto02", false);
		form.setVisibleById("existeforncadast", false);
	} else if(atividade == 10){
		form.setEnabled("rm_dadoscolab", false);
		form.setEnabled("nomeevento", false);
		form.setEnabled("datainicial", false);
		form.setEnabled("datafinal", false);
		form.setEnabled("justinecess", false);
		form.setEnabled("date2", false);
		form.setEnabled("rm_mesprevbaixa", false);
		form.setEnabled("rmprojeto", false);
		form.setEnabled("rmacao", false);
		form.setEnabled("rmunidade", false);
		form.setEnabled("rm_codunidade", false);
		form.setEnabled("rmrecurso", false);
		form.setEnabled("rm_codrecurso", false);
		form.setEnabled("tiposervico", false);
		form.setEnabled("rm_categoria", false);
		form.setEnabled("rm_item", false);
		form.setEnabled("obsdesciservcmp", false);
		
		
		form.setVisibleById("aprovgerente", false);
		form.setVisibleById("obsaprovgerente", false);
		form.setVisibleById("aprovclogcompras", false);
		form.setVisibleById("obsaprovclogcompras", false);
		form.setVisibleById("existeforncadast", false);
		//form.setVisibleById("aprovfinalizacao", false);
		//form.setVisibleById("obsaprovfinalizacao", false);
		form.setVisibleById("tsserv", false);
		form.setVisibleById("optsimnac", false);
		//form.setVisibleById("dataatesto02", false);
		form.setVisibleById("existeforncadast", false);
	} else if(atividade == 19){
		form.setEnabled("rm_dadoscolab", false);
		form.setEnabled("nomeevento", false);
		form.setEnabled("datainicial", false);
		form.setEnabled("datafinal", false);
		form.setEnabled("justinecess", false);
		form.setEnabled("date2", false);
		form.setEnabled("rm_mesprevbaixa", false);
		form.setEnabled("rmprojeto", false);
		form.setEnabled("rmacao", false);
		form.setEnabled("rmunidade", false);
		form.setEnabled("rm_codunidade", false);
		form.setEnabled("rmrecurso", false);
		form.setEnabled("rm_codrecurso", false);
		form.setEnabled("tiposervico", false);
		form.setEnabled("rm_categoria", false);
		form.setEnabled("rm_item", false);
		form.setEnabled("obsdesciservcmp", false);
		
		
		//form.setVisibleById("aprovgerente", false);
		//form.setVisibleById("obsaprovgerente", false);
		form.setVisibleById("aprovclogcompras", false);
		form.setVisibleById("obsaprovclogcompras", false);
		form.setVisibleById("existeforncadast", false);
		form.setVisibleById("aprovfinalizacao", false);
		form.setVisibleById("obsaprovfinalizacao", false);
		form.setVisibleById("tsserv", false);
		form.setVisibleById("optsimnac", false);
		form.setVisibleById("dataatesto02", false);
		form.setVisibleById("existeforncadast", false);
	} else if(atividade == 13){
		form.setEnabled("rm_dadoscolab", false);
		form.setEnabled("nomeevento", false);
		form.setEnabled("datainicial", false);
		form.setEnabled("datafinal", false);
		form.setEnabled("justinecess", false);
		form.setEnabled("date2", false);
		form.setEnabled("rm_mesprevbaixa", false);
		form.setEnabled("rmprojeto", false);
		form.setEnabled("rmacao", false);
		form.setEnabled("rmunidade", false);
		form.setEnabled("rm_codunidade", false);
		form.setEnabled("rmrecurso", false);
		form.setEnabled("rm_codrecurso", false);
		form.setEnabled("tiposervico", false);
		form.setEnabled("rm_categoria", false);
		form.setEnabled("rm_item", false);
		form.setEnabled("obsdesciservcmp", false);
		
		
		form.setVisibleById("aprovgerente", false);
		form.setVisibleById("obsaprovgerente", false);
		form.setVisibleById("aprovclogcompras", false);
		form.setVisibleById("obsaprovclogcompras", false);
		form.setVisibleById("existeforncadast", false);
		form.setVisibleById("aprovfinalizacao", false);
		form.setVisibleById("obsaprovfinalizacao", false);
		form.setVisibleById("tsserv", false);
		form.setVisibleById("optsimnac", false);
		form.setVisibleById("dataatesto02", false);
		//form.setVisibleById("existeforncadast", false);
	} else{
		
	}
}