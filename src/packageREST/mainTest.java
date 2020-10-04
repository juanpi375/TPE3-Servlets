package packageREST;

import java.util.List;

import javax.websocket.server.PathParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

public class mainTest {

//	@Path("/stu")
	public static void main(String[] args) {
		System.out.println("prueba que studentDAO anda");
		System.out.println();
//		System.out.println(StudentDAO.getInstance().findAll());
		System.out.println(StudentDAO.getInstance().findAllByGenre('f'));
	}
	
//	@Path("/stu")
//	public class RESTController {
//	@GET
//	@Path("/{id}")
//	@Produces(MediaType.APPLICATION_JSON)
//	public Student getStudentByLU(@PathParam("id") String msg) {
//		Integer id = Integer.valueOf(msg);
//		Student student = StudentDAO.getInstance().findById(id);
//		if(student!=null)
//			return student;
//		else
//			return null;
////			throw new RecursoNoExiste(id);
//		}
//	}
	
//	
//	@Path("/stu")
//	public class RESTController {
//		@GET
//		@Produces(MediaType.APPLICATION_JSON)
//		public List<Student> getAllStudents() {
//			
//			return StudentDAO.getInstance().findAll();
//		}
//	}

	
	
	
		
}
