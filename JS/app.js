function addRow() {
          
    var operacao = document.getElementById("operacao");
	var ano = document.getElementById("ano");
	var semestre = document.getElementById("semestre");
	var professor = document.getElementById("prof");
	var atendente = document.getElementById("atend");
    var a = document.getElementById("A");
	var b = document.getElementById("B");
	var resultado = document.getElementById("resultado");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= operacao.value;
	row.insertCell(2).innerHTML= ano.value + "." + semestre.value;
	row.insertCell(3).innerHTML= atendente.value;
	row.insertCell(4).innerHTML= professor.value;
    row.insertCell(5).innerHTML= a.value;
	row.insertCell(6).innerHTML= b.value;
    row.insertCell(7	).innerHTML= Resultado.value;
	
	/*if (rowCount % 2 == 0){
		row.classList.add("even"); //Alterna as cores das colunas inserindo um atributo "class" 
	}
	else
	row.classList.add("odd");*/

	if (atendente.style.display == "none"){		
			
		if (professor.value == "Danusa Moura"){
			row.classList.add("orange");
			
		}else if (professor.value == "Emanuelle Santana"){
			row.classList.add("yellow");
			
		}else if (professor.value == "Luciano Maia"){
			row.classList.add("green");
			
		}else if (professor.value == "Patrick Cunha"){
			row.classList.add("blue");
		
		}else if (professor.value == "Vicente Azevedo"){
			row.classList.add("indigo");
			
		}else if (professor.value == "Victoria Wanzeller"){
			row.classList.add("violet");
		}
	
	}else{		
		if (atendente.value == "Atendente A"){
		row.classList.add("indigo");
		
		}else if (atendente.value == "Atendente B"){
		row.classList.add("violet");
		}
		//alert(atendente.value);
	} 
}

/*function enableButton() {
        var choice = document.getElementById("operacao");
		var operA = document.getElementById("A");
		var operB = document.getElementById("B");
		var result = document.getElementById("Resultado");
        if ((choice.value != "-please select-") && (operA != "") && (operB != "") && (result != "")) {
            document.getElementById('add').disabled = false;
        } 
    }
});*/

function PrintElem()
{
	var printTitle = document.title  + " " + dateTime() ;
	var printContents = document.getElementById("mydata").innerHTML;
	var originalTitle = document.title
    var originalContents = document.body.innerHTML;

	document.title = printTitle;
    document.body.innerHTML = printContents;
    /*var mywindow = window.open('', 'PRINT', 'height=600,width=800');
	newTitle = document.getElementById("operacao").value;
	document.title= newTitle  + " " + dateTime();

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + newTitle  + " " + dateTime() + '</h1>');
    mywindow.document.write(document.getElementById("mydata").innerHTML);
    mywindow.document.write('</body></html>');

   /* mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    //mywindow.print();
    //mywindow.close();
	window.print();
	document.title = originalTitle;
	document.body.innerHTML = originalContents;	

    //return true;
}

function dateTime()
{
    var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
	return dateTime;

}
 
 
function SelectOperation() {
      
    var choice = document.getElementById("operacao");
    var operA = document.getElementById("A");
	var operB = document.getElementById("B");
	var result = document.getElementById("Resultado");	
	
	document.getElementById('atend').disabled = false;
	document.getElementById('prof').disabled = false;
	//document.getElementById('add').disabled = true;
	
	operA.disabled = false;
	operB.disabled = false;
    
	if(choice.value == "-please select-"){
		/*var pai = document.getElementById("pai"); 
		var td = document.createElement("td");
		td.innerHTML = "Note: Nenhuma opção selecionada!!!";
		document.body.appendChild(td);  
		/*td.textContent = "Note: Nenhuma opção selecionada!!!";
		//document.getElementById("note").innerHTML = "Note: Nenhuma opção  elecionada";
		 td.setAttribute('id', 'note');
		 pai.appendChild(td.textContent); */
		 document.getElementById('atend').disabled = true;
		 document.getElementById('prof').disabled = true;
		 //document.getElementById('add').disabled = true;
		 operA.disabled = true;
		 operB.disabled = true;
		 
		
	}
	
	else if(choice.value == "Retenção"){		
		var twoPlaces = (parseFloat(operA.value) / parseFloat(operB.value))* 100;			
		if(isNaN(twoPlaces)){
			result.placeholder = "Percentual Retenção";			
		}else{
			result.value = (twoPlaces.toFixed(2)).toString();			
			result.value += ' %';	
			Resultado.value.innerHTML= result.value;				
		}		
		//Resultado.value.innerHTML=  ' %';					
				
		
	}
	
	else if(choice.value == "Captação"){
		var twoPlaces = (parseFloat(operA.value) / parseFloat(operB.value))* 100;			
		if(isNaN(twoPlaces)){
			result.placeholder = "Percentual Captação";			
		}else{
			result.value = (twoPlaces.toFixed(2)).toString();			
			result.value += ' %';	
			Resultado.value.innerHTML= result.value;				
		}				
	}
	
	else if(choice.value == "Mul"){
		result.value = operA.value * operB.value;
		Resultado.value.innerHTML= result.value;		
	}
	
	else if(choice.value == "Div"){
	result.value = operA.value/operB.value;
	Resultado.value.innerHTML= result.value;	
	}
	
	//SetForm();
    
}

function selectConsultora(){
	var atendente = document.getElementById("atend").value;
	if (atendente != "") {	
		document.getElementById('add').disabled = false;    
	}
}

function selectProfessor(){
	var professor = document.getElementById("prof").value;
	if (professor != "") {	
		document.getElementById('add').disabled = false;    
	}
}

function SetForm() {
  //var filial = document.getElementById("filial").value;
  var operacao = document.getElementById("operacao").value;
  document.getElementById('add').disabled = true;
  document.getElementById('ano').disabled = true;
  document.getElementById('semestre').disabled = true;
  //document.getElementById('operacao').disabled = true;
  
  /*if(filial != "-please select-"){
	  document.getElementById('operacao').disabled = false;*/
	  
	  if (operacao == "-please select-") {	
		document.getElementById("prof").style.display = "none";
		document.getElementById("A").placeholder = "Operador A";
		document.getElementById("B").placeholder = "Operador B";	
		document.getElementById("Resultado").placeholder = "Resultado";	  
    
	  } else if (operacao == "Retenção") {
		document.getElementById('ano').disabled = false;
		document.getElementById('semestre').disabled = false;
		document.getElementById("prof").style.display = "block";
		document.getElementById("atend").style.display = "none";
		document.getElementById("atend").value = "-please select-";
		document.getElementById("A").placeholder = "N° Alunos Rematriculados";
		document.getElementById("B").placeholder = "Total Alunos Matriculados";
		document.getElementById("Resultado").placeholder = "Percentual Retenção";
		//selectProfessor();
		
	  } else if (operacao == "Captação") {
		document.getElementById('ano').disabled = false;
		document.getElementById('semestre').disabled = false;
		document.getElementById("atend").style.display = "block";
		document.getElementById("prof").style.display = "none";
		document.getElementById("prof").value = "-please select-";
		document.getElementById("A").placeholder = "N° Alunos Matriculados";
		document.getElementById("B").placeholder = "Total Alunos Interessados";
		document.getElementById("Resultado").placeholder = "Percentual Captação";
		//selectConsultora();
	  } /*else if (operacao == "Mul") {
		document.getElementById("prof").style.display = "none";
	  } else if (operacao == "Div") {
		document.getElementById("prof").style.display = "none";
	  }*/
	//}
}

function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}
 
function load() {
    
    console.log("Page load finished");
	
}