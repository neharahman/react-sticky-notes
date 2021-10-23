import React from 'react';
import './Note.css';
import Note1 from './Note1'
import { Card} from '@material-ui/core';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { pink,orange,blue } from '@mui/material/colors'
export default class Create extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title:'',
			content:'',
			data : []
		}
		this.InputEvent = this.InputEvent.bind(this);
        this.btnHandler = this.btnHandler.bind(this);
        this.onDelete = this.onDelete.bind(this);
	}
	InputEvent(e)
	{
		
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	btnHandler(e)
	{
		e.preventDefault();
        let x = this.state.data;
        let z=new Date();
        let hour=z.getHours();
        let minute=z.getMinutes();
        let time=`${hour}:${minute}`
		x.push({title:this.state.title,content:this.state.content,time:time})
		this.setState({
			data:x,
			title:'',
			content:''
		});

    };
    onDelete(id)
    {
        var a=this.state.data;
        a.splice(id,1);
        this.setState({
            data:a
        })
    };
	render() {
		
		return (
            <>
			<div className="row m-5">
            <div  className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <Card className="card_note p-3">
                <form className="main text-secondary">
                    <input 
                        name="title"
                        value={this.state.title}
                        onChange={this.InputEvent}
                        type="text"
                        placeholder="Title"
                        autoComplete="off"/>
                    <hr></hr>
                    <textarea 
                        name="content"
                        value={this.state.content}
                        onChange={this.InputEvent}
                        rows="" 
                        column="" 
                        placeholder="write a note"/>
                </form>
                <Button onClick={this.btnHandler} variant="outlined"  style={{height:'5vh',widht:'5vh'}}><AddIcon sx={{ color: pink[400] }}/></Button> 
            </Card>
            </div>
        </div>
        <div className="row">
        {this.state.data.map((result,index)=>
            	{
                    return <Note1 
                    id={index} 
                    key={index} 
                    data={result}
                    deleteItem={this.onDelete}/>
            	})
        	}
            
        </div>
        </>
		);
	}
}