
let url="http://localhost:8080/TPE3-Servlets/rest"

//a)dar de alta un estudiante
let form = document.getElementById("addStudent");
if(form != null){
    form.addEventListener('submit',function(e){
        let alrt=document.querySelector("#alert");
        alrt.hidden = true;
        removeAllChildNodes(alrt);
        e.preventDefault();
        let genre=document.getElementById("genre").value;
        if(genre!="0") {
            let data = {
                name: document.getElementById("name").value,
                surname: document.getElementById("surname").value,
                age: document.getElementById("age").value,
                genre: genre,
                dni: document.getElementById("dni").value,
                city: document.getElementById("city").value
            }
            fetch(url + '/students', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
                .then(response => {
                    let h = document.createElement("h4");
                    let txt = document.createTextNode("El estudiante se agrego correctamente ")
                    h.append(txt)
                    alrt.appendChild(h)
                    alrt.hidden = false;
                })
                .catch(error => {
                    let h = document.createElement("h4");
                    let txt = document.createTextNode("El estudiante No se agrego ");
                    h.append(txt);
                    alrt.appendChild(h);
                    alrt.hidden = false;
                })
        }else {
                    let h = document.createElement("h4");
                    let txt = document.createTextNode("Debe seleccionar un sexo valido");
                    h.append(txt);
                    alrt.appendChild(h);
                    alrt.hidden = false;
        }
        })
}
// b) matricular un estudiante en una carrera
let matForm = document.getElementById("addMat");
//matForm.addEventListener("submit", )
//if(matForm != null){
matForm.addEventListener('submit', matriculate);

function matriculate(e){
    e.preventDefault();
    let alrt=document.querySelector("#alertMat");
    alrt.hidden = true;
    removeAllChildNodes(alrt);
    if(document.getElementById("allCareers1").value==0){
        let h = document.createElement("h4");
        let txt = document.createTextNode("Debe seleccionar una carrera valida");
        h.append(txt);
        alrt.appendChild(h);
        alrt.hidden = false;
        return;
    }else{
        let data= {
            student: document.getElementById("MatriLu").value,
            career: document.getElementById("allCareers1").value,
            startYear: document.getElementById("starYear").value,
            graduationYear: document.getElementById("graduationYear").value,
        }
        fetch(url+'/matriculations', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => {
                let h = document.createElement("h4");
                let txt = document.createTextNode("Se matriculo correctamente al estudiante");
                h.append(txt);
                alrt.appendChild(h);
                alrt.hidden = false;
            })
            .catch(error =>{
                let h = document.createElement("h4");
                let txt = document.createTextNode("No se matriculo al estudiante");
                h.append(txt);
                alrt.appendChild(h);
                alrt.hidden = false;
                console.log(error)
            });
    }
}


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
//                console.log(sel)
            }
            //            selectCarrers.append(opt)
//            console.log("dddd")
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
        let r2 = await r.json();
        contStud= document.querySelector("#showStudents");
        showStudents(r2,contStud)
    }catch (n) {
        console.log("no muestra estudiantes");
    }
}

// d) recuperar un estudiante, en base a su número de libreta universitaria.
document.getElementById("getStudentForm").addEventListener("submit",getStudent)

async function getStudent(e){
    e.preventDefault();
    let alrt=document.querySelector("#alertSt")
    alrt.hidden=true
    let studentId = document.querySelector("#getStudent").value;
    let div=document.getElementById("divInner");
    removeAllChildNodes(div);
    
    let url2 = url+'/students/'+studentId;
    try {
        let r = await fetch(url2, {
            "method": "get"
        });
        let st = await r.json();
        if(st!=null){
            let tr= document.createElement("tr");
            let liName = document.createElement("td");
            let name = document.createTextNode("NAME");
            liName.append(name)
            let liSurname = document.createElement("td");
            let surname = document.createTextNode("SURNAME");
            liSurname.append(surname);
            let liAge = document.createElement("td");
            let age = document.createTextNode("Age");
            liAge.append(age);
            let liGenre = document.createElement("td");
            let genre = document.createTextNode("Genre");
            liGenre.append(genre);
            let liD = document.createElement("td");
            let dni = document.createTextNode("DNI");
            liD.append(dni);
            let liCity = document.createElement("td");
            let city = document.createTextNode("City");
            liCity.append(city);
            let liL = document.createElement("td");
            let lu = document.createTextNode("L.U");
            liL.append(lu);
            tr.append(liName, liSurname, liAge, liGenre, liCity, liD, liL);
            div.appendChild(tr)
            let ul = document.createElement("tr");
            let liN = document.createElement("td");
            let sName = document.createTextNode(st.name);
            liN.append(sName);
            let liS = document.createElement("td");
            let sSurname = document.createTextNode(st.surname);
            liS.append(sSurname);
            let liA = document.createElement("td");
            let sAge = document.createTextNode(st.age);
            liA.append(sAge);
            let liG = document.createElement("td");
            let sGenre = document.createTextNode(st.genre);
            liG.append(sGenre);
            let liDNI = document.createElement("td");
            let sDNI = document.createTextNode(st.dni);
            liDNI.append(sDNI);
            let liC = document.createElement("td");
            let sCity = document.createTextNode(st.city);
            liC.append(sCity);
            let liLU = document.createElement("td");
            let sLU = document.createTextNode(st.lu);
            liLU.append(sLU);
            ul.append( liN, liS, liA, liG, liC, liDNI, liLU);
            div.appendChild(ul)
            div.hidden=false;
        }else{
            let h = document.createElement("h4");
            let txt = document.createTextNode("No se encontró ningun estudiante con la L.U proporcionada");
            h.append(txt);
            alrt.appendChild(h);
            alrt.hidden = false;
        }
    }
    catch (n) {
        console.log("error al obtener el estudiante"+n);
        let h = document.createElement("h4");
        let txt = document.createTextNode("No se encontró ningun estudiante con la L.U proporcionada");
        h.append(txt);
        removeAllChildNodes(alrt)
        alrt.appendChild(h);
        alrt.hidden = false;
    }
}

//e) recuperar todos los estudiantes, en base a su género.
let btnGetStudentsGenre= document.getElementById("getAllStudentsByGenre");
btnGetStudentsGenre.addEventListener("submit", function(e){getAllStudentsByGenre(e)});

function getAllStudentsByGenre(e){
    e.preventDefault();
    let alrt=document.getElementById("alertGenre");
    alrt.hidden=true;
    let genre=document.getElementById("studentGenre").value;
    if(genre == "0"){
        let h = document.createElement("h4");
        let txt = document.createTextNode("Debe seleccionar un sexo valido");
        h.append(txt);
        removeAllChildNodes(alrt)
        alrt.appendChild(h);
        alrt.hidden = false;
        return;
    }else{
        fetch(url+'/students/genre/' + genre)
            .then(response => response.json())
            .then(resp => {
                let contStud= document.querySelector("#divByG");
                showStudents(resp,contStud);
                contStud.hidden=false;
            })
    }
}

// f) recuperar las carreras con estudiantes inscriptos, y ordenar por cantidad de inscriptos.

let btnGetCareersWithStudents= document.getElementById("getCarrers");
btnGetCareersWithStudents.addEventListener("click", getCareersWithStudents);

let getCareersWithStudentsContainer = document.querySelector("#carrerstWithInscript")

async function getCareersWithStudents(){
    let url2 = url+'/careers/with-students';
    try {
        let r = await fetch(url2, {
            "method": "get"
        }, showCareers);
        let r2 = await r.json();
//        showStudents(r2,contStud)
        showCareers(r2, getCareersWithStudentsContainer)
//        console.log(r2[0].students.length+"r2")
    }catch(n) {
    	console.log("Hubo un problema buscando carreras con estudiantes")
//        console.log("no muestra estudiantes");
    }
}

// g) recuperar los estudiantes de una determinada carrera, filtrado por ciudad de residencia.
document.getElementById("getStudentByCareer").addEventListener('click',function(e){getStudentByCareer(e)})

function getStudentByCareer(e){
    e.preventDefault();
    career= document.getElementById("allCareers2").value;
    
    let alrt=document.getElementById("alertStudByCareer");
    alrt.hidden=true;
    
    if(career ==0){
        console.log("elija una carrera")
        let h = document.createElement("h4");
        let txt = document.createTextNode("Debe seleccionar una carrera");
        h.append(txt);
        removeAllChildNodes(alrt)
        alrt.appendChild(h);
        alrt.hidden = false;
        
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
let btnReport= document.getElementById("getReport")
btnReport.addEventListener("click", getReport)

let getReportContainer = document.querySelector("#reportContainer")

async function getReport(){
 let url2 = url+'/careers/report';
	try {
	    let r = await fetch(url2, {
	        "method": "get"
	    }, showReport);
	    let r2 = await r.json();
	    console.log("Falta acomodar: retorna el nombre de la " +
	    		"carrera seguido por la lista de los años en los " +
	    		"que tiene información (el número de inscriptos primero " +
	    		"y el número de graduados después): "+r2)
	    showReport(r2, getReportContainer)
	}catch(n){
		console.log("Hubo un problema generando el registro")
	}
}

//---------------------helpers------------------------------------

function showStudents(students,container) {
    removeAllChildNodes(container);
    let tr= document.createElement("tr");
    let liName = document.createElement("td");
    let name = document.createTextNode("NAME");
    liName.append(name)
    let liSurname = document.createElement("td");
    let surname = document.createTextNode("SURNAME");
    liSurname.append(surname);
    let liAge = document.createElement("td");
    let age = document.createTextNode("Age");
    liAge.append(age);
    let liGenre = document.createElement("td");
    let genre = document.createTextNode("Genre");
    liGenre.append(genre);
    let liD = document.createElement("td");
    let dni = document.createTextNode("DNI");
    liD.append(dni);
    let liCity = document.createElement("td");
    let city = document.createTextNode("City");
    liCity.append(city);
    let liL = document.createElement("td");
    let lu = document.createTextNode("L.U");
    liL.append(lu);
    tr.append(liName, liSurname, liAge, liGenre, liCity, liD, liL);
    container.appendChild(tr)

    for (let st of students) {
        let ul = document.createElement("tr");
        let liN = document.createElement("td");
        let sName = document.createTextNode(st.name);
        liN.append(sName);
        let liS = document.createElement("td");
        let sSurname = document.createTextNode(st.surname);
        liS.append(sSurname);
        let liA = document.createElement("td");
        let sAge = document.createTextNode(st.age);
        liA.append(sAge);
        let liG = document.createElement("td");
        let sGenre = document.createTextNode(st.genre);
        liG.append(sGenre);
        let liDNI = document.createElement("td");
        let sDNI = document.createTextNode(st.dni);
        liDNI.append(sDNI);
        let liC = document.createElement("td");
        let sCity = document.createTextNode(st.city);
        liC.append(sCity);
        let liLU = document.createElement("td");
        let sLU = document.createTextNode(st.lu);
        liLU.append(sLU);
        ul.append( liN, liS, liA, liG, liC, liDNI, liLU);
        container.appendChild(ul)
    }
}

function showCareers(careers,container) {
    removeAllChildNodes(container);
    let tr= document.createElement("tr");
    let liName = document.createElement("td");
    let name = document.createTextNode("NOMBRE");
    liName.append(name)
    let liSurname = document.createElement("td");
    let surname = document.createTextNode("ESTUDIANTES");
    liSurname.append(surname);
    tr.append(liName, liSurname);
    container.appendChild(tr)

    for (let st of careers) {
        let ul = document.createElement("tr");
        
        let liN = document.createElement("td");
        let sName = document.createTextNode(st.name);
        liN.append(sName);
        let liS = document.createElement("td");
        let sSurname = document.createTextNode(st.students.length);
        liS.append(sSurname);
        
        ul.append(liN, liS);
        container.appendChild(ul)
    }
}

function showReport(report,container) {
    removeAllChildNodes(container);
    let tr= document.createElement("tr");
    let liName = document.createElement("td");
    let name = document.createTextNode("NOMBRE");
    liName.append(name)
//    let liSurname = document.createElement("td");
//    let surname = document.createTextNode("ESTUDIANTES");
//    liSurname.append(surname);
    tr.append(liName);
    container.appendChild(tr)

//    for (let st of careers) {
//        let ul = document.createElement("tr");
//        
//        let liN = document.createElement("td");
//        let sName = document.createTextNode(st);
//        liN.append(sName);
////        let liS = document.createElement("td");
////        let sSurname = document.createTextNode(st.students.length);
////        liS.append(sSurname);
//        
//        ul.append(liN, liS);
//        container.appendChild(ul)
//    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}








