let yearSpan = document.querySelector("span") as HTMLSpanElement;
let currentYear = new Date().getFullYear();
yearSpan.setAttribute("datetime",(currentYear as unknown) as string) 
yearSpan.textContent=(currentYear as unknown)  as string