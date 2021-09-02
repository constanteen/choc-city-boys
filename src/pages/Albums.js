import { useEffect, useState } from 'react';
import { client } from '../client';

function Albums() {
	const [response, setResponse] = useState(null);

	const fetchData = () => {
		client
			.get('/albums')
			.then((res) => {
				setResponse(res.data);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="App">
			<h1>Albums</h1>
			{response?.map((res) => (
				<p key={res.id}>{res.title}</p>
			))}
		</div>
	);
}

export default Albums;
