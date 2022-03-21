import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
    mutation createProduct(
        $seller: String
        $createProductInput: CreateProductInput!
    ) {
        createProduct(
            seller: $seller
            createProductInput: $createProductInput
        ) {
            _id
            number
            message
        }
    }
`;

const QuizFirst = () => {
    const router = useRouter();
    const [callApi] = useMutation(CREATE_PRODUCT);

    const productRegister = async () => {
        try {
            const result = await callApi({
                variables: {
                    seller: mySeller,
                    createProductInput: {
                        name: myName,
                        detail: myDetail,
                        price: parseInt(myPrice),
                    },
                },
            });
            console.log(result);
            console.log(result.data.createProduct.message);
            alert("상세페이지로 고고!!");
            router.push(
                `/homework/quiz-05-02-dynamic-routed/${result.data.createProduct._id}`
            );
        } catch (error) {
            alert(error.message);
        }
    };

    const [mySeller, setSeller] = useState("");
    const [myName, setName] = useState("");
    const [myDetail, setDetail] = useState("");
    const [myPrice, setPrice] = useState("");

    const onChangeSeller = (e) => {
        setSeller(e.target.value);
    };

    const onChangeProductName = (e) => {
        setName(e.target.value);
    };

    const onChangeProductContents = (e) => {
        setDetail(e.target.value);
    };

    const onChangeProductPrice = (e) => {
        setPrice(e.target.value);
    };

    return (
        <div>
            판매자 : <input type="text" onChange={onChangeSeller} />
            <br />
            상품명 : <input type="text" onChange={onChangeProductName} />
            <br />
            상품내용 : <input type="text" onChange={onChangeProductContents} />
            <br />
            상품가격 : <input type="text" onChange={onChangeProductPrice} />
            <br />
            <button onClick={productRegister}>상품 등록하기</button>
        </div>
    );
};

export default QuizFirst;
