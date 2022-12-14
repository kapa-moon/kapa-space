import './Yuewen.css';
import musicPic from './HappyMusic.png';


export default function YuewenContent(){
    return (
        <div className="yuewen-content content flex-left">
            
            <br />
            <p className=""><strong>Some Facts</strong></p>
            <br />
            <p className="">
                Before CS/Math at <strong>NYU CAS</strong>, I studied Global Liberal Studies at <strong>NYU Florence</strong>.
            </p>
            <p className="">
                I also spent some time at <strong>NYU SH</strong> during the COVID.
            </p>
            
            <br />
            <p className=""><strong>Some Other Facts</strong></p>
            <br />
            <p className="">
                I love design + visual stuff + music (jazz piano!!). 
            </p>
            <p className="">
                I also love mountain hiking, and simply wandering through cities. 
            </p>
            <br />
            <p className=""><strong>So...</strong></p>
            <br />
            <p className="">
                I found myself in the intersection of design and tech,<br/> and started to pursue a career in human-computer interaction and related fields.
            </p>
            {/* <p className="">
                Isn't building delightful applications the most exciting thing ever?
            </p> */}

            <br />
            <p className=""><strong>Some links</strong></p>
            <br />
            <a href="https://github.com/kapa-moon" target="_blank" rel="noopener noreferrer">GitHub</a>
            <br />
            <a href="https://www.linkedin.com/in/yuewen-yang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br />
            <a href="https://www.instagram.com/yuewenyyy/" target="_blank" rel="noopener noreferrer">Instagram</a>
            

            <img src={musicPic} className="pic-bg" />
        
        </div>
    );
}
