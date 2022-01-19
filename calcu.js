const numeros = document.querySelectorAll(".numeross")
const pantalla = document.querySelector(".numeros")
const operacion = document.querySelectorAll(".operacion")
const igual = document.querySelector(".igual")
const pantalla2 = document.querySelector(".numerosPosteriores")
const resultado = document.querySelector(".resultado")
const punto = document.querySelector(".punto")
const aclarar = document.querySelector(".aclarar")
let op = false
let numInicial = []
let numPosterior = []
let ultimaOperacion
let puntuacion = false
function mostrar(){
   
    numeros.forEach(num=>{
        num.addEventListener("click", function(e){
            if(resultado.firstChild){
                resultado.removeChild(resultado.firstChild)
                 numInicial = []
                 numPosterior = []
                }
            
            pantalla.innerHTML += e.target.textContent

        })
    })

}
punto.addEventListener("click", (e)=>{
    if(puntuacion === true ||  pantalla.innerHTML === "" && resultado.firstChild){
        return
    }
    pantalla.innerHTML += e.target.textContent
    puntuacion = true
})


mostrar()
function mostrarOperacion(){
    operacion.forEach(oper=>{
        oper.addEventListener("click", function(e){
            
            if(op === true){
                return
            }else if(op === false && resultado.firstChild){
                console.log(resultado.innerHTML)
                numPosterior.pop()
            
                pantalla2.innerHTML = parseFloat(numInicial[0])
                resultado.removeChild(resultado.firstChild)
            }
            numInicial.push(pantalla.innerHTML)
            ultimaOperacion = e.target.textContent
            pantalla.innerHTML += ultimaOperacion
            op = true
            pantalla2.innerHTML = `${parseFloat(numInicial[0])} ${e.target.textContent}`  
            pantalla.innerHTML= ""
            puntuacion = false
        })
    })
}

igual.addEventListener("click", (e)=>{
    if(pantalla2.firstChild){
        numPosterior.push(pantalla.innerHTML)
        }
        
        operacionMatematica( parseFloat(numInicial), parseFloat(numPosterior))
        pantalla2.innerHTML = ""
        pantalla.innerHTML = ""
        op = false
        numInicial = []
        numInicial.push(resultado.innerHTML)
})


mostrarOperacion()

function operacionMatematica( num1, num2){
    if(ultimaOperacion === "+"){
        resultado.innerHTML = num1 + num2
    } else if(ultimaOperacion === "-"){
        resultado.innerHTML = num1 - num2
    } else if(ultimaOperacion === "x"){
        resultado.innerHTML = num1 * num2
    } else if(ultimaOperacion === "/"){
        resultado.innerHTML = num1 / num2
    }
}

aclarar.addEventListener("click", ()=>{
    numInicial = []
    numPosterior = []
    pantalla.innerHTML= ""
    pantalla2.innerHTML = ""
    resultado.innerHTML = ""
})