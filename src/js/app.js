
let btnClear = document.querySelector("#id-clear");
let btnSubmit = document.querySelector("#sub-id");
let p = document.querySelector("#dom-msg");


btnClear.addEventListener("click",function () {

    p.textContent= "Result"
    document.querySelector("#input-id").value = ""
    
})



btnSubmit.addEventListener("click",function () {


    let num = document.querySelector("#input-id").value
    let arr = []
    
    for (let i = num; i > 0; i--) {
        
        let result = num / i
        

if (result%2==0) {

    arr.push(result)

}


        
    }
if (arr.length>2) {

     p.textContent= `${num} eded sade Deyil`
    
}else{
    p.textContent= `${num} eded sade Ededdir`
}
})
