// Pagination 01 Conatiner
import { PresetColorTypes } from "antd/lib/_util/colors";
import { useState } from "react";
import Pagination01Presenter from "./Pagination01.presenter";

export default function Pagination01Container(props) {
    const [startPage, setStartPage] = useState(1);
    const lastPage = Math.ceil(props.count / 10);
    const [currentPage, setCurrentPage] = useState(1);

    const onClickPageNumber = (e) => {
        props.refetch({
            page: Number(e.target.id),
        });
        setCurrentPage(Number(e.target.id));
    };

    const onClickPrevArrow = () => {
        if (startPage <= 1) return;

        setStartPage((prev) => prev - 10);
        props.refetch({
            page: startPage - 10,
        });

        setCurrentPage(startPage - 10);
    };

    const onClickNextArrow = () => {
        if (startPage + 10 > lastPage) return;

        setStartPage((prev) => prev + 10);
        props.refetch({
            page: startPage + 10,
        });

        setCurrentPage(startPage + 10);
    };

    return (
        <Pagination01Presenter
            startPage={startPage}
            lastPage={lastPage}
            currentPage={currentPage}
            onClickPageNumber={onClickPageNumber}
            onClickPrevArrow={onClickPrevArrow}
            onClickNextArrow={onClickNextArrow}
        />
    );
}
