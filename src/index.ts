/*Typed : 어떤 종류의 변수와 데이터인지 설정 혹은 예상
함수뒤에 String 값을 넣고 return을 해주면 문자열을 반환함
인터페이스는 js로 컴파일 되진 않음.
그래서 사용하는것이 class*/
class Human{
        public name: string;
        public age: number;
        public gender: string;
        constructor(name:string, age:number, gender:string){
                this.name = name;
                this.age = age;
                this.gender = gender;
        }
}

const author = new Human("Minsu",22,"male")

const sayHi = (people:Human):string=>{
        return `Hello ${people.name}, you are ${people.age}, you are a ${people.gender}` ;

};

console.log(sayHi(author));

export{};