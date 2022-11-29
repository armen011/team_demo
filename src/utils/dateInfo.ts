
const months:string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const daysInMonth = (month:number, year:number) =>{

    return (new Date(year, month, 0).getDate());
   
}

const arrayInDays = (month:number  , year:number): string[] =>{
    let array = []
    for(let i=1;i<=daysInMonth(month,year);i++){
        array.push(`${i}`)
    }
    return array

}


const years = ():string[]=>{
    let year = (new Date()).getFullYear()
    let array = []
    for(let i =year-100;i<=year;i++){
        array.push(`${i}`)
    }
    return array

}

const date = {
    months,
    daysInMonth,
    arrayInDays,
    years
}

export default date