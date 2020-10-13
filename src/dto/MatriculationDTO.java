package dto;

public class MatriculationDTO {
	private int startYear;
	private Integer graduationYear;
	private int idCareer;
	private int idStudent;
	
	public MatriculationDTO() {}

	public MatriculationDTO(int startYear, Integer graduationYear, int idCareer, int idStudent) {
		super();
		this.startYear = startYear;
		this.graduationYear = graduationYear;
		this.idCareer = idCareer;
		this.idStudent = idStudent;
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

	public int getCareer() {
		return idCareer;
	}

	public void setCareer(int career) {
		this.idCareer = career;
	}

	public int getStudent() {
		return idStudent;
	}

	public void setStudent(int student) {
		this.idStudent = student;
	}
	
}
