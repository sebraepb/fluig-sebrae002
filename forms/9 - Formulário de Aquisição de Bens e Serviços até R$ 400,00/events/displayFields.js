function displayFields(form,customHTML){
	
	form.setShowDisabledFields(true);
	form.setHidePrintLink(true);
	
	var mode = form.getFormMode();
	
	var atividade = parseInt(getValue("WKNumState"));
	
	if (mode == "ADD") {
		form.setVisibleById("abaaprov", false);
		form.setVisibleById("abaatesto", false);
		var c1 = DatasetFactory.createConstraint("companyId", getValue("WKCompany"), getValue("WKCompany"), ConstraintType.MUST);		
		var c2 = DatasetFactory.createConstraint("colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);		
		var constraints = new Array(c1, c2);
		var colleague = DatasetFactory.getDataset("colleague", null, constraints, null);
		
		form.setValue('tbNomePessoa', colleague.getValue(0,"colleagueName"));
		form.setValue('tbCodPessoa', colleague.getValue(0,"login"));
		
	} else if(atividade == 8){
		form.setVisibleById("abaatesto", false);
		form.setEnabled("rm_dadoscolab", false);
		form.setEnabled("date2", false);
		form.setEnabled("rm_mesprevbaixa", false);
		form.setEnabled("rmprojeto", false);
		form.setEnabled("rmacao", false);
		form.setEnabled("rmrecurso", false);
		form.setEnabled("tiposervico", false);
		form.setEnabled("obsdesciservcmp", false);		
		
		form.setEnabled("aprovclogcompras", false);
		form.setEnabled("obsaprovclogcompras", false);
		form.setEnabled("existeforncadast", false);
		form.setEnabled("aprovfinalizacao", false);
		form.setEnabled("obsaprovfinalizacao", false);
		form.setEnabled("date2", false);
	} else if(atividade == 14){
		form.setVisibleById("abaatesto", false);
		form.setEnabled("rm_dadoscolab", false);
		form.setEnabled("date2", false);
		form.setEnabled("rm_mesprevbaixa", false);
		form.setEnabled("rmprojeto", false);
		form.setEnabled("rmacao", false);
		form.setEnabled("rmrecurso", false);
		form.setEnabled("tiposervico", false);
		form.setEnabled("obsdesciservcmp", false);		
		
		form.setEnabled("aprovgerente", false);
		form.setEnabled("obsaprovgerente", false);
		form.setEnabled("existeforncadast", false);
		form.setEnabled("aprovfinalizacao", false);
		form.setEnabled("obsaprovfinalizacao", false);
		form.setEnabled("date2", false);
	} else if(atividade == 20){
		form.setVisibleById("abaatesto", false);
		form.setEnabled("rm_dadoscolab", false);
		form.setEnabled("date2", false);
		form.setEnabled("rm_mesprevbaixa", false);
		form.setEnabled("rmprojeto", false);
		form.setEnabled("rmacao", false);
		form.setEnabled("rmrecurso", false);
		form.setEnabled("tiposervico", false);
		form.setEnabled("obsdesciservcmp", false);		
		
		form.setEnabled("aprovgerente", false);
		form.setEnabled("obsaprovgerente", false);
		form.setEnabled("existeforncadast", false);
		form.setEnabled("aprovfinalizacao", false);
		form.setEnabled("obsaprovfinalizacao", false);
		form.setEnabled("date2", false);
	} 
}