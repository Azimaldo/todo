import React from 'react';

const TaskList = (props) => (
    <div className="list">
        {
            props.items.map((item, index) =>
            <div><input key={index} type="text" name="firstname" placeholder={item}/>
            <span className="delete">d</span></div>
        )
        }
    </div>
);


export default TaskList;

