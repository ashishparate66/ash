//Problem 2 : Given a character in lower case print the upper case character

let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower="abcdefghijklmnopqrstuvwxyz";

let str="m";

let bag="";

for(i=0;i<str.length;i++){
  
  for(j=0;j<upper.length;j++){
    
    if(str[i]==lower[j]){
      
      bag=bag+upper[j];
    }
  }
  }  console.log(bag);
  





 