package dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import entity.Student;
import extras.EMF;

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
	public List<Student> findAllByGenre(char genre){
		EntityManager entityManager=EMF.createEntityManager();
		if(genre != 'm' && genre != 'f') {
			return null;
		}
		Query q = entityManager.createQuery("SELECT s FROM Student s where s.genre=?1", Student.class);
		q.setParameter(1, genre);
		List<Student> students = q.getResultList();
		return students;
	}
	
//	@SuppressWarnings("unchecked")
//	public List<Student> findAllByCareerFilterCity(int idCareer){
//		EntityManager entityManager=EMF.createEntityManager();
////		Query q = entityManager.createQuery("SELECT s FROM Student s JOIN s.matriculations m WHERE m.student = s.LU AND m.career=?1 ORDER BY s.city", Student.class);
//		Query q = entityManager.createQuery("SELECT s FROM Student s"
//				+" JOIN s.matriculations m JOIN m.career c"
//				+" WHERE m.career = c AND c.id = ?1 AND s.LU = m.student order by s.city");
//		q.setParameter(1, idCareer);
//		List<Student> students = q.getResultList();
//		return students;
//	}
	
	@SuppressWarnings("unchecked")
	public List<Student> findAllByCareerFilterCity(int idCareer, String city){
		EntityManager entityManager=EMF.createEntityManager();
//		Query q = entityManager.createQuery("SELECT s FROM Student s JOIN s.matriculations m WHERE m.student = s.LU AND m.career=?1 ORDER BY s.city", Student.class);
		Query q = entityManager.createQuery("SELECT s FROM Student s"
				+" JOIN s.matriculations m JOIN m.career c"
				+" WHERE m.career = c AND c.id = ?1  AND s.LU = m.student AND s.city = ?2 ");
		q.setParameter(1, idCareer);
		q.setParameter(2, city);
		List<Student> students = q.getResultList();
		return students;
	}
	
	@SuppressWarnings("unchecked")
	public List<String> findAllCitys() {
		EntityManager entityManager=EMF.createEntityManager();
		Query q = entityManager.createQuery("SELECT s.city FROM Student s group by s.city");
		List<String> citys = q.getResultList();
		return citys;
	}
	
}
