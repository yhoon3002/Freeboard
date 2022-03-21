// graphql 이용해서 playground의 createProduct로 진행하기
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

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

const QuizFourth = () => {
    const [data, setData] = useState("");
    const [callApi] = useMutation(CREATE_PRODUCT);

    const callGraphqlApi = async () => {
        const result = await callApi({
            variables: {
                seller: mySeller,
                createProductInput: {
                    name: myProduct,
                    detail: myDetail,
                    price: parseInt(myPrice, 10),
                },
            },
        });
        console.log(result);
        setData(result.data.createProduct.message);
    };

    const [mySeller, setMySeller] = useState("");
    const [myProduct, setMyProduct] = useState("");
    const [myDetail, setMyDetail] = useState("");
    const [myPrice, setMyPrice] = useState("");

    const onChangeSeller = (event) => {
        setMySeller(event.target.value);
    };

    const onChangeProduct = (event) => {
        setMyProduct(event.target.value);
    };

    const onChangeDetail = (event) => {
        setMyDetail(event.target.value);
    };

    const onChangePrice = (event) => {
        setMyPrice(event.target.value);
    };

    return (
        <div>
            판매자 : <input type="text" onChange={onChangeSeller} />
            <br />
            상품명 : <input type="text" onChange={onChangeProduct} />
            <br />
            상품설명 : <input type="Text" onChange={onChangeDetail} />
            <br />
            상품가격 : <input type="Text" onChange={onChangePrice} />
            <br />
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
        </div>
    );
};

export default QuizFourth;
