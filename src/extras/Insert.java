package extras;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import entity.Career;
import entity.Matriculation;
import entity.Student;

public class Insert {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("University");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        Student s1 = new Student("Luciano", "Diaz", 15, 'm', 45222111, "Villa Carlos Paz");
        Student s2 = new Student("Jorge", "Benson", 17, 'm', 45224121, "Berazategui");
        Student s3 = new Student("Ana", "Bens", 21, 'f', 45223171, "Villa Carlos Paz");
        Student s4 = new Student("Angelina", "Bros", 21, 'f', 41111171, "Berazategui");
        Student s5 = new Student("Sean", "Gomez", 18, 'm', 43222771, "Vela");
        Student s6 = new Student("Penelope", "Minn", 16, 'f', 44222888, "Benito Juarez");
        Student s7 = new Student("Manuel", "Guemes", 18, 'm', 41388811, "Vela");

        Career c1 = new Career("TUPAI");
        Career c2 = new Career("TEBA");
        Career c3 = new Career("Gestión");

        Matriculation m1 = c1.addStudent(2005, 2007, s1);
        Matriculation m2 = c1.addStudent(2007, 2017, s2);
        Matriculation m3 = c1.addStudent(2007, 2013, s3);
        Matriculation m4 = c2.addStudent(2010, 2012, s4);
        Matriculation m5 = c2.addStudent(2004, 2008, s5);
        Matriculation m6 = c2.addStudent(2007, 2013, s6);
        Matriculation m7 = c2.addStudent(2008, 2010, s7);
        em.persist(c1);
        em.persist(c2);
        em.persist(c3);

        em.persist(s1);
        em.persist(s2);
        em.persist(s3);
        em.persist(s4);
        em.persist(s5);
        em.persist(s6);
        em.persist(s7);

        em.persist(m1);
        em.persist(m2);
        em.persist(m3);
        em.persist(m4);
        em.persist(m5);
        em.persist(m6);
        em.persist(m7);

        em.getTransaction().commit();
        em.close();
        emf.close();
    }
}
