import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable()
export class PhoneValidator {
    constructor() { }
    emailValid(control: FormControl){
        return new Promise(resolve => {
          const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
          if (!emailPattern.test(control.value)){
            resolve({ InvalidEmail : true });
          }
          resolve(null);
          });
        }
    
        nameValid(control: FormControl){
            return new Promise(resolve =>{
              const pattern = /[0-9]/;
              if (pattern.test(control.value)) {
                resolve({ InvalidName : true });
              }
              resolve(null);
          });
        }
    
      
    
    }