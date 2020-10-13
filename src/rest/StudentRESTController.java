package rest;

import java.util.List;


import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
//import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import dao.StudentDAO;
import entity.Student;

@Path("/students")
public class StudentRESTController {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Student> getAllStudents() {
		return StudentDAO.getInstance().findAll();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Student getStudentByLU(@PathParam("id") String msg) {
		Integer id = Integer.valueOf(msg);
		Student student = StudentDAO.getInstance().findById(id);
		if(student!=null) {
			return student;
		}
		else {
			return null;
		}
//			throw new RecursoNoExiste(id);
	}
	
	@GET
	@Path("/genre/{genre}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Student> getStudentByGenre(@PathParam("genre") char g) {
		List<Student> student = StudentDAO.getInstance().findAllByGenre(g);
		if(student!=null) {
			return student;
		}
		else {
			return null;
		}
	}
	
	@GET
	@Path("/career/{career}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Student> getStudentByCareer(@PathParam("career") int c) {
		List<Student> student = StudentDAO.getInstance().findAllByCareerFilterCity(c);
		if(student!=null) {
			return student;
		}
		else {
			return null;
		}
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createStudent(Student stud) {
		Student resultSt = StudentDAO.getInstance().persist(stud);
		if(resultSt==null) {
			return null;
		}else {
			return Response.status(201).entity(stud).build();
		}
	}
	
	
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteStudent(@PathParam("id") int id) {
		throw new UnsupportedOperationException();
	}
	
//	@PUT
//	@Path("/{id}")
//	@Consumes(MediaType.APPLICATION_JSON)
//	@Produces(MediaType.APPLICATION_JSON)
//	public Response updateStudent(@PathParam("id") int id, Student student) {
//		throw new UnsupportedOperationException();
//	}
	
	
}



