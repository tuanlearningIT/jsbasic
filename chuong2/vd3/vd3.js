console.log('Hello world HTML')

let arrtop4 = ['Live', 'chelsea', 'Mu', 'Mancity']

let i = 0;
while(i < arrtop4.length){
    //if else conditiom
    // if(arrtop4[i].length === 2){
    // console.log('Top club:', i+1, arrtop4[i])
    // } else if(arrtop4[i].length === 4){
    //    console.log('Top club:', i+1, arrtop4[i])
    // }
    // else{
    //     console.log('Top club:', i+1, arrtop4[i])
    // }
    i++;
    if(arrtop4[i] === 'chelsea'){
        console.log('Found it: ', arrtop4[i])
        continue;
    }
    console.log('check i :', i )
}