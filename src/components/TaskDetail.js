import React, { useState } from "react";
import { taskListArray } from "../states/taskList";
import { useRecoilState } from "recoil";
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import { useHistory, useParams } from "react-router-dom";

const TaskDetail = () => {
    const [tasks, setTasks] = useRecoilState(taskListArray);
    const history = useHistory();
    const { id } = useParams();
    const [title, setTitle] = useState(tasks[id].name);
    const [prior, setPrior] = useState(tasks[id].priority);

    const update = (event) => {
        const list = [...tasks];
        list[id] = {
            ...list[id],
            priority: prior,
        };
        setTasks(list);
        history.push("/");
        alert("Update Success");
    };

    const backTrack = () => {
        history.push("/");
    };

    return (
        <div className="details">
            <h3 id="detail">Job Edit:</h3>
            <Form>
                <FormGroup row>
                    <Label for="taskTitle" sm={2}>
                        Title :
                    </Label>
                    <Col sm={5}>
                        <Input
                            type="text"
                            name="taskTitle"
                            id="taskTitle"
                            value={title}
                            disabled
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="selectPriority" sm={2}>
                        Priority:
                    </Label>
                    <Col sm={2}>
                        <Input
                            type="select"
                            name="selectPriority"
                            id="selectPriority"
                            onChange={(event) => setPrior(event.target.value)}
                        >
                            <option value="acil" selected={prior === "acil"}>
                                Acil
                            </option>
                            <option value="onemli" selected={prior === "onemli"}>
                                Önemli
                            </option>
                            <option value="normal" selected={prior === "normal"}>
                                Normal
                            </option>
                        </Input>
                    </Col>
                </FormGroup>
            </Form>
            <Button color="info" onClick={update}>
                Save Changes
            </Button>
            &nbsp;
            <Button onClick={backTrack}>Back</Button>
        </div>
    );
};

export default TaskDetail;
