package extras;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

//Clase que unifica las carreras acomodadas para 
//que en ReportDTO queden como un JSON
public class ReportElement {
	
	public String name;
//	public Map<Integer, List<String>> inscripts;
//	public Map<Integer, List<String>> graduated;
	
	public Map<Integer, ReportPair> students;
//	
//	public List<String> grad
//	public List<String> insc
	
	public ReportElement() {
		super();
//		this.inscripts = new Map<Integer, List<Student>>();
//		this.inscripts = new Map<Integer, List<Student>>();
	}
	
	public ReportElement(String name, int startYear, Integer graduationYear, String student) {
		
//		this.inscripts = new TreeMap<Integer, List<String>>();
//		this.graduated = new TreeMap<Integer, List<String>>();
		
		this.students = new TreeMap<Integer, ReportPair>();
		this.name = name;
		
		this.addPair(startYear, graduationYear, student);
		
//		ArrayList<String> insList = new ArrayList<String>();
//		insList.add(student);
//		ArrayList<String> gradList = new ArrayList<String>();
//		gradList.add(student);
//		
//		this.inscripts.put(startYear, insList);
//		this.graduated.put(graduationYear, gradList);
	}
	
	public void addPair(int startYear, Integer graduationYear, String student) {
		ArrayList<String> graduated = new ArrayList<String>();
		ArrayList<String> inscripted = new ArrayList<String>();
		
//		if(this.students.get(startYear) != null) {
//			if(this.students.get(graduationYear) != null) {
//				graduated = this.students.get(graduationYear).getGraduated();
//			}
//			inscripted = this.students.get(graduationYear).getInscripted();
//		}
//		----------------------------------------------------------------
		if(graduationYear != null && startYear != graduationYear) {
			ArrayList<String> graduated2 = new ArrayList<String>();
			ArrayList<String> inscripted2 = new ArrayList<String>();
			
			if(this.students.get(startYear) != null) {
				inscripted = this.students.get(startYear).getInscripted();
				graduated = this.students.get(startYear).getGraduated();
			}
			inscripted.add(student);
			
			if(this.students.get(graduationYear) != null) {
				inscripted2 = this.students.get(graduationYear).getInscripted();
				graduated2 = this.students.get(graduationYear).getGraduated();
			}
			graduated2.add(student);
			
			ReportPair list2 = new ReportPair(graduated2, inscripted2);
			this.students.put(graduationYear, list2);
		}
		else {
			if(this.students.get(startYear) != null) {
				inscripted = this.students.get(startYear).getInscripted();
				graduated = this.students.get(startYear).getGraduated();
			}
			inscripted.add(student);
			if (graduationYear != null) {				
				graduated.add(student);
			}
		}
		
		ReportPair list = new ReportPair(graduated, inscripted);
		this.students.put(startYear, list);
//		----------------------------------------------------------------
		
		
//		inscripted.add(student);
//		
//		if(startYear == graduationYear) {
//			graduated.add(student);
//		}
//		else {
//			ArrayList<String> graduated2 = new ArrayList<String>();
//			ArrayList<String> inscripted2 = new ArrayList<String>();
//			ReportPair list2 = new ReportPair(graduated2, inscripted2);
//			
//			this.students.put(graduationYear, list2);
//		}
//		ReportPair list = new ReportPair(graduated, inscripted);
//		this.students.put(startYear, list);
	}
	
	public void addInscripted(Integer index, String inscripted) {
		ReportPair aux = this.students.get(index);
		aux.addInscripted(inscripted);
		this.students.put(index, aux);
	}
	
	public void addGraduated(Integer index, String graduated) {
		ReportPair aux = this.students.get(index);
		aux.addInscripted(graduated);
		this.students.put(index, aux);
	}
	
	public boolean hasIndex(Integer index) {
		return this.students.containsKey(index);
	}
}
