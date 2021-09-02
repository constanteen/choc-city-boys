import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { Button, CardActions, IconButton, TextareaAutosize } from '@material-ui/core';
import { client } from '../client';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		boxShadow: '0px 3px 4px #efefef',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 151,
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
	tweetInput: {
		width: '100%',
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

export default function TweetCard({ tweet }) {
	const classes = useStyles();
	const [editMode, setEditMode] = useState(false);
	const [tweeti, setTweeti] = useState(tweet);

  const handleUpdate = (e) => {
    setTweeti({
      ...tweeti,
      body: e,
    });
  } 

	const handleSubmit = () => {
		console.log(tweeti);
		client
			.put(`/comments/${tweeti.id}`, tweeti)
			.then((response) => {
        setEditMode(false);
				setTweeti(response.data)
			});
	};

	return (
		<Card className={classes.root}>
			{editMode ? (
				<CardContent className={classes.content}>
					<TextareaAutosize
						maxRows={12}
						className={classes.tweetInput}
						onChange={(e) => handleUpdate(e.target.value)}
						aria-label="textarea"
						defaultValue={tweeti.body}
					/>
					<div className={classes.buttons}>
						<Button
							variant="contained"
							color="primary"
							onClick={handleSubmit}
						>
							Submit
						</Button>
						<Button
							variant="contained"
							color="contained"
							onClick={() => setEditMode(false)}
						>
							Cancel
						</Button>
					</div>
				</CardContent>
			) : (
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5">
							{tweet.name}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							{tweet.body}
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton aria-label="add to favorites">
							<DeleteOutlineIcon />
						</IconButton>
						<IconButton
							aria-label="add to favorites"
							onClick={() => setEditMode(true)}
						>
							<EditIcon />
						</IconButton>
					</CardActions>
				</div>
			)}
		</Card>
	);
}
