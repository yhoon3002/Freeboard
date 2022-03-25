// .ts : JSX가 없으면 .ts를 붙여준다.
// .tsx (TypeScript Xml) = (TypeScript eXtensible Markup Language): JSX가 있으면 .tsx를 붙여준다.

const TypescriptPage = () => {
    // 타입추론 (타입 명시 x)
    // 타입을 지정해주지 않아도, 알아서 타입을 추론
    let a = "안녕하세요"; // 여기서는 string 값이 들어갔으므로, string일 거야 하고 추론

    //
    // 타입명시 (타입 명시 o)
    let b: string = "반갑습니다";

    //
    // string type
    let c: string; // c는 string 타입이라는 것을 명시해주고, 나중에 값을 넣어도 됨
    c = "헬로우";
    // c = 3; // c를 위에서 string 타입이라고 명시해줬는데, 여기서 num 타입을 넣어주었으므로 오류 발생

    //
    // number type
    let d: number = 10; // d는 number 타입
    // d = "qwerty" // d를 위에서 number 타입이라고 명시해줬는데, 여기서 string 타입을 넣어줬으므로 오류 발생

    //
    // boolean type
    let e: boolean = true; // e는 boolean 타입
    e = false; // 마찬가지로 false도 boolean 타입이므로 오류가 발생하지 않음
    // e = "false"; // true로 작동

    //
    // array type
    let f: number[] = [1, 2, 3, 4, 5]; // f는 array 타입이고, array의 값의 타입으로는 number
    let g: string[] = ["철수", "영희", "훈이"]; // g는 array 타입이고, array의 값의 타입으로는 string이
    let h: (number | string)[] = ["철수", "영희", 3]; // h는 array 타입이고, array의 값의 타입으로는 number 혹은 string

    //
    // object type
    let profile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교",
    }; // profile은 object 타입이고, name은 string 타입, age는 number 타입, school은 string 타입이라고 추론

    // profile.age = "8살"; // age의 타입은 number라고 추론이 되었지만, string 값을 넣어주려고 했으므로 오류 발생

    interface IProfile2 {
        name: string;
        age: string | number;
        school: string;
        hobby?: string; // ?가 붙게되면, 있어도 되고 없어도 된다는 뜻임. 만약 ?가 없다면, 무조건 있어야 함
    } // interface를 이용하여 객체를 만들어주고, 객체의 키의 타입을 우리가 정해줌

    let profile2: IProfile2 = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교",
    }; // interface를 이용하여 만든 객체를 명시해주었음

    profile2.age = "8살"; // interface를 이용하여 만든 객체에서 age는 string 타입도 되고 number 타입도 되므로 오류가 발생하지 않음

    //
    // function type
    const add = (money1: number, money2: number, unit: string): string => {
        // 타입을 매개변수 부분에서  명시해주어야함
        return money1 + money2 + unit;
    };
    const result = add(1000, 2000, "원"); // add() 함수가 string 타입의 값을 반환하므로, result도 string 타입이라는 것이 추론됨

    return (
        <div>
            <div>타입스크립트 연습하기!!</div>
        </div>
    );
};

export default TypescriptPage;
