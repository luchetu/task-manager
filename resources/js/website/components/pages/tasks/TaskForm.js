import React from "react";

const TaskForm = () => {
    return (
        <div>
            <form className="form">
                <input
                    type="text"
                    placeholder="Add Task..."
                    required
                    className="task-input"
                />

                <input type="datetime-local" className="task-input"></input>

                <textarea placeholder="Description" className="task-input" />

                <select className="task-input">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">
                        Coconut
                    </option>
                    <option value="mango">Mango</option>
                </select>
                <div className="buttons">
                    <button type="submit" className="btn add-task-btn"></button>
                    <button className="btn clear-btn">Clear</button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
