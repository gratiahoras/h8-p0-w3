var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 
//var join = input.join()
function dataHandling2(input) {
    input.splice(0,5,'0001','Roman Alamsyah Elsharawy','Provinsi Bandar Lampung','21/05/1989','Pria','SMA INTERNATIONAL')
    console.log(input);
    
    input.splice(3,1,'21-05-1989')
    var pisah = input[3].split('-')
    console.log(pisah);
    
    
    switch (pisah[1]) {
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juny');
            break;
        case '07':
            console.log('July');
            break;
        case '08':
            console.log('agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
        default:
            console.log('Pilih bulan 1 sampai dengan 12');
            
    }
    var sort = pisah.join('-')
    var balik = pisah.sort(function(value1,value2) {return value2-value1})
    //var balik2 = balik.sort(function(value1,value2) {return value1<value2})
    console.log(balik);
    console.log(sort);
    var slice = input[1].slice(0,14)
    console.log(slice);
    console.log('/');
    
    
}

console.log(dataHandling2(input));

