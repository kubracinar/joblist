import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { newTaskInput } from "../states/taskInput";
import { newPriorityInput } from "../states/priorityInput";
import { taskListArray } from "../states/taskList";
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

const TaskInput = () => {
    const [newTask, setNewTask] = useRecoilState(newTaskInput);
    const [newPriority, setNewPriority] = useRecoilState(newPriorityInput);
    const [taskList, setTaskList] = useRecoilState(taskListArray);
    const resetTask = useResetRecoilState(newTaskInput);

    const addTask = () => {
        const tasks = [...taskList];
        if (newTask && newPriority) {
            tasks.push({
                name: newTask,
                priority: newPriority,
                description: ""
            });
            setTaskList(tasks);
            resetTask();
        }
    };

    return (
        <div>
            <Form inline className="input">
                <FormGroup row>
                    <Label for="taskInput" sm={1}>
                        New Job:
                    </Label>
                    <Col sm={4}>
                    <Input
                        type="text"
                        name="taskInput"
                        value={newTask}
                        onChange={(event) => setNewTask(event.target.value)}
                        id="taskInput"
                        placeholder="Enter the Job Name"
                    /></Col>
                    <Label for="priorityInput" sm={1}>
                        Priority:
                    </Label>
                    <Col sm={4}>
                    <Input
                        type="select"
                        name="priorityInput"
                        id="priorityInput"
                        onChange={(event) => setNewPriority(event.target.value)}
                    >
                        <option selected disabled>
                            Select Priority
                        </option>
                        <option value="acil">Acil</option>
                        <option value="onemli">Önemli</option>
                        <option value="normal">Normal</option>
                    </Input></Col>
                    <Col sm={2} ><Button color="primary" onClick={addTask}>
                        +Create
                    </Button></Col>
                </FormGroup>

            </Form>
        </div>
    );
};

export default TaskInput;
