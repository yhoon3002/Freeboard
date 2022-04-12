import { useRecoilState, atom } from "recoil";
import { useEffect } from "react";
import RecoilWirtePage from "../../../../src/components/units/recoil/write/RecoilWrite";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export default function RecoilEdit() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return (
    <>
      <RecoilWirtePage isEdit={true} />
    </>
  );
}
