type stringOrnumber = string|number
type stringOrnumberArray= (string|number)[]
type Guitarist={
    name?:string,
    active:boolean,
    albums:stringOrnumberArray
}

const add =(a:number,b:number)=>{return a+b}
const logMsg=(message:any)=>{console.log(message);}
logMsg(add(2,1))