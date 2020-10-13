package dto;

import java.util.ArrayList;
import java.util.List;

import extras.ReportElement;

//Crea un registro con ReportElement que es
//llenado gracias a los QueryCareerElementDTO
//que llegan de respuesta desde CareerDAO
public class ReportDTO{
	
	private List<ReportElement> careers;
    
	public List<ReportElement> getCareers(){
		return this.careers;
	}
	
    public ReportDTO() {
    	super();
    	this.careers = new ArrayList<ReportElement>();
    }
    
    public void add(QueryCareerElementDTO query) {
    	boolean isInserted = false;
    	for (ReportElement career : this.careers) {
//    		Agrega el estudiante a la carrera en un año si existe o sino lo crea
//    		Agrega solo si el nombre coincide..
			if (career.name.equals(query.name)) {
				
//				if (career.inscripts.containsKey(query.getStartYear())) {
//					List<String> newList = career.inscripts.get(query.getStartYear());
//					newList.add(query.getStudName());
//					career.inscripts.put(query.getStartYear(), newList);
//					
//					-------------------------------------------------------
//					si son del mismo año de inscripción and stY == grY
//					if (career.hasIndex(query.getStartYear())) {
////						List<String> newList = career.student.get(query.getStartYear());
////						newList.add(query.getStudName());
////						career.students.put(query.getStartYear(), newList);
//						career.addInscripted(query.getStartYear(), query.getStudName());
//						career.addGraduated(query.getGraduationYear(), query.getStudName());
//						}
//					else {
//						career.addPair(query.getStartYear(), query.getGraduationYear(), query.getStudName());
//					}
					
					career.addPair(query.getStartYear(), query.getGraduationYear(), query.getStudName());
//					-------------------------------------------------------
					
//				}else {
//					ArrayList<String> newList = new ArrayList<String>();
//					newList.add(query.getStudName());
//					career.inscripts.put(query.getStartYear(), newList);
					isInserted = true;
				}
				
//				if (career.graduated.containsKey(query.getGraduationYear())) {
//					List<String> newList = career.graduated.get(query.getGraduationYear());
//					newList.add(query.getStudName());
//					career.graduated.put(query.getStartYear(), newList);
//				}else {
//					ArrayList<String> newList = new ArrayList<String>();
//					newList.add(query.getStudName());
//					career.graduated.put(query.getStartYear(), newList);
//				}
//			}
    	}
//			..si el nombre de la carrera no coincide con ninguna de las
//			que ya se crearon, creo la carrera y la agrego
    	if (!isInserted) {
    		ReportElement newCareer = new ReportElement(query.getName(), query.getStartYear(), query.getGraduationYear(), query.getStudName());
			this.careers.add(newCareer);
    	}
    }
}

