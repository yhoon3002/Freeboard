import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentLoadingPage() {
  const [amount, setAmount] = useState(500);
  const router = useRouter();

  const onChangeSelect = (e) => {
    setAmount(e.target.value);
  };

  const requestPay = () => {
    // script로 다운받은 이후의 과정임
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp86771417"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // 상품 id를 굳이 안넣어도 상품 id를 중복되지 않게 알아서 만들어줌
        // merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/quiz06/payment/loading",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          router.push("/quiz06/payment/complete");

          // 백엔드에 결제 관련 데이터 넘겨주기(=> 즉, 뮤테이션 실행하기)
          // ex) createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  return (
    <div>
      <select onChange={onChangeSelect}>
        <option key="500" value="500">
          500원
        </option>
        <option key="1000" value="1000">
          1000원
        </option>
        <option key="2000" value="2000">
          2000원
        </option>
        <option key="5000" value="5000">
          5000원
        </option>
      </select>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <button onClick={requestPay}>충전하기</button>
    </div>
  );
}
