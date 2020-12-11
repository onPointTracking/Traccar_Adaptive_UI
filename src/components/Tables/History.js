import React from "react";
import styled from "styled-components";

const History = () => {
  let myTable = new Array();
  for (var i = 0; i < 50; i++) {
    myTable.push(["obj"]);
  }
  return (
    <Container>
      <Header>
        <HeaderTitle>History :</HeaderTitle>
        <ShowInMapButton> Show In Map</ShowInMapButton>
      </Header>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableHeaderElement>Time</TableHeaderElement>
            <TableHeaderElement>Lan</TableHeaderElement>
            <TableHeaderElement>Long</TableHeaderElement>
            <TableHeaderElement>Speed</TableHeaderElement>
            <TableHeaderElement>Address</TableHeaderElement>
          </TableHeader>
          {myTable.map((row) => (
            <Row>
              <RowElement>value</RowElement>
              <RowElement>value</RowElement>
              <RowElement>value</RowElement>
              <RowElement>value</RowElement>
              <RowElement>value </RowElement>
            </Row>
          ))}
        </Table>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 80vh;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 900px) {
    height: 30vh;
    margin-bottom: 4rem;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 14px;
`;
const HeaderTitle = styled.h1`
  font-size: 18px;
  font-family: "Roboto";
  color: #06094c;
`;
const ShowInMapButton = styled.h2`
  font-size: 14px;
  font-weight: 300;
  font-family: "Roboto";
  color: white;
  background-color: #06094c;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
`;
const TableContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
`;
const Table = styled.table`
  width: 100%;
`;
const TableHeader = styled.tr``;
const TableHeaderElement = styled.th`
  font-size: 16px;
  font-family: "Roboto";
  text-align: left;
  color: white;
  font-weight: 300;
  background-color: #06094c;
  padding: 8px;
`;

const Row = styled.tr``;
const RowElement = styled.td`
  font-size: 16px;
  font-family: "Roboto";
  text-align: left;
  color: #06094c;
  padding: 8px;
  background-color: #f5f5f5;
`;
export default History;
