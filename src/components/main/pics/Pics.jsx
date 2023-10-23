import { useRef, useEffect } from 'react';
import './Pics.scss';

function Pics() {
	const frame = useRef(null);
	const box = useRef(null);

	const handleScroll = () => {
		const pos = frame.current.offsetTop;
		let scroll = window.scrollY;
		//해당 스크롤값이 Pics 영역에 도달했을때 0으로 보정해놓은 값
		let scroll2 = scroll - pos;

		console.log('scroll', scroll);
		console.log('scoll2', scroll2);

		//가로 스크롤 wrapping 섹션 안에 들어왔을때
		if (
			scroll >= pos &&
			scroll < pos + frame.current.clientHeight - window.innerWidth
		) {
			console.log('활성화영역 안쪽으로 들어옴');
			box.current.style.position = 'fixed';
			box.current.style.left = -scroll2 + 'px';
			box.current.style.top = '0px';
			//활성화 영역 스크롤 아래쪽으로 벗어났을떄
		} else if (scroll >= pos + frame.current.clientHeight - window.innerWidth) {
			console.log('활성화 섹션 아래쪽으로 벗어남');
			box.current.style.position = 'absolute';
			box.current.style.top =
				frame.current.clientHeight - window.innerWidth + 'px';
			box.current.style.left = -window.innerWidth * 3 + 'px';
			//활성화 영역 스크롤 위쪽으로 벗어났을때
		} else {
			console.log('활성화 영역 위쪽으로 벗어남');
			box.current.style.position = 'absolute';

			box.current.style.top = '0px';
			box.current.style.left = '0px';
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		// return () => {
		// 	window.removeEventListener('scroll', handleScroll);
		// };
	}, []);
	return (
		<section className='myScroll pics' ref={frame}>
			<article ref={box}>
				<div>
					<img src='/img/p_1.jpg' alt='' />
					<div className=' pp_1'>
						<h2>Lorem, ipsum dolor.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
							debitis vel voluptatibus aliquam. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Earum debitis vel voluptatibus
							aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Earum debitis vel voluptatibus aliquam. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Earum debitis vel voluptatibus
							aliquam.
						</p>
					</div>
				</div>

				<div>
					<img src='/img/p_2.jpg' alt='' />
					<div className=' pp_1'>
						<h2>Lorem, ipsum dolor.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
							debitis vel voluptatibus aliquam. Lorem, ipsum dolor.
						</p>
					</div>
				</div>
				<div>
					<img src='/img/p_3.png' alt='' />
					<div className=' pp_1'>
						<h2>Lorem, ipsum dolor.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
							debitis vel voluptatibus aliquam. Lorem ipsum dolor sit amet
							consectetur.
						</p>
					</div>
				</div>
				<div>
					<img src='/img/p_4.jpg' alt='' />
					<div className=' pp_1'>
						<h2>Lorem, ipsum dolor.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
							debitis vel voluptatibus aliquam. Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Tenetur ipsa veniam quis molestias
							sint amet.
						</p>
					</div>
				</div>
				<div>
					<img src='/img/p_5.jpg' alt='' />
					<div className=' pp_1'>
						<h2>Lorem, ipsum dolor.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
							debitis vel voluptatibus aliquam. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Amet tenetur quas facere itaque, ab
							corporis alias, minus sit nemo quasi nihil molestias veniam soluta
							harum iusto libero excepturi, molestiae perferendis?
						</p>
					</div>
				</div>
			</article>
		</section>
	);
}

export default Pics;
