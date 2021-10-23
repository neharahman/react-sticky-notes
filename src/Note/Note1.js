import React from 'react';
import { Card,Button} from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { pink,orange,blue } from '@mui/material/colors'
const Note1 = (props) =>{
    const deleteNote =()=>
    {
        props.deleteItem(props.id);

    }
    console.log(props)
    return (
        <>
            <div color="orange" className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <Card className="card_note p-3">
                    <span>{props.data.title}</span>
                    <hr></hr>
                    <span>{props.data.content}</span>
                    <br></br>
                    <span>{props.data.time}</span>
                    <Button className="mt-5"variant="outlined" onClick={deleteNote} style={{height:'5vh',widht:'5vh'}}>
                        <DeleteOutlineOutlinedIcon sx={{ color: orange[500] }}/>
                    </Button>
                </Card>
            </div>   
        </>
    );
}
export default Note1;