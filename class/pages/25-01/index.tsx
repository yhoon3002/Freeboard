// const profile = {
//     name: "철수",
//     age: "26",
//     school: "다람쥐초등학교",
// }
// undefined

// const name = profile.name
// undefined

// const {age, school} = profile
// undefined

// age
// '26'

// school
// '다람쥐초등학교'

// function useQuery(fetchBoard) {
//     return {
//         data: {
//             fetchBoard: {
//                 writer: "철수",
//                 title: "제목입니다",
//                 contents: "내용입니다"
//             }
//         },
//         loading: "로딩중!!"
//     }
// }
// undefined

// useQuery("FETCH_BOARD")
// {data: {…}, loading: '로딩중!!'}data: fetchBoard: {writer: '철수', title: '제목입니다', contents: '내용입니다'}contents: "내용입니다"title: "제목입니다"writer: "철수"[[Prototype]]: Object[[Prototype]]: Objectloading: "로딩중!!"[[Prototype]]: Object

// const {data, loading} = useQuery("FETCH_BOARD")
// undefined

// data
// {fetchBoard: {…}}fetchBoard: {writer: '철수', title: '제목입니다', contents: '내용입니다'}[[Prototype]]: Object

// data.fetchBoard.writer
// '철수'

// data.fetchBoard.title
// '제목입니다'

// data.fetchBoard.contents
// '내용입니다'

// loading
// '로딩중!!'

// const classmates = ["철수", "영희", "훈이"]
// undefined

// const child1 = classmates[0]
// undefined

// const [, child2, child3] = classmates
// undefined

// child2
// '영희'

// child3
// '훈이'

// function useState(aaa){
//     const myState = aaa // 초기값으로 사용
//     const setMyState = (bbb) => {
//         console.log(`state를 ${bbb}로 바꿔줄게!!`)
//     }
//     return [myState, setMyState]
// }
// undefined

// const [count, setCount] = useState(10)
// undefined

// count
// 10

// setCount(20)
// state를 20로 바꿔줄게!!
// undefined

// const qqq = useState(30)
// undefined

// qqq[0]
// 30

// qqq[1](50)
// state를 50로 바꿔줄게!!
// undefined

// const child = {
//     name: "철수",
//     age: 8,
//     school: "다람쥐초등학교",
//     hobby: "운동하기",
// }
// undefined

// const {age, ...rest} = child
// undefined

// rest
// {name: '철수', school: '다람쥐초등학교', hobby: '운동하기'}

// child
// {name: '철수', age: 8, school: '다람쥐초등학교', hobby: '운동하기'}

// const {age, ...deletedAge} = child
// undefined

// deletedAge
// {name: '철수', school: '다람쥐초등학교', hobby: '운동하기'}

// const child = {
//     name: "철수",
//     age: 8,
//     school: "다람쥐초등학교",
//     moeny: 2000,
//     hobby: "수영"
// }
// undefined

// const {school, ...deletedSchool} = child
// undefined

// deletedSchool
// {name: '철수', age: 8, moeny: 2000, hobby: '수영'}
