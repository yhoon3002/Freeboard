import { useState } from "react";
import { Span } from "./styles";

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (e) => {
    const target = e.target as HTMLElement;
    props.refetch({ page: Number(e.target.id) });
    props.setCurrent(Number(target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;

    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
    props.setCurrent(props.current - 10);
    console.log(disable);
  };

  const onClickNextPage = () => {
    if (startPage + 10 > props.lastPage) return;

    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
    props.setCurrent(props.current + 10);
  };

  return (
    <div>
      <button
        onClick={onClickPrevPage}
        disabled={startPage === 1 ? true : false}
      >{`<`}</button>

      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? (
          <Span
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
            current={startPage + index === props.current}
          >
            {` `} {index + startPage} {` `}
          </Span>
        ) : (
          <span></span>
        )
      )}

      <button
        onClick={onClickNextPage}
        disabled={props.lastPage - startPage < 10 ? true : false}
      >{`>`}</button>
    </div>
  );
}
