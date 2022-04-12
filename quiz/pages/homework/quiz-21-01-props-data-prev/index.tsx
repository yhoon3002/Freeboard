// 1-1번
// container 부분
export default function Container() {
  return <>{Presenter({ child = "철수" })}</>;
}

// presenter 부분
export default function Presenter(props) {
  return <div>{props.child}</div>;
}

//
// 1-2번
// container 부분
export default function Container() {
  return (
    <>
      {Presenter({ child="철수" age={13} })}
    </>
  );
}

// presenter 부분
export default function Presenter(props) {
  return (
    <div>
      {props.child}는 {props.age}살 입니다.
    </div>
  );
}


//
// 1-3번
["철수", "영희", "훈이", "맹구"].map((_, index) => {
	console.log(`영희는 ${index}번째 칸에 들어있습니다.`)
})

//
// 1-4번
const [state, setState] = useState(0)

setState(qwer => qwer + 1)