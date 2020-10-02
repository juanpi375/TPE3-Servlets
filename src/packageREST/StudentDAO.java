package packageREST;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public class StudentDAO implements DAO<Student, Integer> {

private static StudentDAO daoStudent;
	
	private StudentDAO(){}

	public static StudentDAO getInstance() {
		if(daoStudent==null)
			daoStudent=new StudentDAO();
		return daoStudent;
	}
	
	@Override
	public Student persist(Student student) {
		EntityManager entityManager = EMF.createEntityManager();
		entityManager.getTransaction().begin();
		entityManager.persist(student);
		entityManager.getTransaction().commit();
		entityManager.close();
		return student;
	}

	@Override
	public Student update(Integer id, Student newEntityValues) {
		throw new UnsupportedOperationException();
//		Esto sera asi???? (Debe ser porque no permite update)
	}

	@Override
	public Student findById(Integer id) {
		EntityManager entityManager=EMF.createEntityManager();
		Student st1=entityManager.find(Student.class, id);
		entityManager.close();
		return st1;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Student> findAll() {
		EntityManager entityManager=EMF.createEntityManager();
		Query q = entityManager.createQuery("SELECT s FROM Student s order by s.name", Student.class);
		List<Student> students = q.getResultList();
		return students;
	}

	@Override
	public boolean delete(Integer id) {
		throw new UnsupportedOperationException();
//		Tampoco te soporto
	}
	
	@SuppressWarnings("unchecked")
	public List<Student> findAllByGenre(){
		EntityManager entityManager=EMF.createEntityManager();
		Query q = entityManager.createQuery("SELECT s FROM Student s order by s.genre", Student.class);
		List<Student> students = q.getResultList();
		return students;
	}
	
	
}
