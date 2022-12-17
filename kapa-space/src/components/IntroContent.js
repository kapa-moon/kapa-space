import './Intro.css'
import musicPic from '../images/HappyMusic.png';


function IntroContent(){
    return (
        <div className="intro-content content flex-left">
            <h3 className="text-3xl font-bold">Some Facts</h3>
            <p className="">Hi! I'm Yuewen, a software engineer based in 
            San Francisco, CA. I'm passionate about building products 
            that are useful and delightful to use. 
            I'm currently working at 
            <a href="https://www.uber.com/us/en/" target="_blank" rel="noopener noreferrer">Uber</a> 
            as a Software Engineer on the 
            <a href="https://www.uber.com/us/en/ride/uber-eats/" target="_blank" rel="noopener noreferrer">
                Uber Eats</a> team.
            </p>
            

            <img src={musicPic} className="pic-small" />
        
        </div>
    );
}

export default IntroContent;