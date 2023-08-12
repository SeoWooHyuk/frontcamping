import React, { useState } from 'react';
import "../../css/header.css";

function Header() {
	const [isActive, setIsActive] = useState(false);

	const handleButtonClick = () => {
		setIsActive(true);
	};


	return (
	<header>
	<div class="container">
	<div className="top-bar">
        <div className="logo-box">
        <div className="logos">
            <a href="#">
            <div className="logo">
                <h1>Camping In.</h1>
			</div>
			<div className="logo-txt">
			<span>캠핑의 즐거움을 찾아나서는 여정</span>
			</div>
		</a>
		</div>
	</div>
        
        <div className="btn-box" id="loginout">
		<button class="btns popup-btn" onClick={handleButtonClick} >로그인</button>
		<button class="btns popup-btn-2" >회원가입</button>
        </div>

	</div>
	</div>
	
    

	
	</header>
		
	);
}

export default Header;