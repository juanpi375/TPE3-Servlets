package packageREST;

import java.util.ArrayList;
import java.util.List;

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
			if (career.name.contains(query.name)) {
//    			Esta es la parte de inscriptos..
				if (career.inscripts.containsKey(query.getStartYear())) {
					List<String> newList = career.inscripts.get(query.getStartYear());
					newList.add(query.getStudName());
					career.inscripts.put(query.getStartYear(), newList);
//				career.inscripts.get(query.matriculation.startYear).put(query.matriculation.startYear, career.get(1).get(r.startYear).add(r.student));
				}else {
					ArrayList<String> newList = new ArrayList<String>();
					newList.add(query.getStudName());
					career.inscripts.put(query.getStartYear(), newList);
				}
				isInserted = true;
				
//				Esta es la parte de gradudos..
				if (career.graduated.containsKey(query.getGraduationYear())) {
					List<String> newList = career.graduated.get(query.getGraduationYear());
					newList.add(query.getStudName());
					career.graduated.put(query.getStartYear(), newList);
				}else {
					ArrayList<String> newList = new ArrayList<String>();
					newList.add(query.getStudName());
					career.graduated.put(query.getStartYear(), newList);
				}
			}
    	}
    	
//			..si el nombre de la carrera no coincide con ninguna de las
//			que ya se crearon, creo la carrera y la agrego
    	if (!isInserted) {
    		ReportElement newCareer = new ReportElement(query.getName(), query.getStartYear(), query.getGraduationYear(), query.getStudName());
			this.careers.add(newCareer);
    	}
    }
}

