import React, { useState } from 'react';
import './Note.css';
import Note1 from './Note1'
import { Card} from '@material-ui/core';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { pink,orange,blue } from '@mui/material/colors'
const CreateNote = (props) =>{
    const [note,setNote]=useState({
        title:"",
        content:""
    })
    const InputEvent = (e) =>
    {
        console.log(e.target.value);
        console.log(e.target.name);
        const accessValue=e.target.value;
        const accessName=e.target.name;
        setNote((previousValue)=>{
            
            if(accessName==="title")
            {
                return{
                    title:accessValue,
                    content:previousValue.content
                }
            }
            else if(accessName==="content")
            {
                return{
                    title:previousValue.title,
                    content:accessValue
                }
            }

        })
    }
    const [value2,setValue2]=useState([{
        title1:"",
        content1:""
    }]);
    let y="";
    const btnHandler = (e) =>{
        e.preventDefault();
        setValue2([
            {
            title1:note.title,
            content1:note.content
            }])
                if(value2.length>0)
                {
                y = value2.map(result => <Note1 data2={result.content1}data1={result.title1}/>)
                }
                else
                {
                
                }
            }
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
                <Button onClick={btnHandler} variant="outlined"  style={{height:'5vh',widht:'5vh'}}><AddIcon sx={{ color: pink[400] }}/></Button> 
            </Card>
            </div>
        </div>
    );
}

export default CreateNote;