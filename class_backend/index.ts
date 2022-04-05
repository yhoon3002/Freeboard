console.log("타입스크립트를 실행했어요.");

// DB 접속
import { DataSource } from "typeorm"; // 버전 바뀌면서 createConnection -> DataSource로 바뀜
import { Board } from "./Board.postgres";

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
    })

    // 연결 실패시
    .catch(() => {
        console.log("연결실패!");
    });
