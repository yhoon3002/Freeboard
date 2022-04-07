import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
} from "typeorm";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    _id!: string;

    @Column({ type: "text" })
    seller?: string;

    @Column({ type: "text" })
    name!: string;

    @Column({ type: "text" })
    detail!: string;

    @Column({ type: "integer" })
    price!: number;

    @CreateDateColumn()
    createdAt?: Date;

    @CreateDateColumn()
    deletedAt?: Date;

    @Column({ type: Boolean, default: "false" })
    Deleted!: Boolean;
}
