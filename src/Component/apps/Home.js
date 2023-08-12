import React from 'react';
import "../../css/home.css";
function Home() {

	return (
	<>
<div class="container">
<div className="main-box">
	<ul>
	<li>
		<div className="txt-box">
		<div className="icons">
			<div className="img-box"><img src="imgs/map.png" alt="" /></div>
		</div>
		<div className="titles">
		
			<button className="btns font-20" id="camping">전국 캠핑장 지도</button>
		</div>
		<div className="infos">
			<span>편리하게 확인 가능한</span>
			<span>전국의 캠핑 지도 보러가기</span>
		</div>
		</div>
		<div className="img-box">
		<img src="./imgs/img_1.png" alt="" />
		</div>
	</li>
	<li>
		<div className="txt-box">
		<div className="icons">
			<div className="img-box"><img src="imgs/shop.png" alt="" /></div>
		</div>
		<div className="titles">
			<button className="btns font-20">캠핑 쇼핑몰</button>
		</div>
		<div className="infos">
			<span>한 번에 확인 가능한</span>
			<span>캠핑 쇼핑몰 목록 보러가기</span>
		</div>
		</div>
		<div className="img-box">
		<img src="imgs/img_2.png" alt="" />
		</div>
	</li>
	<li>
		<div className="txt-box">
		<div className="icons">
			<div className="img-box"><img src="imgs/talk.png" alt="" /></div>
		</div>
		<div className="titles">
			<button className="btns font-20">커뮤니티 게시판</button>
		</div>
		<div className="infos">
			<span>캠핑러들의 소통 공간</span>
			<span>캠핑 꿀팁과 질문을 공유해보세요!</span>
		</div>
		</div>
		<div className="img-box">
		<img src="imgs/img_3.png" alt="" />
		</div>
	</li>
	</ul>
</div>
</div>
</>
	);
}

export default Home;