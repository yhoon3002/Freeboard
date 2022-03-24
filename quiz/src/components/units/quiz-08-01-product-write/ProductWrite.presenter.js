// This Is For Presenter Component
import {} from "./ProductWrite.styles";

const ProductWritePresenter = (props) => {
    return (
        <div>
            상품명 : <input type="text" onChange={props.onChangeName} />
            <br />
            판매자 : <input type="text" onChange={props.onChangeSeller} />
            <br />
            상품 상세설명 :
            <input type="text" onChange={props.onChangeDetail} />
            <br />
            상품 가격 : <input type="text" onChange={props.onChangePrice} />
            <br />
            <button
                onClick={
                    props.isEdit ? props.onClickUpdate : props.onClickRegister
                }
            >
                {props.isEdit ? "Update" : "Register"} Product
            </button>
        </div>
    );
};

export default ProductWritePresenter;
