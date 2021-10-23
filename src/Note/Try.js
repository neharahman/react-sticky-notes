import React, { useState } from 'react';
import './Note.css';
import Note1 from './Note1'
import { Card} from '@material-ui/core';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { pink,orange,blue } from '@mui/material/colors'
const Try = (props) =>{
    const [note,setNote]=useState({
        title:"",
        content:"",
    });
    const InputEvent = (event) =>
    {
        //object destructuring
        const {name,value}=event.target;
        //const accessValue=event.target.value;
        //const accessName=event.target.name;
        setNote((prev) =>{
            return{
                ...prev,
                [name]:value,
            };
        });
        console.log('hey'+note);
    };
    return (
        <div className="row m-5">
            <div color="orange" className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <Card className="card_note p-3">
                <form class="main text-secondary">
                    <input 
                        name="title"
                        value={note.title}
                        onChange={InputEvent}
                        type="text"
                        placeholder="Title"
                        autoComplete="off"/>
                    <hr></hr>
                    <textarea 
                        name="content"
                        value={note.content}
                        onChange={InputEvent}
                        rows="" 
                        column="" 
                        placeholder="write a note"/>
                </form>
                <Button  variant="outlined"  style={{height:'5vh',widht:'5vh'}}><AddIcon sx={{ color: pink[400] }}/></Button> 
            </Card>
            </div>
        </div>
    );
}

export default Try;