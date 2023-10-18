import Layout from '../../common/layout/Layout';
import './Youtube.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Youtube() {
	const [Youtube, setYoutube] = useState([]);

	const fetchYoutube = async () => {
		const api_key = process.env.REACT_APP_YOUTUBE_API;
		const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
		const pid = 'PLn_cQPHMkz8a2SAPIdpW3_2696iH0B13r';
		const num = 5;
		const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

		const data = await fetch(resultURL);
		const json = await data.json();
		console.log(json.items);
		setYoutube(json.items);
	};

	useEffect(() => {
		fetchYoutube();
	}, []);

	return (
		<>
			<Layout title={'Youtube'}>
				{Youtube.map((data, idx) => {
					let tit = data.snippet.title;
					let desc = data.snippet.description;
					let date = data.snippet.publishedAt;

					return (
						<article key={idx}>
							<div className='text_box'>
								<h2>{tit.length > 60 ? tit.substr(0, 60) + '...' : tit}</h2>
								<p>{desc.length > 180 ? desc.substr(0, 180) + '...' : desc}</p>
								<span>{date.split('T')[0].split('-').join('.')}</span>
							</div>

							<div className='pic'>
								<Link to={`/detail/${data.id}`}>
									<img
										src={data.snippet.thumbnails.standard.url}
										alt={data.title}
									/>
								</Link>
							</div>
						</article>
					);
				})}
			</Layout>
			=
		</>
	);
}
