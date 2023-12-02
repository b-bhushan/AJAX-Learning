console.log("Learning Ajax");
let fbtn =document.getElementById('fbtn');
fbtn.addEventListener('click',btnClickHandler);

function btnClickHandler(){
    console.log("Bhushan");
    const xhr = new XMLHttpRequest();

    //Open the Object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json');
    //This is optional  x-www-form-urlencoded
    xhr.onprogress = function(){
        console.log("On Progress");
    }
    // xhr.onreadystatechange=function(){
    //     console.log('Raedy state Change !!',xhr.readyState)
    // }
    xhr.onload = function(){
        if(this.status ===200)
        {
            console.log(this.responseText);
        }
        else{
            console.log("Error occured")
        }
        
    }
    // xhr.send();
    params=`{"name":"test","salary":"123","age":"23"}`
    xhr.send(params);


}