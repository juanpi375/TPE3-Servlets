package packageREST;

import java.util.List;

public class QueryCareerElementDTO{

	public String name;
	private int startYear;
	private Integer graduationYear;
	private String studName;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getStartYear() {
		return startYear;
	}

	public void setStartYear(int startYear) {
		this.startYear = startYear;
	}

	public Integer getGraduationYear() {
		return graduationYear;
	}

	public void setGraduationYear(Integer graduationYear) {
		this.graduationYear = graduationYear;
	}

	public String getStudName() {
		return studName;
	}

	public void setStudName(String studName) {
		this.studName = studName;
	}

	public QueryCareerElementDTO(String name, int startYear, Integer graduationYear, String studName) {
		super();
		this.name = name;
		this.startYear = startYear;
		this.graduationYear = graduationYear;
		this.studName = studName;
	}
}
