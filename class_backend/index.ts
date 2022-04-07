console.log("타입스크립트를 실행했어요.");

// DB 접속
import { DataSource } from "typeorm"; // 버전 바뀌면서 createConnection -> DataSource로 바뀜
import { Board } from "./Board.postgres";

// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
const typeDefs = gql`
    input CreateBoardInput {
        writer: String
        title: String
        contents: String
    }

    type Board {
        number: Int
        writer: String
        title: String
        contents: String
    }

    type Query {
        fetchBoards: [Board]
    }

    type Mutation {
        # createBoard(writer: String, title: String, contents: String): String // 연습용(example)
        createBoard(createBoardInput: CreateBoardInput!): String # // 실제사용(backend06)
    }
`;

// 2. API
const resolvers = {
    Query: {
        // 데이터베이스에 접속해서 게시물 가져오기

        fetchBoards: async () => {
            // 실제로는 조회한 게시물의 정보를 가져와야함

            const result = await Board.find();

            return result;
        },
    },

    Mutation: {
        // 데이터베이스에 접속해서 게시물 등록하기

        // parent : API가 여러개 있으면, API에서 다른 API를 요청할 때가 생기는데 그 때 넣어주는 데이터가 parent로 넘어가게 됨 ex) createBoard에서 fetchBoard를 요청할 때
        // args : data는 argument라는 곳에 들어와서 저장됨
        // context : 기타 요약정보 등이 들어옴
        // info :
        createBoard: async (_: any, args: any) => {
            // 실제로는 등록한 게시물의 정보를 가져와야함

            await Board.insert({
                ...args.createBoardInput,
                // writer: args.createBoardInput.writer,
                // title: args.createBoardInput.title,
                // contents: args.createBoardInput.contents,
            });

            return "게시물을 등록했습니다!";
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true, // cors: false를 하게 되면 다른 주소에서 요청이 되는것은 브라우저에서 모두 차단을함
});

const AppDataSource = new DataSource({
    type: "postgres",
    host: "34.64.124.189",
    port: 5035,
    username: "postgres",
    password: "postgres2021",
    database: "postgres",
    entities: [Board], // 테이블을 의미함
    synchronize: true, // true로 하게 되면 DB랑 테이블을 동기화 한다는 의미
    logging: true, // 어떻게 typeorm이 sql에 명령을 날리는지 로그가 뜨면서 확인 가능
});

// 실행시키는 부분
AppDataSource.initialize()
    // 연결 성공시
    .then(() => {
        console.log("연결성공!");

        server.listen(4000).then(({ url }) => {
            console.log(`Server readt at ${url}`);
        });
        // 백엔드 API를 오픈-리슨 (24시간동안 접속가능하게끔 대기상태로 만들어주기
        // restAPI를 사용하면 express를 이용
        // grapql은 apollo-server를 이용
    })

    // 연결 실패시
    .catch(() => {
        console.log("연결실패!");
    });
