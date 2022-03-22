import { useEffect, useState } from 'react';
import ArtistCard from '../components/ArtistCard';
import Grid from '@material-ui/core/Grid';
import { client } from '../client';

function Artists() {
  const [response, setResponse] = useState(null);

	useEffect(() => {
		const fetchData = () => {
			client
				.get('/users')
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
			<Grid container spacing={3}>
				{
					response?.map(res => (
						<Grid item xs={12} md={4} sm={6} key={res.id}><ArtistCard artist={res} /></Grid>
					))
				}
			</Grid>
		</div>
	);
}

export default Artists;
