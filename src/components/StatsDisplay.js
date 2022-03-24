import React from "react";
import { useRecoilValue } from "recoil";
import { taskListArray } from "../states/taskList";
import { ListGroup, ListGroupItem, Badge, Col } from "reactstrap";

const StatsDisplay = () => {
    const tasks = useRecoilValue(taskListArray);


    const highCalculator = () => {
        const count = tasks.filter((task) => {
            return task.priority === "acil";
        });
        return count.length;
    };

    const mediumCalculator = () => {
        const count = tasks.filter((task) => {
            return task.priority === "onemli";
        });
        return count.length;
    };

    const lowCalculator = () => {
        const count = tasks.filter((task) => {
            return task.priority === "normal";
        });
        return count.length;
    };

    return (
        <div className="stats">
            <h3> Stats: </h3>
            <ListGroup row>
                <Col sm={10}>
                    <ListGroupItem className="justify-content-between">
                        Total Number of Tasks : <Badge pill>{tasks.length}</Badge>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        Tasks with Acil priority:<Badge pill>{highCalculator()}</Badge>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        Tasks with Önemli priority: <Badge pill>{mediumCalculator()}</Badge>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        Tasks with Normal priority: <Badge pill>{lowCalculator()}</Badge>
                    </ListGroupItem>
                </Col>
            </ListGroup>
        </div>
    );
};

export default StatsDisplay;
