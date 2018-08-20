/*Typed : 어떤 종류의 변수와 데이터인지 설정 혹은 예상
함수뒤에 String 값을 넣고 return을 해주면 문자열을 반환함*/


const sayHi = (name:string,age:number,gender:string):string=>{
        return `Hello ${name}, you are ${age}, you are a ${gender}` ;

};

console.log(sayHi("minsu",28,"Male"));

export{};