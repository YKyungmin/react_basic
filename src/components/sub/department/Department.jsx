import Layout from '../../common/layout/Layout';
import { useEffect, useState, useRef } from 'react';
import './Department.scss';
const path = process.env.PUBLIC_URL;

export default function Department() {
	const refSliderWrap = useRef(null);
	const [Department, setDepartment] = useState([]);

	const next = () => {
		const wrap = refSliderWrap.current;
		wrap.append(wrap.firstElementChild);
	};

	const prev = () => {
		const wrap = refSliderWrap.current;
		wrap.prepend(wrap.lastElementChild);
	};

	useEffect(() => {
		fetch(`${path}/DB/department.json`)
			.then((data) => data.json())
			.catch((err) => console.log(err))
			.then((json) => {
				setDepartment(json.members);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Layout title={'Department'}>
			<div className='sliderBox'>
				<div className='but_box'>
					<button className='prev' onClick={prev}>
						prev
					</button>
					<button className='next' onClick={next}>
						next
					</button>
				</div>

				<section className='sliderWrap' ref={refSliderWrap}>
					<article>1</article>
					<article>2</article>
					<article>3</article>
					<article>4</article>
					<article>5</article>
				</section>
			</div>
			<section className='main'>
				<div className='left'>
					<h2 className='h_1'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
						libero at itaque <span className='h_2'>Aperia,</span> doloribus
						accusantium.
					</h2>
				</div>
				<div className='rigth'>
					<p className='p_1'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						totam illum iusto rem tenetur eligendi molestias repellendus, quod
						non magni quam repudiandae id reprehenderit odit, tempore ipsam
						beatae qui harum pariatur! Iusto sit fugiat labore ab incidunt
						consequuntur, odio. unde voluptates atque delectus, aliquam
						assumenda provident, maiores vero vitae hic. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Officiis totam illum iusto rem
						tenetur eligendi molestias repellendus, quod non magni quam
						repudiandae id reprehenderit odit, tempore ipsam beatae qui harum
						pariatur! Iusto sit fugiat labore ab incidunt consequuntur, odio
						unde voluptates atque delectus, aliquam assumenda provident, maiores
						vero vitae hic.
					</p>

					<p className='p_2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						totam illum iusto rem tenetur eligendi molestias repellendus, quod
						non magni quam repudiandae id reprehenderit odit, tempore ipsam
						beatae qui harum pariatur! Iusto sit fugiat labore ab incidunt
						consequuntur, odio. unde voluptates atque delectus, aliquam
						assumenda provident, maiores vero vitae hic. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Officiis totam illum iusto rem
						tenetur eligendi molestias repellendus, quod non magni quam
						repudiandae id reprehenderit odit, tempore ipsam beatae qui harum
						pariatur! Iusto sit fugiat labore ab incidunt consequuntur, odio
						unde voluptates atque delectus, aliquam assumenda provident, maiores
						vero vitae hic.
					</p>
				</div>
			</section>

			{/* 구분선 */}
			<div className='line_1'></div>

			<div className='mainbox'>
				<div className='textbox'>
					<div className='in_t_box'>
						<h3>
							Lorem ipsum <br />
							dolor sit amet.
						</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
							voluptas porro repellat rem nemo deleniti.
						</p>
					</div>
				</div>

				<div className='textbox'>
					<div className='in_t_box'>
						<h3>
							Lorem ipsum <br />
							dolor sit amet.
						</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
							voluptas porro repellat rem nemo deleniti.
						</p>
					</div>
				</div>

				<div className='textbox'>
					<div className='in_t_box'>
						<h3>
							Lorem ipsum <br />
							dolor sit amet.
						</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
							voluptas porro repellat rem nemo deleniti.
						</p>
					</div>
				</div>

				<div className='textbox'>
					<div className='in_t_box'>
						<h3>
							Lorem ipsum <br />
							dolor sit amet.
						</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
							voluptas porro repellat rem nemo deleniti.
						</p>
					</div>
				</div>
			</div>

			<div className='memberBox'>
				{Department.map((member, idx) => {
					return (
						<article key={idx}>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} alt={member.name} />
							</div>
							<h2>{member.name}</h2>
							<p>{member.position}</p>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}
