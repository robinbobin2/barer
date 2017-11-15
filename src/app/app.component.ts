import { Component } from '@angular/core';
import { Http } from '@angular/http';
export class Contents {
  address:any;
  linkfour;
  linkone;
  linktfour;
  linkthree;
  linktone;
  linktthree;
  linkttwo;
  title_one;
  titletwo;
  phone;
  textfive;
  textone;
  texttwo;
  textthree;
  textfour;
  linkfive;
  linktfive;

}
var content = [];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	content: Contents[] = [];
  title = 'app';
  directory = 'http://diplom-invoice.ru/iskra/wp';
  constructor(private http:Http) {
		  http.get("http://diplom-invoice.ru/iskra/wp/wp-json/wp/v2/main_page").subscribe(response => {
		     var contents = response.json();
		     // var content = contents[0];
		     // var rowcont = content.acf.row[0];
		     this.content[0] = {
		     	address: contents[0].acf.address,
		     	linkfour: contents[0].acf.linkfour,
				  linkone: contents[0].acf.linkone,
				  linktfour: contents[0].acf.linktfour,
				  linkthree: contents[0].acf.linkthree,
				  linktone: contents[0].acf.linktone,
				  linktfive: contents[0].acf.linktfive,
				  linkfive: contents[0].acf.linkfive,
				  linktthree: contents[0].acf.linktthree,
				  linkttwo: contents[0].acf.linkttwo,
				  title_one: contents[0].acf.title_one,
				  titletwo: contents[0].acf.titletwo,
				  phone: contents[0].acf.phone,
				  textfive: contents[0].acf.textfive,
				  textone: contents[0].acf.textone,
				  texttwo: contents[0].acf.texttwo,
				  textthree: contents[0].acf.textthree,
				  textfour: contents[0].acf.textfour,
		     };
		    console.log(this.content);

		});
	}
}
