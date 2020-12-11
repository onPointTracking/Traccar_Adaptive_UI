import React from "react";
import styled from "styled-components";
const Events = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Events :</HeaderTitle>
        <ShowInMapButton> Show In Map</ShowInMapButton>
      </Header>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableHeaderElement>Device</TableHeaderElement>
            <TableHeaderElement>Server Time</TableHeaderElement>
            <TableHeaderElement>Position ID</TableHeaderElement>
            <TableHeaderElement>Geofence ID</TableHeaderElement>
            <TableHeaderElement>Type</TableHeaderElement>
          </TableHeader>
          <Row>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value </RowElement>
          </Row>
          <Row>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value </RowElement>
          </Row>
          <Row>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value </RowElement>
          </Row>
          <Row>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value </RowElement>
          </Row>
          <Row>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value </RowElement>
          </Row>
          <Row>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value </RowElement>
          </Row>
          <Row>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value </RowElement>
          </Row>
          <Row>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value </RowElement>
          </Row>
          <Row>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value </RowElement>
          </Row>
          <Row>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value</RowElement>
            <RowElement>value </RowElement>
          </Row>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
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
  height: 300px;
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

export default Events;
