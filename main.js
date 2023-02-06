	let a=Number(prompt("Enter any number")),c=0;
	
	while(a>0){
	     b=a%10;
		 c=c*10+b;
		 a=(a-b)/10;
		 
		 }
 document.write(`Reverse of your number is ${c}`);