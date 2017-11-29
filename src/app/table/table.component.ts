import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
var boards: any;
const url = 'http://diplom-invoice.ru/iskra//wp/wp-content/themes/iskra/sorttable.js';

const scr = 'http://diplom-invoice.ru/iskra/fixme.js';
const tell = 'http://a-t-tech.ru/mask.js';
const mask = 'http://a-t-tech.ru/jquery.maskedinput.js';
// const scr = 'http://diplom-invoice.ru/iskra/script.js';
// var posts: any;
let posts=[];
var title ;
var ttl;
var selectedPost0;
var selectedPost1;
var selectedPost2;
var selectedPost3;
var selectedPost4;
var selectedPost5;
var selectedPost6;
var selectedPost7;
var selectedPost8;
var selectedPost9;
var selectedPost10;
var selectedPost11;
var selectedPost12;
var selectedPost13;
var selectedPost14;
var selectedPost15;
var selectedPost16;
var selectedPost17;
// var count0;
// var count1;
// var count2;
// var count3;
// var count4;
// var count5;
// var count6;
// var count7;
// var count8;
// var count9;
// var count10;
// var count11;
// var count12;
// var count13;
// var count14;
// var count15;
// var count16;
// var count17;
export class Post {
  chan: any;
  info: any;
  io: any;
  name: string;
  stock: string;
  uo: any;

}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
	    loadAPI: Promise<any>;

    public loadScript() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
    public loadMore() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = scr;
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
    public loadMask() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = mask;
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('footer')[0].appendChild(node);
    }
     public loadTel() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = tell;
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('footer')[0].appendChild(node);
    }
    
value;
value1;
value2;
value3;
value4;
value5;
name = '';
idd = '';
posts: Post[] =[];
public count0=0;
public count1=0;
public count2=0;
public count3=0;
public count4=0;
public count5=0;
public count6=0;
public count7=0;
public count8=0;
public count9=0;
public count10=0;
public count11=0;
public count12=0;
public count13=0;
public count14=0;
public count15=0;
public count16=0;
public count17=0;
public namae;
public comm;
public comp;
public email;
public tel;
public confirm0;
public confirm1;
public confirm2;
public confirm3;
public confirm4;
public confirm5;
public confirm6;
public confirm7;
public confirm8;
public confirm9;
public confirm10;
public confirm11;
public confirm12;
public confirm13;
public confirm14;
public confirm15;
public confirm16;
public confirm17;
selectedPost: Post[];
selectedPost0: Post[];
selectedPost1: Post[];
selectedPost2: Post[];
selectedPost3: Post[];
selectedPost4: Post[];
selectedPost5: Post[];
selectedPost6: Post[];
selectedPost7: Post[];
selectedPost8: Post[];
selectedPost9: Post[];
selectedPost10: Post[];
selectedPost11: Post[];
selectedPost12: Post[];
selectedPost13: Post[];
selectedPost14: Post[];
selectedPost15: Post[];
selectedPost16: Post[];
selectedPost17: Post[];
// selectedPost18: Post[];
confirmDelete0() {
	this.confirm0 = 1;
}
confirmDelete1() {
	this.confirm1 = 1;
}
confirmDelete2() {
	this.confirm2 = 1;
}
confirmDelete3() {
	this.confirm3 = 1;
}
confirmDelete4() {
	this.confirm4 = 1;
}
confirmDelete5() {
	this.confirm5 = 1;
}
confirmDelete6() {
	this.confirm6 = 1;
}
confirmDelete7() {
	this.confirm7 = 1;
}
confirmDelete8() {
	this.confirm8 = 1;
}
confirmDelete9() {
	this.confirm9 = 1;
}
confirmDelete10() {
	this.confirm10 = 1;
}
confirmDelete11() {
	this.confirm11 = 1;
}
confirmDelete12() {
	this.confirm12 = 1;
}
confirmDelete13() {
	this.confirm13 = 1;
}
confirmDelete14() {
	this.confirm14 = 1;
}
confirmDelete15() {
	this.confirm15 = 1;
}
confirmDelete16() {
	this.confirm16 = 1;
}
confirmDelete17() {
	this.confirm17 = 1;
}
deletePost0() {
	this.count0 = 0;
	this.selectedPost0 = undefined;
	this.confirm0 = 0;
}
deletePost1() {
	this.count1 = 0;
	this.selectedPost1 = undefined;
	this.confirm1 = 0;

}
deletePost2() {
	this.count2 = 0;
	this.selectedPost2 = undefined;
	this.confirm2 = 0;

}
deletePost3() {
	this.count3 = 0;
	this.selectedPost3 = undefined;
	this.confirm3 = 0;
}
deletePost4() {
	this.count4 = 0;
	this.selectedPost4 = undefined;
this.confirm4 = 0;
}
deletePost5() {
	this.count5 = 0;
	this.selectedPost5 = undefined;
this.confirm5 = 0;
}
deletePost6() {
	this.count6 = 0;
	this.selectedPost6 = undefined;
this.confirm6 = 0;
}
deletePost7() {
	this.count7 = 0;
	this.selectedPost7 = undefined;
this.confirm7 = 0;
}
deletePost8() {
	this.count8 = 0;
	this.selectedPost8 = undefined;
this.confirm8 = 0;
}
deletePost9() {
	this.count9 = 0;
	this.selectedPost9 = undefined;
this.confirm9 = 0;
}
deletePost10() {
	this.count10 = 0;
	this.selectedPost10 = undefined;
this.confirm10 = 0;
}
deletePost11() {
	this.count11 = 0;
	this.selectedPost11 = undefined;
this.confirm11 = 0;
}
deletePost12() {
	this.count12 = 0;
	this.selectedPost12 = undefined;
this.confirm12 = 0;
}
deletePost13() {
	this.count13 = 0;
	this.selectedPost13 = undefined;
this.confirm13 = 0;
}
deletePost14() {
	this.count14 = 0;
	this.selectedPost14 = undefined;
this.confirm14 = 0;
}
deletePost15() {
	this.count15 = 0;
	this.selectedPost15 = undefined;
this.confirm15 = 0;
}
deletePost16() {
	this.count16 = 0;
	this.selectedPost16 = undefined;
this.confirm16 = 0;
}
deletePost17() {
	this.count17 = 0;
	this.selectedPost17 = undefined;
this.confirm17 = 0;
}
onNamae(value) { this.value = value;
  	this.namae = value;
   }
 onComm(value) { this.value = value;
  	this.comm = value;
   }
 onComp(value) { this.value = value;
  	this.comp = value;
   }
 onEmail(value) { this.value = value;
  	this.email = value;
   }
  onTel(value) { this.value = value;
  	this.tel = value;
   }
  onEnter0(value: number, name: string) { this.value = value;
  	this.count0 = value;
   }
     onEnter1(value: number, name: string) { this.value = value;
  	this.count1 = value;
   }
     onEnter2(value: number, name: string) { this.value = value;
  	this.count2 = value;
   }
     onEnter3(value: number, name: string) { this.value = value;
  	this.count3 = value;
   }
     onEnter4(value: number, name: string) { this.value = value;
  	this.count4 = value;
   }
     onEnter5(value: number, name: string) { this.value = value;
  	this.count5 = value;
   }
     onEnter6(value: number, name: string) { this.value = value;
  	this.count6 = value;
   }
     onEnter7(value: number, name: string) { this.value = value;
  	this.count7 = value;
   }
     onEnter8(value: number, name: string) { this.value = value;
  	this.count8 = value;
   }
     onEnter9(value: number, name: string) { this.value = value;
  	this.count9 = value;
   }
     onEnter10(value: number, name: string) { this.value = value;
  	this.count10 = value;
   }
     onEnter11(value: number, name: string) { this.value = value;
  	this.count11 = value;
   }
     onEnter12(value: number, name: string) { this.value = value;
  	this.count0 = value;
   }
     onEnter13(value: number, name: string) { this.value = value;
  	this.count13 = value;
   }
     onEnter14(value: number, name: string) { this.value = value;
  	this.count14 = value;
   }
     onEnter15(value: number, name: string) { this.value = value;
  	this.count15 = value;
   }
     onEnter16(value: number, name: string) { this.value = value;
  	this.count16 = value;
   }
     onEnter17(value: number, name: string) { this.value = value;
  	this.count17 = value;
   }

//    pushMe(idd: string, value: number, post: Post[], $event) { 
//    	this.idd = name;
//    	this.value;
//   	// this.name = name;
//   	value = this.value + 1;
// console.log(idd + " " + value);
// this.selectedPost = post;
//    }
// title = "asdasd";

public count: number = 0;
getPosts(): Post[] {
    return posts;
  }
onCount0(post: Post[]) : void {
	this.count0 ++;
	if(this.count0 > 0){
	  this.selectedPost0 = post;
	} 
	console.log(this.selectedPost0);
}
onCount1(post: Post[]) : void {
	this.count1 ++;
	if(this.count1 > 0){
	  this.selectedPost1 = post;
	} 
	// console.log(this.count1);
}
onCount2(post: Post[]) : void {
	this.count2 ++;
	if(this.count2 > 0){
	  this.selectedPost2 = post;
	} 
	// console.log(this.count0);
}
onCount3(post: Post[]) : void {
	this.count3 ++;
	if(this.count3 > 0){
	  this.selectedPost3 = post;
	} 
	// console.log(this.count0);
}
onCount4(post: Post[]) : void {
	this.count4 ++;
	if(this.count4 > 0){
	  this.selectedPost4 = post;
	} 
	// console.log(this.count0);
}
onCount5(post: Post[]) : void {
	this.count5 ++;
	if(this.count5 > 0){
	  this.selectedPost5 = post;
	} 
	// console.log(this.count1);
}
onCount6(post: Post[]) : void {
	this.count6 ++;
	if(this.count6 > 0){
	  this.selectedPost6 = post;
	} 
	// console.log(this.count0);
}
onCount7(post: Post[]) : void {
	this.count7 ++;
	if(this.count7 > 0){
	  this.selectedPost7 = post;
	} 
	// console.log(this.count0);
}
onCount8(post: Post[]) : void {
	this.count8 = this.count8+1;
	if(this.count8 > 0){
	  this.selectedPost8 = post;
	} 
	// console.log(this.count0);
}
onCount9(post: Post[]) : void {
	this.count9 ++;
	if(this.count9 > 0){
	  this.selectedPost9 = post;
	} 
	// console.log(this.count1);
}
onCount10(post: Post[]) : void {
	this.count10 ++;
	if(this.count10 > 0){
	  this.selectedPost10 = post;
	} 
	// console.log(this.count0);
}
onCount11(post: Post[]) : void {
	this.count11 ++;
	if(this.count11 > 0){
	  this.selectedPost11 = post;
	} 
	// console.log(this.count0);
}
onCount12(post: Post[]) : void {
	this.count12++;
	if(this.count12 > 0){
	  this.selectedPost12 = post;
	} 
	// console.log(this.count0);
}
onCount13(post: Post[]) : void {
	this.count13 ++;
	if(this.count13 > 0){
	  this.selectedPost13 = post;
	} 
	// console.log(this.count1);
}
onCount14(post: Post[]) : void {
	this.count14++;
	if(this.count14 > 0){
	  this.selectedPost14 = post;
	} 
	// console.log(this.count0);
}
onCount15(post: Post[]) : void {
	this.count15 ++;
	if(this.count15 > 0){
	  this.selectedPost15 = post;
	} 
	// console.log(this.count0);
}
onCount16(post: Post[]) : void {
	this.count16++;
	if(this.count16 > 0){
	  this.selectedPost16 = post;
	} 
	// console.log(this.count0);
}
onCount17(post: Post[]) : void {
	this.count17 ++;
	if(this.count17 > 0){
	  this.selectedPost17 = post;
	} 
	// console.log(this.count0);
}
onDecreaseSel0(post: Post[]) : void {
	this.count0 = this.count0-1;
	if(this.count0 < 0){
	  this.count0 =0;
	} if(this.selectedPost0 == post) {
		if (this.count0 == 0) {
			this.count0 = 1;
		}
	} else {
		if (this.count0 == 0) {
			this.selectedPost0 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel1(post: Post[]) : void {
	this.count1 = this.count1-1;
	if(this.count1 < 0){
	  this.count1 =0;
	} 
	if(this.selectedPost1 == post) {
		if (this.count1 == 0) {
			this.count1 = 1;
		}
	} else {
		if (this.count1 == 0) {
			this.selectedPost1 = undefined;
		}
	}

}
onDecreaseSel2(post: Post[]) : void {
	this.count2 = this.count2-1;
	if(this.count2 < 0){
	  this.count2 =0;
	} if(this.selectedPost2 == post) {
		if (this.count2 == 0) {
			this.count2 = 1;
		}
	} else {
		if (this.count2 == 0) {
			this.selectedPost2 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel3(post: Post[]) : void {
	this.count3 = this.count3-1;
	if(this.count3 < 0){
	  this.count3 =0;
	} 
	if(this.selectedPost3 == post) {
		if (this.count3 == 0) {
			this.count3 = 1;
		}
	} else {
		if (this.count3 == 0) {
			this.selectedPost3 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel4(post: Post[]) : void {
	this.count4 = this.count4-1;
	if(this.count4 < 0){
	  this.count4 =0;
	} 
	if(this.selectedPost4 == post) {
		if (this.count4 == 0) {
			this.count4 = 1;
		}
	} else {
		if (this.count4 == 0) {
			this.selectedPost4 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel5(post: Post[]) : void {
	this.count5 = this.count5-1;
	if(this.count5 < 0){
	  this.count5 =0;
	} if(this.selectedPost5 == post) {
		if (this.count5 == 0) {
			this.count5 = 1;
		}
	} else {
		if (this.count5 == 0) {
			this.selectedPost1 = undefined;
		}
	}
	// console.log(this.count1);
}
onDecreaseSel6(post: Post[]) : void {
	this.count6 = this.count6-1;
	if(this.count6 < 0){
	  this.count6 =0;
	} if(this.selectedPost6 == post) {
		if (this.count6 == 0) {
			this.count6 = 1;
		}
	} else {
		if (this.count6 == 0) {
			this.selectedPost6 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel7(post: Post[]) : void {
	this.count7 = this.count7-1;
	if(this.count7 < 0){
	  this.count7 =0;
	} if(this.selectedPost7 == post) {
		if (this.count7 == 0) {
			this.count7 = 1;
		}
	} else {
		if (this.count7 == 0) {
			this.selectedPost7 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel8(post: Post[]) : void {
	this.count8 = this.count8-1;
	if(this.count8 < 0){
	  this.count8 =0;
	} if(this.selectedPost8 == post) {
		if (this.count8 == 0) {
			this.count8 = 1;
		}
	} else {
		if (this.count8 == 0) {
			this.selectedPost8 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel9(post: Post[]) : void {
	this.count9 = this.count9-1;
	if(this.count9 < 0){
	  this.count9 =0;
	} if(this.selectedPost9 == post) {
		if (this.count9 == 0) {
			this.count9 = 1;
		}
	} else {
		if (this.count9 == 0) {
			this.selectedPost9 = undefined;
		}
	}
	// console.log(this.count1);
}
onDecreaseSel10(post: Post[]) : void {
	this.count10 = this.count10-1;
	if(this.count10 < 0){
	  this.count10 =0;
	} if(this.selectedPost10 == post) {
		if (this.count10 == 0) {
			this.count10 = 1;
		}
	} else {
		if (this.count10 == 0) {
			this.selectedPost10 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel11(post: Post[]) : void {
	this.count11 = this.count11-1;
	if(this.count11 < 0){
	  this.count11 =0;
	} if(this.selectedPost11 == post) {
		if (this.count11 == 0) {
			this.count11 = 1;
		}
	} else {
		if (this.count11 == 0) {
			this.selectedPost11 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel12(post: Post[]) : void {
	this.count12 = this.count12-1;
	if(this.count12 < 0){
	  this.count12 =0;
	} if(this.selectedPost12 == post) {
		if (this.count12 == 0) {
			this.count12 = 1;
		}
	} else {
		if (this.count12 == 0) {
			this.selectedPost12 = undefined;
		}
	}
}
onDecreaseSel13(post: Post[]) : void {
	this.count13 = this.count13-1;
	if(this.count13 < 0){
	  this.count13 =0;
	} if(this.selectedPost13 == post) {
		if (this.count13 == 0) {
			this.count13 = 1;
		}
	} else {
		if (this.count13 == 0) {
			this.selectedPost13 = undefined;
		}
	}
	// console.log(this.count1);
}
onDecreaseSel14(post: Post[]) : void {
	this.count14 = this.count14-1;
	if(this.count14 < 0){
	  this.count14 =0;
	} if(this.selectedPost14 == post) {
		if (this.count14 == 0) {
			this.count14 = 1;
		}
	} else {
		if (this.count14 == 0) {
			this.selectedPost14 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel15(post: Post[]) : void {
	this.count15 = this.count15-1;
	if(this.count15 < 0){
	  this.count15 =0;
	} if(this.selectedPost15 == post) {
		if (this.count15 == 0) {
			this.count15 = 1;
		}
	} else {
		if (this.count15 == 0) {
			this.selectedPost15 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel16(post: Post[]) : void {
	this.count16 = this.count16-1;
	if(this.count16 < 0){
	  this.count16 =0;
	} if(this.selectedPost16 == post) {
		if (this.count16 == 0) {
			this.count16 = 1;
		}
	} else {
		if (this.count16 == 0) {
			this.selectedPost16 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecreaseSel17(post: Post[]) : void {
	this.count17 = this.count17-1;
	if(this.count17 < 0){
	  this.count17 =0;
	} if(this.selectedPost17 == post) {
		if (this.count17 == 0) {
			this.count17 = 1;
		}
	} else {
		if (this.count17 == 0) {
			this.selectedPost17 = undefined;
		}
	}
	// console.log(this.count0);
}
onDecrease0(post: Post[]) : void {
	this.count0 = this.count0-1;
	if(this.count0 < 0){
	  this.count0 =0;
	} if (this.count0 == 0) {
		this.selectedPost0 = undefined;
	}
	// console.log(this.count0);
}
onDecrease1(post: Post[]) : void {
	this.count1 = this.count1-1;
	if(this.count1 < 0){
	  this.count1 =0;
	} 
	if(this.selectedPost1 == post) {
		if (this.count1 == 0) {
			this.count1 = 1;
		}
	} else {
		if (this.count1 == 0) {
			this.selectedPost1 = undefined;
		}
	}

}
onDecrease2(post: Post[]) : void {
	this.count2 = this.count2-1;
	if(this.count2 < 0){
	  this.count2 =0;
	} if (this.count2 == 0) {
		this.selectedPost2 = undefined;
	}
	// console.log(this.count0);
}
onDecrease3(post: Post[]) : void {
	this.count3 = this.count3-1;
	if(this.count3 < 0){
	  this.count3 =0;
	} if (this.count3 == 0) {
		this.selectedPost3 = undefined;
	}
	// console.log(this.count0);
}
onDecrease4(post: Post[]) : void {
	this.count4 = this.count4-1;
	if(this.count4 < 0){
	  this.count4 =0;
	} if (this.count4 == 0) {
		this.selectedPost4 = undefined;
	}
	// console.log(this.count0);
}
onDecrease5(post: Post[]) : void {
	this.count5 = this.count5-1;
	if(this.count5 < 0){
	  this.count5 =0;
	} if (this.count5 == 0) {
		this.selectedPost5 = undefined;
	}
	// console.log(this.count1);
}
onDecrease6(post: Post[]) : void {
	this.count6 = this.count6-1;
	if(this.count6 < 0){
	  this.count6 =0;
	} if (this.count6 == 0) {
		this.selectedPost6 = undefined;
	}
	// console.log(this.count0);
}
onDecrease7(post: Post[]) : void {
	this.count7 = this.count7-1;
	if(this.count7 < 0){
	  this.count7 =0;
	} if (this.count7 == 0) {
		this.selectedPost7 = undefined;
	}
	// console.log(this.count0);
}
onDecrease8(post: Post[]) : void {
	this.count8 = this.count8-1;
	if(this.count8 < 0){
	  this.count8 =0;
	} if (this.count8 == 0) {
		this.selectedPost8 = undefined;
	}
	// console.log(this.count0);
}
onDecrease9(post: Post[]) : void {
	this.count9 = this.count9-1;
	if(this.count9 < 0){
	  this.count9 =0;
	} if (this.count9 == 0) {
		this.selectedPost9 = undefined;
	}
	// console.log(this.count1);
}
onDecrease10(post: Post[]) : void {
	this.count10 = this.count10-1;
	if(this.count10 < 0){
	  this.count10 =0;
	} if (this.count10 == 0) {
		this.selectedPost10 = undefined;
	}
	// console.log(this.count0);
}
onDecrease11(post: Post[]) : void {
	this.count11 = this.count11-1;
	if(this.count11 < 0){
	  this.count11 =0;
	} if (this.count11 == 0) {
		this.selectedPost11 = undefined;
	} 
	// console.log(this.count0);
}
onDecrease12(post: Post[]) : void {
	this.count12 = this.count12-1;
	if(this.count12 < 0){
	  this.count12 =0;
	} if (this.count12 == 0) {
		this.selectedPost12 = undefined;
	}
}
onDecrease13(post: Post[]) : void {
	this.count13 = this.count13-1;
	if(this.count13 < 0){
	  this.count13 =0;
	} if (this.count13 == 0) {
		this.selectedPost13 = undefined;
	}
	// console.log(this.count1);
}
onDecrease14(post: Post[]) : void {
	this.count14 = this.count14-1;
	if(this.count14 < 0){
	  this.count14 =0;
	} if (this.count14 == 0) {
		this.selectedPost14 = undefined;
	}
	// console.log(this.count0);
}
onDecrease15(post: Post[]) : void {
	this.count15 = this.count15-1;
	if(this.count15 < 0){
	  this.count15 =0;
	} if (this.count15 == 0) {
		this.selectedPost15 = undefined;
	}
	// console.log(this.count0);
}
onDecrease16(post: Post[]) : void {
	this.count16 = this.count16-1;
	if(this.count16 < 0){
	  this.count16 =0;
	} if (this.count16 == 0) {
		this.selectedPost16 = undefined;
	}
	// console.log(this.count0);
}
onDecrease17(post: Post[]) : void {
	this.count17 = this.count17-1;
	if(this.count17 < 0){
	  this.count17 =0;
	} if (this.count17 == 0) {
		this.selectedPost17 = undefined;
	}
	// console.log(this.count0);
}
onDecrease(post: Post[]): void {
	// this.count = 0;
	this.count = this.count-1;
	if (this.count < 0) {
		this.count =0;
	} if (this.count == 0) {
		this.selectedPost = undefined;
	}
	// console.log(this.count);
}

// posts: Post[] = [];
	result:any;
  constructor(private http:Http) { 
http.get("http://diplom-invoice.ru/iskra/wp/wp-json/wp/v2/table").subscribe(response => {
     boards = response.json();
     var board = boards[0];
     var row = board.acf.row[0];
     // console.log(board.acf.row[0]);
     // postclass = new Post[];
     for (var i = board.acf.row.length - 1; i >= 0; i--) {
     	// console.log(board.acf.row[i]);
     	this.posts[i] ={
                 chan: board.acf.row[i].chan,
                 info: board.acf.row[i].info,
                 io: board.acf.row[i].io,
                 name: board.acf.row[i].name,
                 stock: board.acf.row[i].stock,
                 uo: board.acf.row[i].uo,
               };
        // console.log(this.posts[0]);
     }
     
     // // posts = POSTS;
     // let postss = posts[0];
     // let name = posts[0].name;
     // console.log(posts[0].name);
     // this.result = posts[0].name;
     // return 
  });


  }
  onSubmit() {
  }
  ngAfterViewInit() {
this.loadAPI = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript();
            this.loadMore();

            this.loadMask();
            this.loadTel();
        });
  }
  // console.log(title);
}
