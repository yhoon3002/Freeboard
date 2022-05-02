import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/MarketsCommentList.queries";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./MarketsCommentWrite.queries";
import MarketsCommentWritePresenter from "./MarketsCommentWrite.presenter";

export default function MarketsCommentWriteContainer(props) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onClickRegister = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: contents,
          },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdate = async () => {
    try {
      if (!contents) {
        alert("내용이 수정되지 않았습니다.");
      }

      const updateUseditemQuestionInput = {};
      if (contents) updateUseditemQuestionInput.contents = contents;

      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: String(props.el._id),
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_USED_ITEM_QUESTIONS,
        //     variables: { useditemQuestionId: String(router.query.useditemId) },
        //   },
        // ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MarketsCommentWritePresenter
      isEdit={props.isEdit}
      onChangeContents={onChangeContents}
      onClickRegister={onClickRegister}
      onClickUpdate={onClickUpdate}
      el={props.el}
      contents={contents}
    />
  );
}
