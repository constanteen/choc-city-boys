import { useState } from "react";
import { Button, TextareaAutosize } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { client } from "../client";

const useStyles = makeStyles((theme) => ({
  tweetInput: {
    padding: '.5rem',
    width: '30rem',
    marginBottom: '1rem'
  }
}));

export default function TweetInput() {
  const [userInput, setUserInput] = useState('')
  const classes = useStyles();

  const handleSubmit = () => {
    console.log(userInput);
    client
      .post('/comments', {
        title: "This is a new Post",
        body: userInput,
      })
      .then((response) => {
        console.log(response)
      });
  }

  return (
    <div style={{textAlign: 'center'}}>
      <div>
        <TextareaAutosize maxRows={12} name="tweet" className={classes.tweetInput} onChange={(e) => setUserInput(e.target.value)} aria-label="empty textarea" placeholder="Empty" />
      </div>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}