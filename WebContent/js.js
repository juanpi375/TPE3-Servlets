// {
    //         ["id": 1,
    //         "name": "TUPAI",
    //         "students": [
        //             {
            //                 "startYear": 2005,
            //                 "graduationYear": 2007,
            //                 "graduated": true,
            //                 "antiquity": 15
            //             }]
            //         ],
            //         ["id": 4,
            //         "name": "TUPAI",
            //         "students": [
                //             {
                    //                 "startYear": 2005,
                    //                 "graduationYear": 2007,
//                 "graduated": true,
//                 "antiquity": 15
//             }]],
//         ["id": ,
//         "name": "TUPAI",
//         "students": [
    //             {
        //                 "startYear": 2005,
        //                 "graduationYear": 2007,
        //                 "graduated": true,
        //                 "antiquity": 15
        //             }]]
        // }
        
//         let students=
// [
//         {
//         "id": 2,
//         "name": "TEBA",
//         "students": [
//                 {
//                         "startYear": 2020,
//                         "graduationYear": 2025,
//                         "graduated": true,
//                 "antiquity": 0
//             }]
//         },
//         {
//                     "id": 3,
//                     "name": "tudai",
//                     "students":[
//                             {"startYear": 2020,
//                             "graduationYear": 2025,
//                             "graduated": true,
//                     "antiquity": 0
//                 }]
//             },
//         {
//                 "id": 3,
//                 "name": "Gestión",
//                 "students": []
//             },
//             {
//                     "id": 2,
//                     "name": "TEBA",
//                     "students": [
//                             {
//                                     "startYear": 2020,
//                                     "graduationYear": 2025,
//                     "graduated": true,
//                     "antiquity": 0
//                 }]
//             },
//             {
//                     "id":4,
//                 "students": [           
//                     {
//                             "startYear": 2020,
//                             "graduationYear": 2025,
//                         "graduated": true,
//                         "antiquity": 0
//                     }]
//                 },
//                 {
//                 "id":5,
//                 "name": "ssds",
//                 "students": [           
//                     {"startYear": 2010,
//                     "graduationYear": 2012,
//                     "graduated": true,
//                     "antiquity": 10
//                 }]
//                 },
//                 {
//                     "id":6,
//                     "name": "ssds",
//                     "students":
//                 [{
//                         "startYear": 2004,
//                         "graduationYear": 2008,
//                     "graduated": true,
//                 "antiquity": 16}]
//             },
//             {
//                 "id":7,
//                 "name": "ssds",
//                 "students":
//                 [{    "startYear": 2007,
//                 "graduationYear": 2013,
//                 "graduated": true,
//                 "antiquity": 13
//             }]},
//             {  
//                 "id":8,
//                 "name": "ssds",
//                 "students":
//                 [{  "startYear": 2010,
//                 "graduationYear": 2012,
//                 "graduated": true,
//                 "antiquity": 10}]
//             },
//             {
//                 "id":9,
//                 "name": "ssds",
//                 "students":
//                 [{
//                 "startYear": 2007,
//                 "graduationYear": 2013,
//                 "graduated": true,
//                 "antiquity": 13}]
//         }
// ];

let url="http://localhost:8080/TPE3-Servlets/rest"

//a)dar de alta un estudiante
let form = document.getElementById("addStudent");
    if(form != null){
        form.addEventListener('submit',function addEstudient(e){
            e.preventDefault();
            let data= {
                name : document.getElementById("name").value,
                surname: document.getElementById("surname").value,
                age: document.getElementById("age").value,    
                genre: document.getElementById("genre").value,
                dni: document.getElementById("dni").value,
                city: document.getElementById("city").value
            }
            fetch(url+'/students', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},       
                body: JSON.stringify(data) 
            })
            .then(response => {
                console.log("se agrego")
                console.log(data);
            })
            .catch(error => console.log(error));
        })
    }
// b) matricular un estudiante en una carrera
let matForm = document.getElementById("addMat");
//matForm.addEventListener("submit", )
//if(matForm != null){
matForm.addEventListener('submit', matriculate);
	
function matriculate(e){
            e.preventDefault();
            if(document.getElementById("allCarrers").value==0){
                console.log("elija una carrera en donde matricularse")
                return;
            }else{
                let data= {
                    student: document.getElementById("MatriLu").value,
                    career: document.getElementById("allCarrers").value,
                    startYear: document.getElementById("starYear").value,
                    graduationYear: document.getElementById("graduationYear").value,    
                }
                fetch(url+'/matriculations', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},       
                    body: JSON.stringify(data) 
                })
                .then(response => {
                    console.log("se agrego")
                    console.log(data);
                })
                .catch(error => console.log(error));
            } 
    }
	
//}

//--------get carreras
let formi = document.getElementById("getCareer");
//formi.addEventListener("click", );

async function getAllCareers(){
    let url2 = url+'/careers';
    try {
        let r = await fetch(url2, {
            "method": "get"
            }, );
            let students = await r.json();
//            console.log("jeje"+students) 
            let selectCareers= document.querySelectorAll(".allCareers");
            console.log(selectCareers[0].id+" "+selectCareers[1].id+" sdfsdf")
            for(let c in students){
               
//            console.log(selectCareers+"sdf")
	            for(let sel of selectCareers){
	            	 let opt=document.createElement("option");
	                 let spn=document.createElement("span");
	                 let cName= document.createTextNode(students[c].name);
	                 spn.append(cName);
	                 opt.value=students[c].id;
	                 opt.append(spn);
	            	sel.append(opt)
	            	console.log(sel)
	            }
	//            selectCarrers.append(opt)
	            console.log("dddd")
	        }
    }
    catch{
        
        }
    }
getAllCareers();

// c) recuperar todos los estudiantes, y especificar algún criterio de ordenamiento simple.
    
let btnGetAllStudents= document.getElementById("getStudents");
btnGetAllStudents.addEventListener("click", getAllStudents);

async function getAllStudents(){   
    let url2 = url+'/students';
    try {
        let r = await fetch(url2, {
            "method": "get"
        }, showStudents);
//        console.log("yyyyyyyyy")
        let r2 = await r.json();
        contStud= document.querySelector("#showStudents");
        showStudents(r2,contStud)
//        console.log("aca si")
//        renew();  ahhh no
    }catch (n) {
        console.log("no muestra estudiantes");
    }
}

// d) recuperar un estudiante, en base a su número de libreta universitaria. 
//document.getElementById("getStudent").addEventListener("submit",getStudent)


		async function getStudent(e){
	 	e.preventDefault();
        let studentId = document.querySelector();
        let url2 = url+'/students/'+studentId;
        try {
            let r = await fetch(url2, {
                "method": "get"
            }, renew);
            let r2 = await r.json();
            if(r2!=null){
                let div=document.document.getElementById("divInner");
                div.innerHTML += "<tr>" + "<td>" + "name" + "</td>" + "<td>" + "LU" + "</td>" + "<td>" + "city" + "</td>" + "</tr>";
                div.hidden=false;
                div.innerHTML += "<tr>";
                let td=document.createElement("td");
                let sName= document.createTextNode(r2.name);
                td.append(sName);
                let liS=document.createElement("td");
                let sSurname= document.createTextNode(r2.surname);
                liS.append(sSurname);
                let liA=document.createElement("td");
                let sAge= document.createTextNode(r2.age);
                liA.append(sAge);
                let liG=document.createElement("td");
                let sGenre= document.createTextNode(r2.genre);
                liG.append(sGenre);
                let liDNI=document.createElement("td");
                let sDNI= document.createTextNode(r2.dni);
                liDNI.append(sDNI);
                let liC=document.createElement("td");
                let sCity= document.createTextNode(r2.city);
                liC.append(sCity);
                let liLU=document.createElement("td");
                let sLU= document.createTextNode(r2.lu);
                liLU.append(sLU);
                div.appendChilds(liA,liC,liDNI,liDNI,liG,liLU,td,liS);  
                div.innerHTML += "</tr>";
                renew();
            }
        } 
        catch (n) {
            console.log("error al obtener el estudiante"+n);
        }
    }

//e) recuperar todos los estudiantes, en base a su género.
let btnGetStudentsGenre= document.getElementById("getAllStudentsByGenre");
btnGetStudentsGenre.addEventListener("submit", function(e){getAllStudentsByGenre(e)});

function getAllStudentsByGenre(e){
	e.preventDefault();
    let genre=document.getElementById("studentGenre").value;
    if(genre !="m" && genre != "f"){
        console.log("elija una sexo valido")
        return;
    }else{
        fetch(url+'/students/genre/' + genre)
        .then(response => response.json())
        .then(resp => {
            contStud= document.querySelector("#showStudents");
  showStudents(resp,contStud);
       })
    }
} 

        
        
// f) recuperar las carreras con estudiantes inscriptos, y ordenar por cantidad de inscriptos.


// g) recuperar los estudiantes de una determinada carrera, filtrado por ciudad de residencia.
document.getElementById("getStudentByCareer").addEventListener('click',function(e){getStudentByCareer(e)})

function getStudentByCareer(e){
    e.preventDefault();
    career= document.getElementById("allCareers2").value;
    if(career ==0){
        console.log("elija una carrera")
        return
    }else{
        fetch(url+'/students/career/' + career)
        .then(response => response.json())
        .then(resp => {
            let cont= document.querySelector("#studentsForCareer");
                showStudents(resp,cont);
            })
    }
}


// h) generar un reporte de las carreras, que para cada carrera incluya información de los
// inscriptos y egresados por año. Se deben ordenar las carreras alfabéticamente, y
// presentar los años de manera cronológica.


function showStudents(students,container){
    for(let st of students){
//    	console.log("llegaron"+st)
//    	console.log("ul "+ul)
        let ul=document.createElement("tr");
        let liName=document.createElement("td");
        let name= document.createTextNode("NAME");
        let liN=document.createElement("td");
        let sName= document.createTextNode(st.name);
        liName.append(name)
        liN.append(sName);
        let liSurname=document.createElement("td");
        let surname= document.createTextNode("SURNAME");
        let liS=document.createElement("td");
        let sSurname= document.createTextNode(st.surname);
        liSurname.append(surname);
        liS.append(sSurname);
        let liAge=document.createElement("td");
        let age= document.createTextNode("Age");
        let liA=document.createElement("td");
        let sAge= document.createTextNode(st.age);
        liAge.append(age);
        liA.append(sAge);
        let liGenre=document.createElement("td");
        let genre= document.createTextNode("Genre");
        let liG=document.createElement("td");
        let sGenre= document.createTextNode(st.genre);
        liGenre.append(genre);
        liG.append(sGenre);
        let liD=document.createElement("td");
        let dni= document.createTextNode("DNI");
        let liDNI=document.createElement("td");
        let sDNI= document.createTextNode(st.dni);
        liD.append(dni);
        liDNI.append(sDNI);
        let liCity=document.createElement("td");
        let city= document.createTextNode("City");
        let liC=document.createElement("td");
        let sCity= document.createTextNode(st.city);
        liCity.append(city);
        liC.append(sCity);
        let liL=document.createElement("td");
        let lu= document.createTextNode("L.U");
        let liLU=document.createElement("td");  
        let sLU= document.createTextNode(st.lu);
        liL.append(lu);
        liLU.append(sLU);
        ul.append(liName,liN,liSurname,liS,liAge,liA,liGenre,liG,liC,liD,liCity,liC,liDNI,liL,liLU);
        container.appendChild(ul)
    }
}