package entity;

import java.util.Calendar;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Career {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column
	private String name;
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "career")
	private List<Matriculation>students;
	
	public Career() {
		super();
	}
	
	@Override
	public String toString() {
		return "Carrera  "+name + " (" + students.size() + " estudiantes)";
	}

	public Career(String name) {
		super();
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Matriculation> getStudents() {
		return students;
	}

	public void setStudents(List<Matriculation> students) {
		this.students = students;
	}

	public int getId() {
		return id;
	}
	
	public Matriculation addStudent(int startYear, Integer graduationYear, Student s) {
		Matriculation m = new Matriculation(startYear, graduationYear, this, s);
		return m;
	}
	
	public Matriculation addStudent(int startYear, Student s) {
		return this.addStudent(startYear, null, s);
	}
	
	public Matriculation addStudent(Student s) {
		int year = Calendar.getInstance().get(Calendar.YEAR);
		return this.addStudent(year, s);
	}
}

