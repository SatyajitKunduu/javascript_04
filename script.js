//LOOPS
//1.FOR LOOP
for(let i=1;i<=5;i++){
    console.log("satyajit");
}

//Q: calculate sum of 1 to 5
let sum=0;
for (let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("sum=",sum);
console.log("loop has ended");

// INFINITE LOOP:A LOOP THAT NEVER ENDED.
//🔴🔴🔴💀DONT RUN THIS IN YOUR COMPUTER💀🔴🔴🔴
    // for(let x=1;x>=0;x++){
    //     console.log("x=",x);
    // }

//  WHILE LOOP
let a=1;
while(a<=5){
    console.log("a=",a);
    a++;
}

//DO-WHILE LOOP
let val=20;
do{
    console.log("val=",val);
    val++;
}while(val<=10);

//FOR-OF LOOP
let str="apna";
for(let value of str){
    console.log("value=",value);
}

//FOR-IN LOOP
let student={
    name:"satyajit",
    age:18,
    cgpa:8.8,
    ispass:true,
};
for (let I in student){
    console.log("I=",I,"value=",student[I]);
}

//PRACTICE QUESTIONS
//Q-01: PRINT ALL EVEN NUMBERS FROM 0 TO 100.
for(let A=0;A<=100;A++){
    if(A%2===0)
        console.log("num=",A);
    
}

//Q-02: CREATE A GAME WHERE YOU START WITH ANY RANDOM GAME NUMBER.ASK THE USER TO KEEP GUESSING THE GAME NUMBER UNTIL THE USER ENTERS CORRECT VALUE.
let gamenum=20;
let usernum=prompt("guess the game number:");
while(usernum!=gamenum){
    prompt("you entered wrong number.guess again:");
}
console.log("congratulation you win");

//STRING IN JAVASCRIPT
//CREATE STRING
let str1="apnacollege";
//or 
let str2='apnacollege';
console.log(str1,str2);

//STRING LENGTH
let str3="satyajit";
console.log(str3.length);

//STRING INDICES
console.log(str2[0]);

//TEMPLETE LITERALS(VERY IMPORTANT TO UNDERSTAND)
let obj={
    items:"pen",
    price:10
};
let output=`the cost of the ${obj.items} is ${obj.price}.`;
console.log(output);

//ESCAPE CHARACTER(\n)
console.log("apna \n college");

//TAB SPACE(\t)
console.log("apna \t college");

//STRING METHODS IN JAVA SCRIPT(SOME METHODS ARE SHOW)
//1.str.toUpperCase
console.log(str1.toUpperCase());
//2.str.toLowerCase
console.log(str3.toLowerCase());
//3.str.trim()
console.log(str2.trim());
//4.str.slice(start,end)
console.log(str1.slice(1,5));
//5.str1.concact(str2)
console.log(str1.concat(str2));
//6.str.replace(searchval,newval)
console.log(str1.replace("ap","i"));
//7.str.charAt(idx)
let str4="i love js";
console.log(str4.charAt(3));

//QUESTION PRACTICE
//🟢QUESTION:
//PROMPT THE USER TO ENTER THEIR FULL NAME.
//GENERATE A USERNAME FOR THEM BASED ON THE INPUT START USERNAME WITH @, 
//FOLLOWED BY THEIR FULLNAME AND AND ENDING WITH THE FULLNAME LENGTH.
let fullname = prompt("enter your fullname without space");
let username = "@" + fullname + fullname.length;
console.log(username);

