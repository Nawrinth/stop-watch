const bstrt = document.querySelector('.start')
const bstop = document.querySelector('.stop')
const brest = document.querySelector('.reset')

let h=mi=s=ms=0,starttimer

bstrt.addEventListener('click',()=>{
    starttimer = setInterval(()=>{
        bstrt.classList.add("start-active")
        bstop.classList.remove("stop-active")
        ms++
        if (ms===100)
        {
            ms=0
            s++
        }
        if (s==60)
        {
            s=0
            mi++
        }   
        if (mi==60)
        {
            mi=0
            h++
        }         
        



        display()
    }
    , 10);
    
})
bstop.addEventListener('click',()=>{
    bstop.classList.add("stop-active")
    bstrt.classList.remove("start-active")
    clearInterval(starttimer)
    

})
brest.addEventListener('click',()=>{
    bstop.classList.remove("stop-active")
    bstrt.classList.remove("start-active")
    clearInterval(starttimer)

    h=mi=s=ms=0
    display()


})

function display()
{
    ph=h<10?"0"+h:h
    pmi=mi<10?"0"+mi:mi
    ps=s<10?"0"+s:s
    pms=ms<10?"0"+ms:ms
    document.querySelector("#hrs").innerHTML = ph;
    document.querySelector("#min").innerHTML = pmi;
    document.querySelector("#sec").innerHTML = ps;
    document.querySelector("#ms").innerHTML = pms;


}