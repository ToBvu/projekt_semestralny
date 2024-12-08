przycisk_stoper = document.querySelectorAll('.button-stoper')
setnik = document.querySelector('#setne')
sekundnik = document.querySelector('#sekundy')
minutnik = document.querySelector('#minuty')

function dodaj(){

    let setne_sekundy = parseInt(setnik.textContent)

    setne_sekundy += 1
    
    if (setne_sekundy < 10){
        setne_sekundy = '0' + setne_sekundy.toString()
    }
    
    setnik.textContent = setne_sekundy

    let sekundy = parseInt(sekundnik.textContent)
    
    if (setne_sekundy == 100){
        setnik.textContent = '00'
        sekundy += 1
    }
    if (sekundy < 10){
        sekundy = '0' + sekundy.toString()
    }
    sekundnik.textContent = sekundy
    
    let minuty = parseInt(minutnik.textContent)
    
    if (sekundy == 60){
        sekundnik.textContent = '00'
        minuty += 1
    }
    if (minuty < 10){
        minuty = '0' + minuty.toString()
    }
    minutnik.textContent = minuty
    
   
    stoper_start()
}

function stoper_start(){
    t = setTimeout(dodaj,10)
    document.querySelector('#stoper-start').removeEventListener('click', stoper_start)
}

function stoper_stop(){
    clearTimeout(t)
    document.querySelector('#stoper-start').addEventListener('click', stoper_start)
}

function stoper_zeruj(){
    stoper_stop()
    setnik.textContent = '00'
    sekundnik.textContent = '00'
    minutnik.textContent = '00'
}

document.querySelector('#stoper-start').addEventListener('click', stoper_start)
document.querySelector('#stoper-stop').addEventListener('click',stoper_stop)
document.querySelector('#stoper-zeruj').addEventListener('click',stoper_zeruj)