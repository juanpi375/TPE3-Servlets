
let url="http://localhost:8080/TPE3-Servlets/rest"

async function getAllCitys(){
    let url2 = url+'/students/citys';
    try {
        let r = await fetch(url2, {
            "method": "get"
        }, );
        let citys = await r.json();
        let selectCitys= document.querySelector("#allCitys");
        for(let c in citys){
            let opt=document.createElement("option");
            let spn=document.createElement("span");
            let cName= document.createTextNode(citys[c]);
            spn.append(cName);
            opt.value=citys[c];
            opt.append(spn);
            selectCitys.append(opt)
        }
    }
    catch{

    }
}
getAllCitys();


	
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
                    getAllCitys();
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
//    console.log("Matriculating..")
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
//        console.log(selectCareers[0].id+" "+selectCareers[1].id+" sdfsdf")
        console.log("Buscando carreras..")
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
        console.log("Error obteniendo estudiantes");
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
        console.log("Error al obtener el estudiante: "+n);
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
//document.getElementById("getStudentByCareer").addEventListener('click',function(e){getStudentByCareer(e)})
//
//function getStudentByCareer(e){
//    e.preventDefault();
//    career= document.getElementById("allCareers2").value;
//    
//    let alrt=document.getElementById("alertStudByCareer");
//    alrt.hidden=true;
//    
//    if(career ==0){
//        console.log("elija una carrera")
//        let h = document.createElement("h4");
//        let txt = document.createTextNode("Debe seleccionar una carrera");
//        h.append(txt);
//        removeAllChildNodes(alrt)
//        alrt.appendChild(h);
//        alrt.hidden = false;
//        
//        return
//    }else{
//        fetch(url+'/students/career/' + career)
//            .then(response => response.json())
//            .then(resp => {
//                let cont= document.querySelector("#studentsForCareer");
//                showStudents(resp,cont);
//            })
//    }
//}
document.getElementById("getStudentByCareer").addEventListener('click',function(e){getStudentByCareer(e)})

function getStudentByCareer(e){
    e.preventDefault();
    let alrt=document.getElementById("alertStCity");
    alrt.hidden=true;
    removeAllChildNodes(alrt)
    let career= document.getElementById("allCareers2").value;
    let city = document.getElementById("allCitys").value;
    if(career ==0 ){
        let h = document.createElement("h4");
        let txt = document.createTextNode("Debe seleccionar una carrera");
        h.append(txt);
        alrt.appendChild(h);
        alrt.hidden = false;
        return
    }else if(city==0){
        let h = document.createElement("h4");
        let txt = document.createTextNode("Debe seleccionar una ciudad");
        h.append(txt);
        alrt.appendChild(h);
        alrt.hidden = false;
        return
    }
    else{
        fetch(url+'/students/career/' + career +'/'+city)
            .then(response => response.json())
            .then(resp => {
                let cont = document.querySelector("#studentsForCareer");
                showStudents(resp, cont);
            })
    }
}


// h) generar un reporte de las carreras, que para cada carrera incluya información de los
// inscriptos y egresados por año. Se deben ordenar las carreras alfabéticamente, y
// presentar los años de manera cronológica.

//let btnReport= document.getElementById("getReport")
//btnReport.addEventListener("click", getReport)

document.getElementById("getReport").addEventListener('click',function(e){showReport(e)})

//    let cont = document.querySelector("#reportContainer");
//    console.log(cont+" aqui")

async function showReport(e){
    e.preventDefault();
    let cont = document.querySelector("#reportContainer");
    console.log(cont)
    removeAllChildNodes(cont);
    let url2 = url+'/careers/report';
    try {
        let r = await fetch(url2, {
            "method": "get"
        }, );
        let report = await r.json();
        // let careers=[];
        for(let c of report.careers){
            // console.log(c)
            let ul = document.createElement("ul");
            let liName = document.createElement("li")
            let Cname = document.createTextNode("Carrera: " + c.name)
            liName.append(Cname);
            // console.log(Cname);
            ul.append(liName);
            cont.append(ul)
            // let insc=c.inscripts;
            // let grad=c.graduated;
            // let arrayIns = Object.entries(insc);
            let mapStud = Object.entries(c.students);
            // let Career=new CareerReport(c.name)
            for (let [key, value] of mapStud) {
                let liYear = document.createElement("li");
                let year = document.createTextNode("Año: "+key);
                liYear.append(year);
                ul.append(liYear);
                let ul2=document.createElement("ul");
                let liIns= document.createElement("li");
                let ins = document.createTextNode("Estudiantes inscriptos: ")
                liIns.append(ins)
                ul2.append(liIns)
                if(value.inscripted.length != 0) {
                    for (let st of value.inscripted) {
                        let liStud = document.createElement("li");
                        let stud = document.createTextNode(st)
                        liStud.append(stud)
                        ul2.append(liStud)
                        // let stud = new Student(year, st);
                        // console.log(stud);
                        // Career.addInscript(stud)
                    }
                }else {
                    let liIng= document.createElement("li");
                    let ing= document.createTextNode(" No Hubo Estudiantes Ingresantes En Este Año")
                    liIng.append(ing);
                    ul2.append(liIng);
                }
                let liGrad= document.createElement("li");
                let grad= document.createTextNode("Estudiantes Graduados: ")
                liGrad.append(grad);
                ul2.append(liGrad);
                if(value.graduated.length != 0){
                    for (let st of value.graduated) {
                        let liStud = document.createElement("li");
                        let stud = document.createTextNode(st)
                        liStud.append(stud)
                        ul2.append(liStud)
                        // let year = key;
                        // for (let st of value) {
                        //     let stud = new Student(year, st);
                        //     console.log(stud);
                        //     Career.addGraduate(stud)
                        // }
                    }
                }else {
                    let liGrad= document.createElement("li");
                    let grad= document.createTextNode(" No Hubo Estudiantes Graduados En Este Año")
                    liGrad.append(grad);
                    ul2.append(liGrad);
                }
                ul.append(ul2)
           }
            cont.hidden = false
        }
         }catch(n){
        	 console.log("Hubo un problema buscando el reporte")
        	}
}

//async function getReport(e){
//    e.preventDefault();
////    let cont = document.querySelector("#report");
////    Report is getReportContainer
//    let cont = document.querySelector("#reportContainer")
//    removeAllChildNodes(cont);
//    let url2 = url+'/careers/report';
//    try {
//        let r = await fetch(url2, {
//            "method": "get"
//        }, );
//        let report = await r.json();
////        let map = new Map()
//        
////        let map = {}
////        for(let c of report.careers){
////        	for(let year of c){
////        		
////        	}
////        }
//////        	map.algo = c
////        	for(let [year, student] of Object.entries(c.inscripts)){
////        		if(!(year in map)){
////        			map.year = []
////        			map.year[0] = new Array()
////        			map.year[1] = new Array()
//////        			console.log("4")
////        		}
////        		map.year[0].push(student)
////        		console.log(map.year[0].length)
////        		console.log(map.year[0])
////        		console.log(year)
//////        		console.log(map.year)
////        	}
////        	for(let [year, student] of Object.entries(c.graduated)){
////        		if(!(year in map)){
////        			map.year = []
////        			map.year[0] = []
////        			map.year[1] = []
////        		}
////        		map.year[1].push(student)
//////        		console.log(map.year)
////        	}
////        }
////        for(let i in map){
////        	console.log(map.year)
////        }
////        console.log("mapa "+map)
////        console.log(map.algo)
//        
////            console.log(c)
////            let ul = document.createElement("ul");
////            let liName = document.createElement("li")
////            let Cname = document.createTextNode("Carrera: " + c.name)
////            liName.append(Cname);
////            console.log(Cname);
////            ul.append(liName);
////            cont.append(ul)     
//            
////            let insc=c.inscripts;
////            let grad=c.graduated;
////            let arrayIns = Object.entries(insc);
////            let arrayGrad = Object.entries(grad);
////            
////            for (let [key1, value1] of arrayIns) {
////                for (let [key, value] of arrayGrad) {
////                    let ul2=document.createElement("ul");
////                    if(key1==key){
////                        let liYear = document.createElement("li");
////                        let year = document.createTextNode("Año: "+key1)
////                        liYear.append(year);
////                        let liIns= document.createElement("li");
////                        let ins = document.createTextNode("Estudiantes inscriptos: ")
////                        liIns.append(ins)
////                        ul2.append(liYear,liIns)
////                        for(let st of value1){
////                            let liStud = document.createElement("li");
////                            let stud = document.createTextNode(st)
////                            liStud.append(stud)
////                            ul2.append(liStud)
////                        }
////                        let liGrad= document.createElement("li");
////                        let grad= document.createTextNode("Estudiantes Graduados: ")
////                        liGrad.append(grad);
////                        ul2.append(liGrad);
////                        for(let st of value){
////                            let liStud = document.createElement("li");
////                            let stud = document.createTextNode(st)
////                            liStud.append(stud)
////                            ul2.append(liStud)
////                        }
////                    }else if(value1<value) {
////                        let liYear = document.createElement("li");
////                        let year = document.createTextNode("Año: " + key1)
////                        liYear.append(year);
////                        let liIns = document.createElement("li");
////                        let ins = document.createTextNode("Estudiantes inscriptos: ")
////                        liIns.append(ins)
////                        ul2.append(liYear, liIns)
////                        for (let st of value1) {
////                            let liStud = document.createElement("li");
////                            let stud = document.createTextNode(st)
////                            liStud.append(stud)
////                            ul2.append(liStud)
////                        }
////                        let liGrad= document.createElement("li");
////                        let grad= document.createTextNode(" No Hubo Estudiantes Graduados En Este Año")
////                        liGrad.append(grad);
////                        ul2.append(liGrad);
////                    }else{
////                        let liYear = document.createElement("li");
////                        let year = document.createTextNode("Año: " + key1)
////                        liYear.append(year);
////                        let liIng= document.createElement("li");
////                        let ing= document.createTextNode(" No Hubo Estudiantes Ingresantes En Este Año")
////                        liIng.append(ing);
////                        ul2.append(liYear,liIng);
////                        let liGrad= document.createElement("li");
////                        let grad= document.createTextNode("Estudiantes Graduados: ")
////                        liGrad.append(grad);
////                        ul2.append(liGrad);
////                        for(let st of value){
////                            let liStud = document.createElement("li");
////                            let stud = document.createTextNode(st)
////                            liStud.append(stud)
////                            ul2.append(liStud)
////                        }
////                    }
////                    cont.append(ul2)
////                }
////            }
////        }
//
//    }catch {
//    	console.log("Error en el reporte")
//    }
////    cont.hidden=false
//}

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

//function showReport(report,container) {
//    removeAllChildNodes(container);
//    let tr= document.createElement("tr");
//    let liName = document.createElement("td");
//    let name = document.createTextNode("NOMBRE");
//    liName.append(name)
////    let liSurname = document.createElement("td");
////    let surname = document.createTextNode("ESTUDIANTES");
////    liSurname.append(surname);
//    tr.append(liName);
//    container.appendChild(tr)
//
////    for (let st of careers) {
////        let ul = document.createElement("tr");
////        
////        let liN = document.createElement("td");
////        let sName = document.createTextNode(st);
////        liN.append(sName);
//////        let liS = document.createElement("td");
//////        let sSurname = document.createTextNode(st.students.length);
//////        liS.append(sSurname);
////        
////        ul.append(liN, liS);
////        container.appendChild(ul)
////    }
//}

function removeAllChildNodes(parent) {
//	console.log(parent)
//	if (parent==undefined){return}
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
