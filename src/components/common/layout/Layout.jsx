/*
	1.Layout.jsx 를 왜 만들었는지 설명
*/

import './Layout.scss';

export default function Layout({ title, children }) {
	return (
		<section className={`layout ${title}`}>
			<figure></figure>

			<div className='content'>
				<h1>{title}</h1>
				{children}
			</div>
		</section>
	);
}

/*
	1. 리액트로 개발하는 프로젝트가 대단위 페이지이기 때문에 공통적인 틀 안에서 특정 변화점이 생겼을때 유지보수를 편하게 하려고 작성했습니다.

	-원래 서브 페이지를 따로 만들어서 작업중이였지만 서브 페이지의 구조를 변경할 일이 생겼는데 너무 반복작업이 많아져서 구글링을 한 결과 
	실무작업에서는 반복적은 페이지 패턴을 따로 컴포넌트로 만들어서 달라지는 부분만 props(프롭스)로 전달해서 호출하는 식으로 구현해 해봤습니다.
	(아직 많이 부족하지만 이 회사를 다니면서 실무적인 부분을 강화해 나가겠습니다)
*/
