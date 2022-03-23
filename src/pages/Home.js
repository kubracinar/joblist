import React from "react";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskDisplay from "../components/TasksDisplay";
import StatsDisplay from "../components/StatsDisplay";
import { Row, Col } from "reactstrap";

const Home = () => {
    return (
        <>
            <Header />
            <TaskInput />
            <Row>
                <Col xs="7">
                    <TaskDisplay />
                </Col>
                <Col xs="5">
                    <StatsDisplay />
                </Col>
            </Row>
        </>
    );
};

export default Home;