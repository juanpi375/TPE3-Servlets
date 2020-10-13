package extras;

import java.util.ArrayList;

public class ReportPair {
	
	private ArrayList<String> graduated;
	private ArrayList<String> inscripted;
	
	public ReportPair() {
		super();
	}
	
	public ReportPair(ArrayList<String> graduated, ArrayList<String> inscripted) {
		super();
		this.graduated = graduated;
		this.inscripted = inscripted;
	}
	
	public void addGraduated(String graduated) {
		this.graduated.add(graduated);
	}
	
	public void addInscripted(String inscripted) {
		this.graduated.add(inscripted);
	}

	public ArrayList<String> getGraduated() {
		return graduated;
	}

	public void setGraduated(ArrayList<String> graduated) {
		this.graduated = graduated;
	}

	public ArrayList<String> getInscripted() {
		return inscripted;
	}

	public void setInscripted(ArrayList<String> inscripted) {
		this.inscripted = inscripted;
	}
}
