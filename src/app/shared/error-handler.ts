import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandlerService implements ErrorHandler {
 
    constructor() { 
    }
   
    handleError(error:any) {
       console.error('An error occurred:', error.message);
    }
    
  }