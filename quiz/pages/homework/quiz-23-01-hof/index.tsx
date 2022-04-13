export default function HofPage() {
  const onClickButton = (aaa) => (e) => {
    console.log(aaa);
  };

  return (
    <div>
      <button onClick={onClickButton(123)}>
        this is button button button button
      </button>
    </div>
  );
}
