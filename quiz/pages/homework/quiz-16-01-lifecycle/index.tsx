import { useEffect, useState } from "react";
import { router, useRouter } from "next/router";

export default function LifeCyclePage() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);

  const onClickChange = () => {
    setIsChange((prev) => !prev);
  };

  const onClickMove = () => {
    router.push("/");
  };

  useEffect(() => {
    alert("Rendered!");
  }, []);

  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);

  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);

  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
