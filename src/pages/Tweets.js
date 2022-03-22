import { useEffect, useState } from 'react';
import TweetInput from '../components/TweetInput';
import { Grid } from '@material-ui/core';
import TweetCard from '../components/TweetCard';
import { client } from '../client';

function Tweets() {
	const [response, setResponse] = useState(null);

	useEffect(() => {
		const fetchData = () => {
			client
				.get('/comments')
				.then((res) => {
					setResponse(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fetchData();
	}, []);

	return (
		<div>
			<TweetInput />
			<Grid container spacing={3}>
				{
					response?.map(res => (
						<Grid item xs={12} sm={12} key={res.id}><TweetCard tweet={res} /></Grid>
					))
				}
			</Grid>
		</div>
	);
}

export default Tweets;
