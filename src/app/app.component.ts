import { Component } from '@angular/core';
import { FileuploadService } from './fileupload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ugamAssingment';
  constructor(private fileUploadService: FileuploadService){}
  readFile(inputValue) {
    console.log(inputValue);
    let fileData = inputValue.target;
    console.log(fileData);
    
    this.fileUploadService.readFile(inputValue).subscribe(repos => {
  		console.log(repos);
  	});

    
    
  }
}
