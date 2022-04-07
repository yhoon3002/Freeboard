import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity() // Board Class를 table로 만들라고 typeorm에 전달해줌
// 아랫부분으로 테이블을 만들었음
// BaseEntity : DataBase Table 기능 추가
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn("increment") // 중복되지 않은 자동으로 증가하는 column / uuid : unique한 id
    number!: number; // !를 붙여주게 되면 필수 입력이라는 뜻임

    @Column({ type: "text" })
    writer!: string;

    @Column({ type: "text" })
    title!: string;

    @Column({ type: "text" })
    contents!: string;

    // deletedAt : Data // soft-delete
}
