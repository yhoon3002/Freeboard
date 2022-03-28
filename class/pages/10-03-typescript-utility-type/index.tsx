// .ts : JSX가 없으면 .ts를 붙여준다.
// .tsx (TypeScript Xml) = (TypeScript eXtensible Markup Language): JSX가 있으면 .tsx를 붙여준다.

const TypescriptPage = () => {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 1. Pick 타입
  type Mytype1 = Pick<IProfile, "name" | "age">; // name과 age만 씀

  //
  // 2. Omit 타입
  type Mytype2 = Omit<IProfile, "school">; // school이 빠지게 됨

  //
  // 3. Partial 타입
  type Mytype3 = Partial<IProfile>; // 전부 ?가 붙게됨

  //
  // 4. Required 타입
  type Mytype4 = Required<IProfile>; // 모든 ?가 사라지게됨

  //
  // 5. Record 타입
  type ZZZ = "aaa" | "qqq" | "rrr"; // ZZZ는 aaa타입 혹은 qqq타입 혹은 rrr 타입이 됨 // 이것을 Union 타입이라 부름(합집합)

  // let apple: ZZZ;
  // apple = "qqq";
  type Mytype5 = Record<ZZZ, IProfile>; // aaa, qqq, rrr이 key가 되고 IProfile이 value가 됨

  //
  // ===== 추가 (선언병합) -type vs interface =====
  interface IProfile {
    candy: number;
  } // 위에 있는 IProfile과 이 IProfile이 합쳐지게 됨

  let profile: IProfile;
  profile = {
    candy: 3,
    age: 10,
    hobby: "asdf",
  };

  return (
    <div>
      <div>타입스크립트 연습하기!!</div>
    </div>
  );
};

export default TypescriptPage;
