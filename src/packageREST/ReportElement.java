package packageREST;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

//Clase que unifica las carreras acomodadas para 
//que en ReportDTO queden como un JSON
public class ReportElement {
	public String name;
	
	public Map<Integer, List<String>> inscripts;
	public Map<Integer, List<String>> graduated;
	
	public ReportElement() {
		super();
//		this.inscripts = new Map<Integer, List<Student>>();
//		this.inscripts = new Map<Integer, List<Student>>();
	}
	
	public ReportElement(String name, int startYear, Integer graduationYear, String student) {
		
		this.inscripts = new TreeMap<Integer, List<String>>();
		this.graduated = new TreeMap<Integer, List<String>>();
		
		this.name = name;
		
		ArrayList<String> insList = new ArrayList<String>();
		insList.add(student);
		ArrayList<String> gradList = new ArrayList<String>();
		gradList.add(student);
		
		this.inscripts.put(startYear, insList);
		this.graduated.put(graduationYear, gradList);
	}
}
