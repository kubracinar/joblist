import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {
    ListGroup,
    ListGroupItem,
    Col,
    Input,
    Button,
    Label,
    Form,
    FormGroup
} from "reactstrap";
import { taskListArray } from "../states/taskList";
import { useHistory } from "react-router-dom";

const TasksDisplay = () => {
    const [taskList, setTaskList] = useRecoilState(taskListArray);
    const history = useHistory();
    const [filter, setFilter] = useState("all");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.localStorage.setItem("tasks", JSON.stringify(taskList));
    }, [taskList]);

    const setColor = (index) => {
        const list = [...taskList];

            switch (list[index].priority) {
                case "normal":
                    return "info";
                case "onemli":
                    return "warning";
                case "acil":
                    return "danger";
                default:
                    return "info";
            }

    };


    const changePriority = (event, index) => {
        const list = [...taskList];
        list[index] = { ...list[index], priority: event.target.value };
        setTaskList(list);
    };
    const onOpenModal = (taskIndex) => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const deleteTask = (index) => {
        const list = [...taskList];
        list.splice(index, 1);
        setTaskList(list);
        onCloseModal();
    };

    const detailAdress = (index) => {
        history.push(`/detail/${index}`);
    };




    return (
        <div className="taskDisplay">
            <h3>Tasks:</h3>
            <Form>
                <FormGroup row>
                    <Label for="filter" sm={3} id="fTitle">
                        <h5>Filter :</h5>
                    </Label>
                    <Col sm={9}>
                        <Input
                            type="select"
                            name="filter"
                            id="filter"
                            onChange={(event) => setFilter(event.target.value)}
                        >
                            <option value="all" selected>
                                All
                            </option>
                            <option value="normal">Normal</option>
                            <option value="onemli">Önemli</option>
                            <option value="acil">Acil</option>
                        </Input>
                    </Col>
                </FormGroup>
            </Form>
            <ListGroup row>
                <Col sm={12}>
                    {taskList
                        ? taskList.map((task, taskIndex) => {
                            if (
                                filter === "all" ||
                                filter === task.priority
                            ) {
                                return (
                                    <ListGroupItem
                                        className="item"
                                        key={taskIndex}
                                        color={setColor(taskIndex)}
                                    >
                                        <div id="title">{task.name}</div>
                                        <Input
                                            type="select"
                                            name="priority"
                                            id="priority"
                                            onChange={(event) => changePriority(event, taskIndex)}
                                        >
                                            <option value="acil" selected={task.priority === "acil"}>
                                                Acil
                                            </option>
                                            <option
                                                value="onemli"
                                                selected={task.priority === "onemli"}
                                            >
                                                Önemli
                                            </option>
                                            <option
                                                value="normal"
                                                selected={task.priority === "normal"}
                                            >
                                                Normal
                                            </option>
                                        </Input>
                                        <Button
                                            outline
                                            color="danger"
                                            onClick={() => onOpenModal(taskIndex)}
                                            id="butt"
                                        >
                                            DEL
                                        </Button>
                                        <Button
                                            outline
                                            color="success"
                                            onClick={() => detailAdress(taskIndex)}
                                        >
                                            DETAIL
                                        </Button>
                                        <Modal open={open} onClose={onCloseModal} center>
                                            <h6 className="m-3">Are you sure you want to delete it?</h6>
                                            <div>
                                                <Button className="m-2" color="success" onClick={() => onCloseModal()}>Cancel</Button>
                                                <Button color="success" onClick={() => deleteTask(taskIndex)}>Approve</Button>
                                            </div>
                                        </Modal>
                                    </ListGroupItem>
                                );
                            } else {
                                return <div key={taskIndex}></div>;
                            }
                        })
                        : setTaskList([])}

                </Col>

            </ListGroup>


        </div>
    );
};

export default TasksDisplay;
