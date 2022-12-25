
const months:string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const daysInMonth = (month:number, year:number) =>{

    return (new Date(year, month, 0).getDate());
   
}

const arrayInDays = (month:number  , year:number): string[] =>{
    const array = []
    for(let i=1;i<=daysInMonth(month,year);i++){
        array.push(`${i}`)
    }
    return array

}


const years = ():string[]=>{
    const year = (new Date()).getFullYear()
    const array = []
    for(let i =year-100;i<=year;i++){
        array.push(`${i}`)
    }
    return array

}

const fullDate = (days:number|string,months:number|string,year:number|string):string=>{
    const day = +days>9? `${days}`:0+`${days}`
    const month = +months>9? `${months}`:0+`${months}`

    return `${day}/${month}/${year}`

}

const date = {
    months,
    daysInMonth,
    arrayInDays,
    years,
    fullDate
}

export default date