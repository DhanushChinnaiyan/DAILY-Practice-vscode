
document.addEventListener("DOMContentLoaded",()=>{
    // console.log("crud function working prperly")
    const addbtn=document.querySelector("#new-stud-btn")
    const studentsform=document.querySelector(".add-students-form")
    const studentlist=document.querySelector("#student-list")
    const card=async ()=>{
        const response= await fetch("http://localhost:3000/students");
        const data = await response.json();
        console.log(data)
        data.forEach(ele => {
            studentlist.innerHTML += `<div class="card card-header card-body  t-img container">
        <h5 class="card-title">${ele.name}</h5>
  <div class="card-body">
    <p class="card-text">
    <div>Capital: ${ele.class}</div>
    <div>Region: ${ele.country}</div>
    <div>Country Code: ${ele.image}</div>
    </p>
  </div>
</div>`
        });
        
    }
    card();
})
