// This Is For Detail Page

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId: $productId) {
            _id
            seller
            name
            detail
            price
        }
    }
`;

const ProductDetailPage = () => {
    const router = useRouter();

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: router.query.productId },
    });

    const onClickEdit = () => {
        router.push(`/homework/quiz-08-01/${router.query.productId}/edit`);
    };

    return (
        <div>
            <div>Product Name : {data?.fetchProduct?.name}</div>
            <div>Seller : {data?.fetchProduct?.seller}</div>
            <div>Price : {data?.fetchProduct?.price}</div>
            <div>Product Details : {data?.fetchProduct?.detail}</div>
            <button onClick={onClickEdit}>Modify Product</button>
        </div>
    );
};

export default ProductDetailPage;
