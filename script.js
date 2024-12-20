const btnClicked=(e)=>{
    console.log(e.target.innerText)
    console.log("hello all")
    inp.value+=e.target.innerText
}

const getResult=()=>{
    try{
        const result=eval(inp.value)
        inp.value=result
    }
    catch{
        inp.value="invalid Expression!!"
    }
}

const backSpace=()=>{
    inp.value=inp.value.slice(0,(inp.value.lenght-1))
}

const clearInp=()=>{
    inp.value=""
}