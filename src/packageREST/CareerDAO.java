package packageREST;

import java.util.ArrayList;
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
	
//	Devuelve lista de carreras que poseen alumnos ordenada por su cantidad
	@SuppressWarnings("unchecked")
	public List<Career> findAllWithStudents() {
		EntityManager entityManager=EMF.createEntityManager();
		Query q = entityManager.createQuery("SELECT c FROM Career c WHERE "
				+ "SIZE(c.students) > 0 ORDER BY SIZE(c.students) DESC", Career.class);
		List<Career> careers = q.getResultList();
		return careers;
	}
	
//	@SuppressWarnings("unchecked")
//	public List<Career> getReport() {
//		EntityManager entityManager=EMF.createEntityManager();
//		Query q = entityManager.createQuery( );
//		
//		ReportDTO report = q.getResultList();
//		return report;
//	}
	
	
//	PROBARRR
public List<Object> getReport() {
		EntityManager em=EMF.createEntityManager();
		Query firstQuery = em.createQuery("SELECT c.name, m.startYear, COUNT(m) FROM Matriculation m JOIN m.career c "+
				 "GROUP BY c.name, m.startYear ORDER BY c.name, r.startYear");
		@SuppressWarnings("unchecked")
		List<Object[]> listFirstQuery = firstQuery.getResultList();
		
		Query secondQuery = em.createQuery("SELECT c.name, m.graduationYear, COUNT(m) FROM Matriculation m JOIN m.career c "+
				 "WHERE m.finished = true "+
				 "GROUP BY c.name, r.graduationYear ORDER BY c.name, r.graduationYear");
		@SuppressWarnings("unchecked")
		List<Object[]> listSecondQuery = secondQuery.getResultList();
		
		List<Object> list = new ArrayList<Object>();
		
		String nameCareer = null;

		for(int i=0; i<listFirstQuery.size(); i++) {
			
			if(nameCareer == null) {				
				nameCareer = (String) listFirstQuery.get(i)[0];
			
			} else if(!listFirstQuery.get(i)[0].equals(nameCareer)) {
				
				for(int l=0; l<listSecondQuery.size(); l++) {
					
					if(listSecondQuery.get(l)[0].equals(nameCareer)) {
						if(!list.contains(listSecondQuery.get(l)[1])) {
							list.add(listSecondQuery.get(l)[1]);
							list.add(0);
							list.add(listSecondQuery.get(l)[2]);
						}	
					}
				}	
				nameCareer = (String) listFirstQuery.get(i)[0];
			}
			
			if(!list.contains(listFirstQuery.get(i)[0])) {
				list.add(listFirstQuery.get(i)[0]);
			}
				for(int k=0; k<listSecondQuery.size(); k++) {
					if(listFirstQuery.get(i)[0].equals(listSecondQuery.get(k)[0])) { 
						
						if((((int) listFirstQuery.get(i)[1]) < (int) (listSecondQuery.get(k)[1]))) {
							list.add(listFirstQuery.get(i)[1]);
							list.add(listFirstQuery.get(i)[2]);
							list.add(0);
							break;
							
							
						} else if((((int) listFirstQuery.get(i)[1]) == (int) (listSecondQuery.get(k)[1]))) {
							list.add(listFirstQuery.get(i)[1]);
							list.add(listFirstQuery.get(i)[2]);
							list.add(listSecondQuery.get(k)[2]);
							break;
							
						} else {
							if(!list.contains(listFirstQuery.get(i)[1])) {
								list.add(listSecondQuery.get(k)[1]);
								list.add(0);
								list.add(listSecondQuery.get(k)[2]);	
							}	
						}
					}
					if((k == listSecondQuery.size()-1) && (!list.contains(listFirstQuery.get(i)[1]))) {
						list.add(listFirstQuery.get(i)[1]);
						list.add(listFirstQuery.get(i)[2]);
						list.add(0);
					}
				}
		}
		return list;
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
