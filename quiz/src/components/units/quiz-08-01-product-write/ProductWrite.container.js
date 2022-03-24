// This Is For Container Component

import ProductWritePresenter from "./ProductWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const ProductWriteContainer = (props) => {
    const router = useRouter();
    const [createProduct] = useMutation(CREATE_PRODUCT);
    const [updateProduct] = useMutation(UPDATE_PRODUCT);

    const [seller, setSeller] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState("");

    const onClickUpdate = async () => {
        const result = await updateProduct({
            variables: {
                productId: router.query.productId,
                updateProductInput: {
                    name: name,
                    detail: detail,
                    price: parseInt(price),
                },
            },
        });
        alert("Updating Is Succeed");
        router.push(`/homework/quiz-08-01/${router.query.productId}`);
    };

    const onClickRegister = async () => {
        const result = await createProduct({
            variables: {
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price: parseInt(price),
                },
            },
        });
        alert("Product Is Registered!");
        console.log("result " + result);
        console.log("result data" + result.data);
        router.push(`/homework/quiz-08-01/${result.data.createProduct._id}`);
    };

    const onChangeSeller = (e) => {
        setSeller(e.target.value);
    };

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeDetail = (e) => {
        setDetail(e.target.value);
    };

    const onChangePrice = (e) => {
        setPrice(e.target.value);
    };

    return (
        <ProductWritePresenter
            onChangeSeller={onChangeSeller}
            onChangeName={onChangeName}
            onChangeDetail={onChangeDetail}
            onChangePrice={onChangePrice}
            onClickRegister={onClickRegister}
            onClickUpdate={onClickUpdate}
            isEdit={props.isEdit}
        />
    );
};

export default ProductWriteContainer;
