console.log("타입스크립트 실행됨");

import { DataSource } from "typeorm";
import { Product } from "./Product.postgres";
import { ApolloServer, gql } from "apollo-server";

// 타입 설정
const typeDefs = gql`
    input CreateProductInput {
        name: String
        detail: String
        price: Int
    }

    input UpdateProductInput {
        name: String
        detail: String
        price: Int
    }

    type Product {
        _id: String
        seller: String
        name: String
        detail: String
        price: Int
        createdAt: String
    }

    type Return {
        _id: String
        number: Int
        message: String
    }

    type Query {
        fetchProducts: [Product]
        fetchProduct(productId: String): [Product]
    }

    type Mutation {
        createProduct(
            seller: String
            createProductInput: CreateProductInput!
        ): String

        updateProduct(
            productId: String
            updateProductInput: UpdateProductInput!
        ): Return

        deleteProduct(productId: ID): Return
    }
`;

const resolvers = {
    Query: {
        fetchProducts: async () => {
            const result = await Product.find({ where: { Deleted: false } });

            return result;
        },

        fetchProduct: async (_: any, args: any) => {
            const result = await Product.find({
                where: { _id: args.productId },
            });

            return result;
        },
    },

    Mutation: {
        createProduct: async (_: any, args: any) => {
            await Product.insert({
                seller: args.seller,
                name: args.createProductInput.name,
                detail: args.createProductInput.detail,
                price: args.createProductInput.price,
            });

            return "게시물 등록 성공!";
        },

        updateProduct: async (_: any, args: any) => {
            await Product.update(
                { _id: args.productId },
                { ...args.updateProductInput }
            );
            return "게시물 수정 성공!";
        },

        deleteProduct: async (_: any, args: any) => {
            await Product.update(
                { _id: args.productId },
                { deletedAt: new Date(), Deleted: true }
            );
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true,
});

const AppDataSource = new DataSource({
    type: "postgres",
    host: "34.64.124.189",
    port: 5035,
    username: "postgres",
    password: "postgres2021",
    database: "postgres",
    entities: [Product], // 테이블을 의미함
    synchronize: true, // true로 하게 되면 DB랑 테이블을 동기화 한다는 의미
    logging: true, // 어떻게 typeorm이 sql에 명령을 날리는지 로그가 뜨면서 확인 가능
});

AppDataSource.initialize()
    .then(() => {
        console.log("연결 성공");

        server.listen(5000).then(({ url }) => {
            console.log(`Server ready at ${url}`);
        });
    })
    .catch(() => {
        console.log("연결 실패");
    });
