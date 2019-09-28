import { Directive, ElementRef, HostListener } from "@angular/core";
import { concat } from 'rxjs';



@Directive({

selector: '[upperCase]'

})

export class CustomDirectives{

    // add:any = "-";

    constructor(private element:ElementRef){
 
    }

@HostListener('keyup')
keytyped(){
        var value = <string> this.element.nativeElement.value;
        var upperValue = value.toUpperCase();
        this.element.nativeElement.value = upperValue;

    // var value = <string> this.element.nativeElement.value;
    // if(value.length%4===0){
    //     this.element.nativeElement.value = value + "-"
    // }
    // console.log(value.length, );
    
}


}