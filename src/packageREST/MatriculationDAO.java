package packageREST;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public class MatriculationDAO implements DAO<Matriculation, Integer> {

	private static MatriculationDAO daoMatriculation;
	
	private MatriculationDAO(){}

	public static MatriculationDAO getInstance() {
		if(daoMatriculation==null)
			daoMatriculation=new MatriculationDAO();
		return daoMatriculation;
	}
	
	
	@Override
	public Matriculation persist(Matriculation matri) {
		EntityManager entityManager = EMF.createEntityManager();
		entityManager.getTransaction().begin();
		entityManager.persist(matri);
		entityManager.getTransaction().commit();
		entityManager.close();
		return matri;
	}

	@Override
	public Matriculation update(Integer id, Matriculation newEntityValues) {
		throw new UnsupportedOperationException();
	}

	@Override
	public Matriculation findById(Integer id) {
		EntityManager entityManager=EMF.createEntityManager();
		Matriculation matri=entityManager.find(Matriculation.class, id);
		entityManager.close();
		return matri;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Matriculation> findAll() {
		EntityManager entityManager=EMF.createEntityManager();
		Query q = entityManager.createQuery("SELECT s FROM Student s order by s.name", Student.class);
		List<Matriculation> matris = q.getResultList();
		return matris;
	}

	@Override
	public boolean delete(Integer id) {
		// TODO Auto-generated method stub
		return false;
	}

}
