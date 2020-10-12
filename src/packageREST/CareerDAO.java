package packageREST;

//import java.util.Calendar;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

//import packageREST.Matriculation;
//import packageREST.Student;

public class CareerDAO implements DAO<Career, Integer>{

	private static CareerDAO daoCareer;
	
	private CareerDAO(){}

	public static CareerDAO getInstance() {
		if(daoCareer==null)
			daoCareer=new CareerDAO();
		return daoCareer;
	}
	
	@Override
	public Career persist(Career career) {
		EntityManager entityManager = EMF.createEntityManager();
		entityManager.getTransaction().begin();
		entityManager.persist(career);
		entityManager.getTransaction().commit();
		entityManager.close();
		return career;
	}

	@Override
	public Career update(Integer id, Career newEntityValues) {
		throw new UnsupportedOperationException();
	}

	@Override
	public Career findById(Integer id) {
		EntityManager entityManager=EMF.createEntityManager();
		Career career=entityManager.find(Career.class, id);
		entityManager.close();
		return career;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Career> findAll() {
		EntityManager entityManager=EMF.createEntityManager();
		Query q = entityManager.createQuery("SELECT c FROM Career c order by c.name", Career.class);
		List<Career> careers = q.getResultList();
		return careers;
	}
	
//	Devuelve lista de carreras que poseen alumnos ordenada por su cantidad
	@SuppressWarnings("unchecked")
	public List<Career> findAllWithStudents() {
		EntityManager entityManager=EMF.createEntityManager();
		Query q = entityManager.createQuery("SELECT c FROM Career c WHERE "
				+ "SIZE(c.students) > 0 ORDER BY SIZE(c.students) DESC", Career.class);
		List<Career> careers = q.getResultList();
		return careers;
	}

//	Obtiene filas con información de las carreras
//	que se traducen en un objeto reporte 
//	el cual es retornado
	public ReportDTO getReport(){
		EntityManager em=EMF.createEntityManager();
		TypedQuery<QueryCareerElementDTO> q = em.createQuery( "SELECT new packageREST.QueryCareerElementDTO(c.name, m.startYear,m.graduationYear ,concat(s.name, ' ', s.surname)) FROM Matriculation m JOIN m.career c "+
					" JOIN m.student s ORDER BY c.name, m.startYear, m.graduationYear",QueryCareerElementDTO.class);
			List<QueryCareerElementDTO> elems = q.getResultList();
			
//			Crea un reporte y lo llena
			ReportDTO report = new ReportDTO();
			
			for (QueryCareerElementDTO query : elems) {
				report.add(query);
			}
			return report;
	}
	
	@Override
	public boolean delete(Integer id) {
		throw new UnsupportedOperationException();
	}
	
//	public void addMatriculation(Matriculation m) {
//		EntityManager entityManager=EMF.createEntityManager();
//	}
	
//	public Matriculation addStudent(int startYear, Integer graduationYear, Student s) {
//		Matriculation m = new Matriculation(startYear, graduationYear, this, s);
//		return m;
//	}
//	
//	public Matriculation addStudent(int startYear, Student s) {
//		return this.addStudent(startYear, null, s);
//	}
//	
//	public Matriculation addStudent(Student s) {
//		int year = Calendar.getInstance().get(Calendar.YEAR);
//		return this.addStudent(year, s);
//	}

}
