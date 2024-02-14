import { TaskBar, List, } from '@react95/core'
import "./style.css"
import { Brush, Mail } from '@react95/icons';

function Taskbar() {
    return (
        <TaskBar
            list={
                <List >
                    <List.Item className="" icon={<Brush />}>
                        <a href={"https://github.com/React95/React95"} className='task-a' rel="noreferrer" target="_blank">Built with React95</a>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="" icon={<Mail />}>
                        <a href={"mailto:laurenahn@berkeley.edu"} className='task-a' rel="noreferrer" target="_blank">Say hello!!</a>
                    </List.Item>
                </List>
            }
        />
    )
}

export default Taskbar
