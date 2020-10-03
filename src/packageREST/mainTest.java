package packageREST;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

public class mainTest {

//	@Path("/stu")
	public static void main(String[] args) {
		System.out.println("prueba que studentDAO anda");
		System.out.println();
		System.out.println(StudentDAO.getInstance().findAll());
	}
	
	
	@Path("/stu")
	public class RESTController {
		@GET
		@Produces(MediaType.APPLICATION_JSON)
		public List<Student> getAllStudents() {
			
			return StudentDAO.getInstance().findAll();
		}
	}

	
	
	
		
}
