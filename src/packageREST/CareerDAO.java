package packageREST;

//import java.util.Calendar;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

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
