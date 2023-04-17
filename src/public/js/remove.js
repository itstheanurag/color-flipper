const btn=document.getElementById("btn");
const input=document.querySelector(".hidden")
const dropArea=document.querySelector(".container")
const uploadArea=document.querySelector(".upload-image")
console.log(btn)

btn.addEventListener('click',()=>{
    input.click();
})

let file;

dropArea.addEventListener('dragover',(e)=>{
    console.log("dragover")
    e.preventDefault();
})

dropArea.addEventListener('dragleave',()=>{
    console.log("dragleave")
})

dropArea.addEventListener('drop',(e)=>{
    e.preventDefault();
    console.log("droped")
     
     file=e.dataTransfer.files[0];
     filetype=file.type
    console.log(filetype);
   let filetypeArr=['image/jpeg','image/jpg','image/png']
    if(filetypeArr.includes(filetype)){
        let fileReader=new FileReader();
        console.log(fileReader)
        fileReader.onload=()=>{
            let fileURL=fileReader.result;
             let imageTag=`<img src="${fileURL}">`
             uploadArea.innerHTML=imageTag
        }
        fileReader.readAsDataURL(file)
    }
    else{
        alert('this file is not a image')
    }
  
})

 