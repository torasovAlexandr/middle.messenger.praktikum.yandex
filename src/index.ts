import  * as Handlebars from 'handlebars'
import {asdad} from './templates'


let templatesa = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
let template = Handlebars.compile(asdad);
// execute the compiled template and print the output to the console
let a=template({ doesWhat: "rocks!" });
console.log(a);
const c= document.querySelector('#entry')
c.append(a)