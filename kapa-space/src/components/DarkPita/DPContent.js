import './DP.css';
import STB1 from './images/Desktop - 1.png';
import STB2 from './images/Desktop - 2.png';
import STB3 from './images/Desktop - 3.png';
import STB4 from './images/Desktop - 5.png';
import STB5 from './images/Desktop - 8.png';
import NETFLIX_1 from './images/netf.gif';

import A1  from './images/A1.png';
import A2  from './images/A2.png';
import A3  from './images/A3.png';
import A4  from './images/A4.png';

function Break(){
    return (
        <div className="break"></div>
    );
}

// const NETFLIX_1 = "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/netflix_preview_disable.gif?v=1660857216480";
const YTPREVIEW = "https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_homepage_blkpreview.gif?v=1660683589579";
export default function DPContent(){
    return (
        <div className="dp-content content flex-left">
            
            <br />
            {/* <p className="subtitle">Intro</p> */}
            <Break/>
            
            <Break/>

            <p className='description notes'>
            From Design Transparency to Malleable Interfaces: Exploring End-User Interventions for Dark Patterns in UX

            
            </p>
            <p className='description'>Yuwen Lu*, Chao Zhang*, Yuewen Yang, Yaxing Yao, Toby Jia-Jun Li</p>
            <Break />
            <Break/>
            <Break/>

            <p className='notes'>
            Dark patterns are user interface design choices that benefit an 
            online service by coercing, steering, or deceiving users 
            into making unintended and potentially harmful decisions.
            </p>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <p className='description'>
                How can we empower the end users of these interfaces to recognize, understand, and take actions upon dark patterns?
            </p>
            <p className='description'>
                What are the potential alternatives to the current interface?
            </p>
            <p className='description'>
                How can end users change the interface as they like?
            </p>

            <Break />
            <Break />
            <Break/>
            
            

            <Break />
            <Break />
            <Break />
            <Break />
            <Break />
            <div className="workshops">
            <h2 className="subtitle">Co-design workshops</h2>
            <Break />
            <Break />
            <p className='description'>We conducted 5 co-design workshops with 12 participants to better understand
            users' experiences and relationships with dark patterns.</p>
            <Break />
            <p className='description'>
                Activities range from 🗣️ focus group discussion, 🔖 storyboard completion, and ✂️ redesign of printed-out website interfaces. 
            </p>

            <div className="stb-container">
                <img src={STB5} alt=" Preview" className="stb"/>
                <img src={STB1} alt=" Preview" className="stb"/>
                <img src={STB2} alt=" Preview" className="stb"/>
                {/* <img src={STB3} alt=" Preview" className="stb"/> */}
                <img src={STB4} alt=" Preview" className="stb"/>
                
            </div>
            </div>
            <Break />
            <Break />
            <Break />
            <Break />
            <div className="t-a">
                <h2 className="subtitle">Thematic Analysis</h2>
                <Break />
                <Break />
                <p className='description'>
                Users have mixed perceptions of dark patterns, which are formed based on user preferences, types of dark pattern instances, and usage contexts. 
                </p>
                <p className='description'>
                Users develop varied coping mechanisms based on their perceptions.
                </p>
                <p className='description descript'>
                Users are willing to know more about the design intension behind the products that they use to inform their own decision-making.
                </p>
                <Break />
                <p className='notes'>Part of the analysis board:</p>
                <div className="analysis-container">
                <img src={A1} alt=" Preview" className="analysis"/>
                <img src={A2} alt=" Preview" className="analysis"/>
                <img src={A3} alt=" Preview" className="analysis"/>
                <img src={A4} alt=" Preview" className="analysis"/>
                </div>
            </div>
            <Break />
            <Break />
            <Break />
            <Break />
            <Break />
            <Break />
            <div className="ext">
                <h2 className="subtitle">Chrome Extension as the Design Probe</h2>
                <Break />
                {/* <em className='description'>Awareness board: </em>  */}
                {/* <p className='description'>
                    Provide users with a list of alternative interface 
                    components so that they can change them as they like.
                </p> */}
                <Break />
                {/* <em className='description'>Action board: </em>  */}
                <p className='description'>
                    Provide users with a list of alternative interface 
                    components so that they can change them as they like.
                </p>
                <img src={YTPREVIEW} alt="Netflix Preview" className="preview"/>
                <img src={NETFLIX_1} alt="Netflix Preview" className="preview"/>
                <Break /><Break />
                <p className='description'>
                    2-week technology probe study : 
                </p>
                <Break />
                <p className='description'>
                    Deployed <em> Dark Pita </em>, 
                    the browser extension, to further explore users' 
                    underlying needs, preferences, and challenges related to the intervention 
                    of UX dark patterns in an everyday setting.
                </p>
                
            </div>

            <Break />
            <Break />
            
        
        </div>
    );
}
