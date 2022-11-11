const fname= document.getElementById("name");
const surname= document.getElementById("surname");
const age= document.getElementById("age");
const nationality= document.getElementById("nationality");
const pasition= document.getElementById("pasition");
const experince= document.getElementById("experince");
const register=document.getElementById("sumbit_all")
const tdElemetry=document.getElementById("tdbody")
console.log(register)
register.addEventListener("click",function(e)
{
    e.preventDefault()

    const tdname=document.createElement("td");
    const tdsname=document.createElement("td");
    const tdage=document.createElement("td");
    const tdnationa=document.createElement("td");
    const tdpasi=document.createElement("td");
    const tdexper=document.createElement("td");
    console.log(fname.value)
    tdname.textContent=fname.value;
    tdsname.textContent=surname.value;
    tdage.textContent=age.value;    
    tdnationa.textContent=nationality
    //tdnationa.textContent=nationality.value;
    tdexper.textContent=experince.value;
    const trelement=document.createElement("tr");
    trelement.appendChild(tdname)
    trelement.appendChild(tdsname)
    trelement.appendChild(tdage)
    trelement.appendChild(tdnationa)
    trelement.appendChild(tdexper)

    tdElemetry.appendChild(trelement)


}
)
