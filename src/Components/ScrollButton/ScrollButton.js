import React, {useState} from 'react';
import FaArrowCircleUp  from './scrollButton.png';


export const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
    };

    const scrollToTop = () =>{
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

return (<div>
    <button className='scrollButton' onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}}>
        <img src={FaArrowCircleUp} width='60px' alt=''/>
	</button>
    </div>
 );
}

export default ScrollButton;