package packageREST;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Student {
	@Id
	private int LU;
	@Column
	private String name;
	@Column
	private String surname;
	@Column
	private int age;
	@Column
	private char genre;
	@Column
	private int dni;
	@Column
	private String city;
	@OneToMany(fetch = FetchType.EAGER, mappedBy="student")
	private List<Matriculation> matriculations;
	
	public Student() {
		super();
	}
	
	public Student(String name, String surname, int age, char genre, int dni, String city, int lU) {
		super();
		this.LU = lU;
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.genre = genre;
		this.dni = dni;
		this.city = city;
	}
	
	@Override
	public String toString() {
		return "Estudiante "+LU+": "+ name +" "+ surname +", dni: " + dni + " (" + city
				+ ")";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public char getGenre() {
		return genre;
	}

	public void setGenre(char genre) {
		this.genre = genre;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public List<Matriculation> getMatriculations() {
		return matriculations;
	}

	public void setMatriculations(List<Matriculation> matriculations) {
		this.matriculations = matriculations;
	}

	public int getLU() {
		return LU;
	}

	public int getDni() {
		return dni;
	}
	
}

