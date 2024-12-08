obrazki = document.querySelectorAll('img')
galeria = document.querySelector('.galeria')

for (i=0;i<obrazki.length;i++)
    obrazki[i].addEventListener('click', e => {
        if (e.currentTarget.style.width == '1920px'){
            e.currentTarget.style.width = '100%'
            e.currentTarget.style.height = '30vh'
        }  
        else{
            e.currentTarget.style.width = '1920px'
            e.currentTarget.style.height = '1080px'
        }
        
})