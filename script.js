
window.onload = function()
 {
   document.getElementById("user").innerHTML = "Geethajali.K"; 
  }
document.getElementById("btn-click").onclick = function() 
{ 
  this.style.backgroundColor = "yellow";
 }
 function makeSentence() 
 {
    var noun = document.getElementById("noun").value;
    var verb = document.getElementById("verb").value;
    var adverb = document.getElementById("adverb").value;
    var statement = document.getElementById("statement");
     statement.innerHTML = noun + " " + verb + " " + adverb; 
    } 
    document.getElementById("build-button").addEventListener("click", makeSentence); 

 document.getElementById("child").addEventListener("click", (e)=>
 { console.log("Child clicked"); 
 e.target.parentNode.addEventListener("click", (e)=>
  { console.log("Parent clicked"); 
  e.target.parentNode.parentNode.addEventListener("click", (e)=>
  { console.log("Grandparent clicked"); 
}); 
});
 }); 
 document.getElementById("grandparent").addEventListener("click",e=> 
 { console.log("Grandparent clicked"); }, true);
 document.getElementById("parent").addEventListener("click",e=>{
   console.log("parent clicked");
 },true);
 document.getElementById("child").addEventListener("click",e=>{
  console.log("child clicked");
},true); 

document.getElementById('category').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log(event.target.id);
  }
});