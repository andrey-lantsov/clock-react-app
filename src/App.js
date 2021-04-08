import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';


import './App.css';

function Task({task, index}) {
	return (
    <Toast>
      <Toast.Header>
        <strong className="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
		<Toast.Body>
			{task.title}
		</Toast.Body>
    </Toast>
	);
}

function CreateTask({addTask}) {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;

		addTask(value);
		setValue("");
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Control
				type="text"
				className="input"
				value={value}
				placeholder="Добавить новое дело..."
				onChange={(e) => setValue(e.target.value)}
			/>
		</Form>
	)
}


function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Съесть яблоко",
      completed: true
    },
    {
      title: "Cъесть обед",
      completed: false
    }
  ]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false}];
    setTasks(newTasks);
  };

  return (
    <Row sm={8}>
    <Container>
      <CreateTask addTask={addTask} />
    </Container>
      <Container>Блокнот</Container>
        <Container>
          {tasks.map((task, index) => (
            <Task
              task={task}
              index={index}
              key={index}
            />
          ))}
        </Container>
    </Row>
  )
}



export default App;
