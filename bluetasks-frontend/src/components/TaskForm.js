import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TaskService from '../api/TaskService';


class TaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: {
                id: 0,
                description: "",
                WhenToDo: ""
            },
            redirect: false
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    }
    
    onSubmitHandler( event ){
        event.preventDefault();
        TaskService.save(this.state.task);
        this.setState({ redirect: true });
    }

    onInputChangeHandler( event ){
        //console.log(event.target.value)
        const field = event.target.name;
        const value = event.target.value;
        this.setState(prevState => ({ task: { ...prevState.task, [field]: value }}));
        //console.log(this.state.task);

    } 

    render() {
        if (this.state.redirect){
            return <Redirect to="/" />
        }

        return (
            <div>
                <h1>Cadastro da Tarefa</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="description">Descrição</label>
                        <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Digite a descrição"
                            onChange={this.onInputChangeHandler}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="whenToDo">Data</label>
                        <input type="date"
                            className="form-control"
                            name="whenToDo"
                            placeholder="Informe a data"
                            onChange={this.onInputChangeHandler}
                            />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-primary">Cancelar</button>
                    
                </form>

            </div>
        );
    }
}

export default TaskForm;