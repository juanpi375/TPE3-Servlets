package packageREST;

import java.io.Serializable;
import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class Matriculation implements Serializable {
	@Column
	private int startYear;
	@Column
	private Integer graduationYear;
	@Id
	@MapsId
	@ManyToOne
	private Career career;
	@Id
	@MapsId
	@ManyToOne
	private Student student;

	public Matriculation() {
		super();
	}
	
	public Matriculation(int startYear, Integer graduationYear, Career career, Student student) {
		super();
		this.startYear = startYear;
		this.graduationYear = graduationYear;
		this.career = career;
		this.student = student;
	}

	public Integer getGraduationYear() {
		return graduationYear;
	}

	public void setGraduationYear(Integer graduationYear) {
		this.graduationYear = graduationYear;
	}

	public int getStartYear() {
		return startYear;
	}
	
	public boolean isGraduated() {
		return (this.getGraduationYear() != null);
	}
	
	public int getAntiquity() {
		if (this.isGraduated()){
			int year = Calendar.getInstance().get(Calendar.YEAR);
			return year - this.getStartYear();
		}
		return this.getGraduationYear() - this.getStartYear();
	}

}
