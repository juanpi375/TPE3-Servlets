package packageREST;

import java.io.Serializable;

public class ReportDTO implements Serializable {
    Long id;
    String cName;
    String sName;
    int age;
    String genre;
    String city;
    int DNI;
    int LU;
    int startYear;
    int graduationYear;
    
    
//    En realidad tendr�an una lista de objetos
//    Dichos objetos ser�an: 
//    registroCarrera = {a�o: (int), alumnosCursando: [lista de alumnos], alumnosGraduados: [lista de alumnos]}
//		Ser�a tipooo..
//    private ArrayList<Object> registrosCarrera = new ArrayList<Object>();
//    private void add(Object) Recibir�a un objeto? mmmmm.. huele mal*
//    *mmm.. pero no tendr�as que hacer nunca un add, solo lo generar�as **
//    **mm pero necesitar�as hacer un for of para recorrerlo en el frontend***
//		***mmm y??
    
//    Si son solo..
//    Registro = {a�o: (int), alumnosCursando: [lista de alumnos], alumnosGraduados: [lista de alumnos]}
    
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getcName() {
        return cName;
    }

    public void setcName(String cName) {
        this.cName = cName;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getDNI() {
        return DNI;
    }

    public void setDNI(int DNI) {
        this.DNI = DNI;
    }

    public int getLU() {
        return LU;
    }

    public void setLU(int LU) {
        this.LU = LU;
    }

    public int getStartYear() {
        return startYear;
    }

    public void setStartYear(int startYear) {
        this.startYear = startYear;
    }

    public int getGraduationYear() {
        return graduationYear;
    }

    public void setGraduationYear(int graduationYear) {
        this.graduationYear = graduationYear;
    }
    
}

