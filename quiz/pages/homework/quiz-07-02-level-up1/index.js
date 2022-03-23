import styled from "@emotion/styled";

const THead = styled.thead`
    background-color: gray;
`;

const Th1 = styled.th`
    width: 50px;
`;

const Th2 = styled.th`
    width: 80px;
`;

const Th3 = styled.th`
    width: 400px;
`;

const Th4 = styled.th`
    width: 80px;
`;

const LevelUp = () => {
    return (
        <div>
            <tabel>
                <THead>
                    <Th1>
                        <input type="checkbox" />
                    </Th1>
                    <Th2>번호 </Th2>
                    <Th3>제목 </Th3>
                    <Th4>작성일 </Th4>
                </THead>
                <tbody>
                    <input type="checkbox" />
                    <td>1</td>
                    <td>9월달 시스템 점검 안내입니다.</td>
                    <td>2020.09.19</td>
                </tbody>
            </tabel>
        </div>
    );
};

export default LevelUp;
