let shoping =[[1,'agvanya',10+'$'],
              [2,'melafefon',20+'$'],
              [3,'gezer',30+'$']
             ];
let shopingTo =[];
let overolpric =0

function hosefLsal(x){
  overolpric=overolpric+x;
  
}

function maarach(parmeter){
    shopingTo.push(shoping[parmeter]);
    hosafa()
}


function hosafa(){
   let sal = document.getElementById("sal");
    sal.innerHTML = "";
 
    for(i=0;i<shopingTo.length; i++){
      let lichor = document.createElement("div");
       lichor.textContent = shopingTo[i] + "  ";
    
      let nowbuton = document.createElement("button");
       nowbuton.textContent = "הסרה מהסל";
       nowbuton.setAttribute('onclick',"remove('i')","fr()");
      
      lichor.appendChild(nowbuton);
      sal.appendChild(lichor);
      
    }

}


function remove(parmeter){
  
  shopingTo.splice(parmeter,1);
  
  hosafa();
 
    
    document.getElementById('iner').innerHTML=overolpric;

  }


   
  

