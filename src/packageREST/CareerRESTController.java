package packageREST;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/careers")
public class CareerRESTController {
		@GET
		@Produces(MediaType.APPLICATION_JSON)
		public List<Career> getAllCareers() {
			return CareerDAO.getInstance().findAll();
		}
		
		@GET
		@Path("/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public Career getStudentByLU(@PathParam("id") String msg) {
			Integer id = Integer.valueOf(msg);
			Career car = CareerDAO.getInstance().findById(id);
			if(car!=null) {
				return car;
			}
			else {
				return null;
			}
		}
		
//		Llama a buscar todas las carreras con estudiantes
		@GET
		@Path("/with-students")
		@Produces(MediaType.APPLICATION_JSON)
		public List<Career> getCareersWithStudents() {
			List<Career> car = CareerDAO.getInstance().findAllWithStudents();
			if(car!=null) {
				return car;
			}
			else {
				return null;
			}
		}
		
		@GET
		@Path("/report")
		@Produces(MediaType.APPLICATION_JSON)
		public ReportDTO report() {
			ReportDTO report = CareerDAO.getInstance().getReport();
			if(report!=null) {
				return report;
			}
			else {
				return null;
			}
		}
		
		
		
}
