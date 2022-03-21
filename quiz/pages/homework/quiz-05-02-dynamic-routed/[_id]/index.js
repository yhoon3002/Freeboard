import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId: $productId) {
            seller
            name
            detail
            price
        }
    }
`;

const QuizFirstAddition = () => {
    const router = useRouter();
    // console.log(router);

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: router.query._id },
    });

    console.log(data);

    return (
        <div>
            {/* 7. &&연산자 사용하기 */}
            {/* <div>판매자 : {data && data.fetchProduct.seller}</div>
            <div>상품명 : {data && data.fetchProduct.name}</div>
            <div>상품내용 : {data && data.fetchProduct.detail}</div>
            <div>상품가격 : {data && data.fetchProduct.price}</div> */}

            {/* 8. 옵셔널 체이닝 사용 */}
            {/* data가 없을 때, 초기 상태를 loading...으로 표시하기 (삼항 연산자 사용) */}
            <div>
                판매자 :{data ? data?.fetchProduct?.seller : "...loading"}
            </div>
            <div>상품명 :{data ? data?.fetchProduct?.name : "...loading"}</div>
            <div>
                상품내용 :{data ? data?.fetchProduct?.detail : "...loading"}
            </div>
            <div>
                상품가격 :{data ? data?.fetchProduct?.price : "...loading"}
            </div>
        </div>
    );
};

export default QuizFirstAddition;
