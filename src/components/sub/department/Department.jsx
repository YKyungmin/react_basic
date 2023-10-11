import Layout from '../../common/layout/Layout';
import { useEffect, useState } from 'react';
import './Department.scss';
const path = process.env.PUBLIC_URL;

export default function Department() {
	const [Department, setDepartment] = useState([]);

	useEffect(() => {
		fetch(`${path}/DB/department.json`)
			.then((data) => data.json())
			.then((json) => {
				setDepartment(json.members);
			});
	}, []);

	return (
		<Layout title={'Department'}>
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

/*
	1. hook 의 개념
	-리액트에서는 크게 2가지 종류의 파일이 존재
		-컴포넌트 (화면의 가상 DOM 을 랜더링 하는 JSX를 무조건 리턴)
		-hook (JSX를 리턴하는것이 아닌 각 컴포넌트 마다 자주쓰는 기능의 함수나 특정 값을 리턴하는 기능파일 )

	2. useState, useEffect, useRef (리엑트에서 제일 많이쓰는 기본 hook)
		- useState: 화면에 랜더링을 담당하는 중요한 정보를 담아주고 변경해주는 훅 (state 가 변경되면 컴포넌트는 재호출 되면서 화면 재랜더링)
		- useEffect: 컴포넌트의 생성, 변경, 소멸시마다 (컴포넌트의 생명주기마다) 특정 구문을 호출할 수 있는 hook 
		- useRef: 참조객체에 실시간으로 특정 정보값을 담기 위한 hook (래당 렌더링 사이클에서 최신 가상DOM 을 담을때, 특정값을 담아두고 변경할 때 컴포넌트를 재 랜더링 시키로 싶지 않을때 (모션 작업))

	3.컴포넌트가 하는 역할 (JSX)

	4.fetch문을 useEffect안쪽에서 호출하는 이유 
*/
