/*Typed : 어떤 종류의 변수와 데이터인지 설정 혹은 예상
함수뒤에 String 값을 넣고 return을 해주면 문자열을 반환함*/
interface Human{
        name: string;
        age: number;
        gender:string;
}
const student={
        name:"minsu",
        age:28,
        gender:"male"
}

const sayHi = (people:Human):string=>{
        return `Hello ${people.name}, you are ${people.age}, you are a ${people.gender}` ;

};

console.log(sayHi(student));

export{};