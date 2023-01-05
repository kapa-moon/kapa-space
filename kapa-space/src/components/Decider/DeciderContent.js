import './Decider.css';
import D1 from './images/D1.png';
import D2 from './images/D2.png';
import create from './images/create.gif';
import vote from './images/vote.gif';
import add from './images/add.gif';
import search from './images/search.gif';
import join from './images/join.gif';



function Break(){
    return (
        <div className="break"></div>
    );
}

export default function DeciderContent(){
    return (
        <div className="dp-content content flex-left"> 
            <Break/>
            <Break/>
            
            <p className="notes">
                Technology Stack: React, Node.js, Express, MongoDB, geopify API, Digital Ocean, Docker
            </p>
            <Break/>
            <Break/>
            <p className='description'>
                Going out with a group friends is exciting!! </p>
            <p className='description'>
                But sometimes it can take a WHILE to find a nice place to hangout. 
            </p>
            <p className='description'>
                Usually, we a place in the group chat, send web link or google maps link, and let the group comment. 
                Another friend did the same thing, and then another.
            </p>
            <p className='description'>
                "Wait, I think the second one is good. What's the name again? <br>
                </br> It's flooded in the messages lol..."
            </p>

            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <img src={D2} alt="Decider Preview" className="preview"/>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <p className='description'>
                Decider is a hub for you and group of friends share and decide where to go to. You can also discover some new places nearby, including 
                restaurants, cafe, shops, or museum exhibitions and parks. It's conveinent and mobile-first. Registration is not required, but you can create an account to save your favorite places!"
            </p>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <Break/>
            <div className="container">
            <div className='sub'>  
                <p className='description'> Create a Group! </p>
                <img src={create} alt="Decider Preview" className="preview"/>  
            </div>
            <div className='sub'>  
                <p className='description'> Invite your friends with a code. </p>
                <img src={join} alt="Decider Preview" className="preview"/>  
            </div>
            <div className='sub'>  
                <p className='description'> Invite your friends with a code. </p>
                <img src={join} alt="Decider Preview" className="preview"/>  
            </div>
            <div className='sub'>  
                <p className='description'> Search/Add places to the group. </p>
                <img src={search} alt="Decider Preview" className="preview"/>  
            </div>
            <div className='sub'>  
                <Break/>
                <Break/>
                <Break/>
                <Break/>
                <Break/>
                <img src={add} alt="Decider Preview" className="preview"/>  
            </div>
            <div className='sub'>  
                <p className='description'> Vote on places. </p>
                <img src={vote} alt="Decider Preview" className="preview"/>  
            </div>

            

            

            <Break/>
            <Break/>
            <Break/>
            
            
            </div>
            

            <Break/>
         
            <Break/>   
            <Break/>
            <Break/>
            <p className="notes">
                More features coming, and here's 
            
                <a href="http://164.90.254.52:3000/" target="blank" className=""> link </a>
                to the current version.
                <br />
                In case it's not hosted due to limited credits, here's a sneak peek on 
                        <a href="https://github.com/agiledev-students-fall2022/final-project-team-decider" target="blank" className=""> Github</a>
            </p>



        </div>
    );
}
