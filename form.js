
var form1=document.getElementById('form')

// form.addEventListener('submit',function(event){
//     event.preventDefault()

//     var jobid = document.getElementById('jobid').value
//     console.log(jobid)

//     var positionName = document.getElementById('position').value
//     console.log(positionName);

//     var expectedSalary = document.getElementById('salary').value
//     console.log(expectedSalary);

//     var active = document.getElementById('active').value
//     console.log(active);

//     var des = document.getElementById('description').value
//     console.log(des);

// })

form1.addEventListener("submit",(e)=>{
    e.preventDefault()
    let formData = new FormData(form1);
    console.log(formData);
    
    fetch("https://tec-centric.com/api/jobpost/jobPost.php",{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        mode:"no-cors",
        body: formData
    })

    .then((response)=>{
        alert("file uploaded");
        return response.json();
    })

    .then((data)=>{
        console.log(data);
        alert("file uploaded")
    })
    
       
    .catch((error)=>{
        console.error(error);
    })
    
})
