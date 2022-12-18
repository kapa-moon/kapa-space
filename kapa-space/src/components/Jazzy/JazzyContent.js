import './Jazzy.css';
import J1 from './images/Slide 16_9 - 2.png';
import J2 from './images/Slide 16_9 - 3.png';
import J3 from './images/Slide 16_9 - 4.png';
import J4 from './images/Slide 16_9 - 5.png';
import J5 from './images/J5.gif';
import J6 from './images/J6.gif';
import J7 from './images/J7.gif';
import J8 from './images/J8.gif';
import J9 from './images/J9.gif';
import S1 from './images/Slide 16_9 - 11.png';
import S3 from './images/Slide 16_9 - 13.png';
import S4 from './images/Slide 16_9 - 14.png';
import S5 from './images/Slide 16_9 - 15.png';
import S6 from './images/Slide 16_9 - 16 (1).png';
import S7 from './images/Slide 16_9 - 17 (1).png';
import S8 from './images/Slide 16_9 - 18 (1).png';

function Break(){
    return (
        <div className="break"></div>
    );
}

export default function JazzyContent(){
    return (
        <div className="dp-content content flex-left">
            
            <br />
            <p className="notes">IMA Real-time Social Space, Fall 2022</p>
            {/* <p className="subtitle">Intro</p> */}
            
            <Break/>
            <Break/>

            <p className='description'>
                Explore building 3D environment that supports multi-user interaction with JavaScript and p5LiveMedia.
            </p>
            <Break/>
            <Break/>
            <Break/>
            <p className='subtitle'>
                The Project
            </p>
            <Break/>
            <p className='description'>
                JazzyCozy is a space that represents the memory, imagination, feelings of me listening to jazz piano music.
            </p>
            <Break/>
            <div className="j-container">
                <img src={J1} alt="JazzyCozy Preview" className="jazz"/>
                <img src={J2} alt="JazzyCozy Preview" className="jazz"/>
                <img src={J3} alt="JazzyCozy Preview" className="jazz"/>
            </div>
            

            <Break/>
            <p className='description'>
                What if music applications have features that allow users to have a shared space and experience?
            </p>
            <p className='description'>
                What if there are various interfaces to choose from that are more lively and fit the music itself better?
            </p>

            <div className="j-container">
                <img src={J7} alt="JazzyCozy Preview" className="jazz"/>
                
                <img src={J9} alt="JazzyCozy Preview" className="jazz"/>
            </div>

            <div className="j-container">
                <img src={J6} alt="JazzyCozy Preview" className="jazz"/>
                <img src={J8} alt="JazzyCozy Preview" className="jazz"/>
            </div>

            <div className='jazzy'><a href="https://kapa-moon.github.io/real-time-space/" target="_blank" rel="noreferrer" className='notes'>Link to prototype (laptop-only)</a>
            </div>

                

            
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <Break/>

            <Break/>
            <Break/>

            <div className="space">
                <h2 className="subtitle">Exploring the concept of Space v.s. Place</h2>
                <a href="https://dl.acm.org/doi/10.1145/240080.240193" target="_blank" rel="noreferrer" className='notes'>Reference: Re-place-ing space: the roles of place and space in collaborative systems</a>
                <Break />
                <p className='description'>
                    How can we identify the right medium for the right purpose, given the broad range of choices and 
                    technology advances available to us?
                </p>
                <p className='description'>
                    What are the unique affordances of each? 
                </p>
                <p className='description'>
                    Is 3D neccessarily better than 2D, or the other way around?
                </p>
                <p className='description'>
                   What are the contributing factors to our decisions?
                </p>
                <img src={S1} alt=" Preview" className="preview"/>
                <img src={S3} alt=" Preview" className="preview"/>
                <img src={S4} alt=" Preview" className="preview"/>
                <img src={S5} alt=" Preview" className="preview"/>
                <img src={S6} alt=" Preview" className="preview"/>
                <img src={S7} alt=" Preview" className="preview"/>
                <img src={S8} alt=" Preview" className="preview"/>
                <Break /><Break />
                <Break />
                
            </div>

            <Break />
        
        </div>
    );
}
