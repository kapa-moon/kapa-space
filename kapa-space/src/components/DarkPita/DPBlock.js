import Drag from "../Drag";
import Bubble from "../Bubble";

export default function DPBlock() {
    return (
        <>
            <Drag title="🥙 Dark Pita" 
            offset={{ x: '22rem', y: '5rem' }} 
            target='/darkpita' 
            p={<Description/>}
            bubbles={<Bubbles/>}></Drag>
        </>
    );
}

function Description(){
    return(
        <div>
            <br/>
            <div>
                <p>A technology probe, in the form of browser extension, that explores empowering end users by personalized modification of user interfaces.</p>
            </div>
            {/* <br></br> */}
        </div>
        
    );
}

function Bubbles(){
    return(
        <div className="flex justify-left">
            <Bubble type="HCI Research"></Bubble>
            <Bubble type="Dark Patterns"></Bubble>
            <Bubble type="Chrome Extension"></Bubble>
            <Bubble type="Notre Dame"></Bubble>
        </div>
    );
}