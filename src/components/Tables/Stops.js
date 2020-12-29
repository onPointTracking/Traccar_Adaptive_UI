import React, {useState} from "react";
import styled from "styled-components";
import moment from "moment";
import {useSelector} from "react-redux";
import {QueryData} from "../../features/devicesSlice";


function timeParser(time_name) {
    const from = moment().subtract(1, "hour");
    const to = moment();
    let selectedFrom;
    let selectedTo;
    switch (time_name) {
        case "today":
            selectedFrom = moment().startOf("day");
            selectedTo = moment().endOf("day");
            break;
        case "yesterday":
            selectedFrom = moment().subtract(1, "day").startOf("day");
            selectedTo = moment().subtract(1, "day").endOf("day");
            break;
        case "thisWeek":
            selectedFrom = moment().startOf("week");
            selectedTo = moment().endOf("week");
            break;
        case "previousWeek":
            selectedFrom = moment().subtract(1, "week").startOf("week");
            selectedTo = moment().subtract(1, "week").endOf("week");
            break;
        case "thisMonth":
            selectedFrom = moment().startOf("month");
            selectedTo = moment().endOf("month");
            break;
        case "previousMonth":
            selectedFrom = moment().subtract(1, "month").startOf("month");
            selectedTo = moment().subtract(1, "month").endOf("month");
            break;
        default:
            selectedFrom = from;
            selectedTo = to;
            break;
    }
    return [selectedFrom, selectedTo]
}

const Stops = () => {
    const [queryRespond, setQueryRespond] = useState([]);
    const IncomingData = useSelector(QueryData);
    let id = null;
    let selectedFrom = null;
    let selectedTo = null;
    if (IncomingData.length > 0) {
        id = IncomingData[0]
        const time = timeParser(IncomingData[1])
        selectedFrom = time[0]
        selectedTo = time[1]
    }

    if (id) {
        // GET EVENTS
        const query = new URLSearchParams({
            deviceId: id,
            from: selectedFrom.toISOString(),
            to: selectedTo.toISOString(),
        });

        let promise = fetch(`/api/reports/stops?${query.toString()}`, {
            headers: {Accept: "application/json"},
        })
        promise.then((response) => {
            if (response.ok) {
                response.json().then(setQueryRespond);
            }
        })
        promise.catch((err) => {
            console.log(err)
        });
    }


    return (
        <Container>
            <Header>
                <HeaderTitle>Stops :</HeaderTitle>
                {
                    //<ShowInMapButton> Show In Map</ShowInMapButton>
                }
            </Header>
            {queryRespond.length > 0 ?

                <TableContainer>
                    <Table>
                        <TableHeader>
                            <TableHeaderElement>Start Time</TableHeaderElement>
                            <TableHeaderElement>End Time</TableHeaderElement>
                            <TableHeaderElement>Fuel Spent</TableHeaderElement>
                            <TableHeaderElement>Duration</TableHeaderElement>
                            <TableHeaderElement>Engine Hours</TableHeaderElement>
                        </TableHeader>
                        {queryRespond.map((row) => (
                            <Row>
                                <RowElement>{row.startTime}</RowElement>
                                <RowElement>{row.endTime}</RowElement>
                                <RowElement>{row.spentFuel}</RowElement>
                                <RowElement>{row.duration}</RowElement>
                                <RowElement>{row.engineHours}</RowElement>
                            </Row>
                        ))}
                    </Table>
                </TableContainer>
                : <p>No Stops</p>}

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

export default Stops;
