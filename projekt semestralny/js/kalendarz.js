container = document.getElementById('kalendarz')
tabela = document.querySelector('.tabela')


function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
}

function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).getDay());
      date.setDate(date.getDate() + 1);
    }
    for (let i=0;i<days.length; i++){
        if(days[i] == 0){
            days[i] = 7
        }
    }
    return days;
}

function stworz_tabele_kalendarza(tableClass) {
    let table = document.createElement('table')
    table.classList.add(tableClass)
    let tr = document.createElement('tr')
    const dni_tygodnia = ['Pon', 'Wto', 'Sro', 'Czw', 'Pia', 'Sob', 'Nie']
    for (let i in dni_tygodnia) {
        let th = document.createElement('th')        
        th.textContent = dni_tygodnia[i]
        tr.appendChild(th)
    }
    table.appendChild(tr)
    return table
}

function kalendarz(month, year){

    main_container = document.getElementById('kalendarz')
    tabela = stworz_tabele_kalendarza('tabela_kalendarz')

    miesiac = getDaysInMonth(month,year)
    licznik = 0
    
    for(let i = 1; i<=42; i++){
    
        if(i%7 == 1){
            var tr = document.createElement('tr')
        }
        td = document.createElement('td')
        td.classList.add('table-test'+i)
        tr.appendChild(td)
        if ((miesiac[licznik] == i%7) || (i%miesiac[licznik] == 0)){
            licznik++
            td.textContent = licznik
        }
        if(i%7 == 0){
            tabela.appendChild(tr)
        }
    }
    main_container.appendChild(tabela)
}


for(let i = 0; i<12; i++){
    kalendarz(i,2025)
}




























// for(let i=0;i<12;i++){
    
//     div = document.createElement('div')
//     p = document.createElement('p')    
    
//     div.appendChild(p)
//     container.appendChild(div)
//     p.textContent = getDaysInMonth(i,2025)
//     lista_miesiecy = []
//     lista_dni = []

//     lista_miesiecy.push(getDaysInMonth(i,2025))


//     for (j=0; j<(p.textContent.length +2)/2;j++){
//         lista_dni.push(j)

//     }
    
// }
// console.log(lista_dni)












    // lista_dni = []

    // for (j=0; j<(p.textContent.length + 2)/2; j++){

    //     if (getDaysInMonth(i,2025)[j] == 1){
    //         lista_dni.push('poniedziałek')
    //     }
    //     if(getDaysInMonth(i,2025)[j] == 2){
    //         lista_dni.push('wtorek')
    //     }
    //     if(getDaysInMonth(i,2025)[j] == 3){
    //         lista_dni.push('środa')
    //     }
    //     if(getDaysInMonth(i,2025)[j] == 4){
    //         lista_dni.push('czwartek')
    //     }
    //     if(getDaysInMonth(i,2025)[j] == 5){
    //         lista_dni.push('piątek')
    //     }
    //     if(getDaysInMonth(i,2025)[j] == 6){
    //         lista_dni.push('sobota')
    //     }
    //     if(getDaysInMonth(i,2025)[j] == 0){
    //         lista_dni.push('niedziela')
    //     }

    //     p.textContent = lista_dni

    // }


