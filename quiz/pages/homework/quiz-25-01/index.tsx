// 1~5번

import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const InputBar = styled.input`
  width: 300px;
  font-size: 20px;
`;

const Error = styled.p`
  color: red;
  font-size: 12px;
`;

export const WrapperTableHeader = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 20% 20% 40% 20%;
  grid-template-rows: repeat(1, 50px);
  border-top: 1px solid black;
  border-bottom: 1px solid #bdbdbd;
`;

export const WrapperTableBody = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 20% 20% 40% 20%;
  grid-template-rows: repeat(1, 50px);
  border-bottom: 1px solid black;
`;

export const HearderBox = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 48px;
  text-align: center;
  color: #000000;
`;

export const BodyBox = styled.div`
  border-bottom: 1px solid gray;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  color: #4f4f4f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

interface IFormvalues {
  writer?: string;
  title?: string;
  contents?: string;
  password?: string;
}

export default function QuizFirst() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickSubmit = async (data: IFormvalues) => {
    console.log(data.writer);
    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARDS,
          variables: {
            page: 1,
          },
        },
      ],
    });
  };

  return (
    <>
      <WrapperTableHeader>
        <HearderBox>작성자</HearderBox>
        <HearderBox>제목</HearderBox>
        <HearderBox>내용</HearderBox>
      </WrapperTableHeader>
      {data?.fetchBoards.map((el) => (
        <WrapperTableBody key={el._id}>
          <BodyBox>{el.writer}</BodyBox>
          <BodyBox>{el.title}</BodyBox>
          <BodyBox>{el.contents}</BodyBox>
        </WrapperTableBody>
      ))}

      <form onSubmit={handleSubmit(onClickSubmit)}>
        <div>
          작성자:
          <InputBar
            placeholder="최소2글자 이상 입력해주세요"
            type="text"
            {...register("writer", {
              required: "작성자는 필수항목입니다.",
              minLength: {
                value: 2,
                message: "최소2글자 이상 입력해야합니다.",
              },
            })}
          />
          {errors.writer && <Error>{errors.writer.message}</Error>}
        </div>
        <div>
          비밀번호:
          <InputBar
            placeholder="최소8글자 이상 입력해주세요"
            type="password"
            {...register("password", {
              required: "비밀번호는 필수항목입니다.",
              minLength: {
                value: 8,
                message: "최소8글자 이상 입력해야합니다.",
              },
            })}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </div>
        <div>
          제목:
          <InputBar
            placeholder="제목을 입력해주세요"
            type="text"
            {...register("title", {
              required: "제목이 누락되었습니다.",
            })}
          />
          {errors.title && <Error>{errors.title.message}</Error>}
        </div>
        <div>
          내용:{" "}
          <InputBar
            placeholder="내용을 입력해주세요"
            type="text"
            {...register("contents", {
              required: "내용이 누락되었습니다.",
            })}
          />
          {errors.contents && <Error>{errors.contents.message}</Error>}
        </div>
        <button>등록하기</button>
      </form>
    </>
  );
}
