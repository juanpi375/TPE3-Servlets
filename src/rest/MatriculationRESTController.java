package rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.fasterxml.jackson.annotation.JsonIgnore;

import dao.CareerDAO;
import dao.MatriculationDAO;
import dao.StudentDAO;
import dto.MatriculationDTO;
import entity.Career;
import entity.Matriculation;
import entity.Student;

@Path("/matriculations")
public class MatriculationRESTController {

//	Retorna todas las matriculaciones (sin orden)
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Matriculation> getAllStudents() {
		return MatriculationDAO.getInstance().findAll();
	}
	
//	Genera una matriculación
//	Tiene que recibir un DTO
//	@JsonIgnore
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createMatriculation(MatriculationDTO m) {
		Career c = CareerDAO.getInstance().findById(m.getCareer());
		Student s = StudentDAO.getInstance().findById(m.getStudent());
		
		Matriculation mat = new Matriculation(m.getStartYear(), m.getGraduationYear(), c, s);
		Matriculation matResult = MatriculationDAO.getInstance().persist(mat);
		if(matResult == null) {
			return null;
		}else {
//			CareerDAO.getInstance().addMatriculation(matResult);
//			StudentDAO.getInstance().addMatriculation(matResult);
			return Response.status(201).entity(m).build();
		}
	}
}
