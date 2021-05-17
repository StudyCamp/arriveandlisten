import { useState } from 'react'

const Navbar = (props) => {
    const [hideShowElement, setHideShowElement] = useState('block') 

    const handleClick= () => {
        { hideShowElement === 'block' && setHideShowElement('none') }
        { hideShowElement === 'none' && setHideShowElement('block') }
        console.log('clicked')
    }

    return ( 
        <nav className="navbar">
            <p className="hide-btn" onClick={handleClick} >Open/Close</p>
            <div className="nav-content" style={{display: hideShowElement }}>
                <ul>
                    <li className="nav-button" onClick={() => { 
                        props.handleClickHome('pZcKpivKu5Y') }}>Toronto</li>
                    <li className="nav-button" onClick={() => { 
                        props.handleClickHome('h-tk7l-zVjg') }}>Hong Kong</li>
                    <li className="nav-button" onClick={() => { 
                        props.handleClickHome('aK8o2R_FDmI')}}>Ikebukuro</li>
                    <li className="nav-button" onClick={() => { 
                        props.handleClickHome('xnybGgcArSU')}}>Macau </li>
                    <li className="nav-button" onClick={() => { 
                        props.handleClickHome('sdzh5HT2bmQ')}}>Seoul</li>
                    <li className="nav-button" onClick={() => { 
                        props.handleClickHome('Y9kJjagrOdc')}}>Shibuya</li>
                    <li className="nav-button" onClick={() => { 
                        props.handleClickHome('HHzkIWaKC54')}}>Taipei</li>
                    <li className="nav-button" onClick={() => { 
                        props.handleClickHome('w_NM14iljsE')}}>City Bus: Seoul</li>
                </ul> 
                <ul>
                    <li className="nav-button">
                        <a href='https://github.com/StudyCamp/arriveandlisten' 
                            target="_blank">Github</a></li>
                </ul>
            </div>
       
        </nav>
    )
};
export default Navbar;