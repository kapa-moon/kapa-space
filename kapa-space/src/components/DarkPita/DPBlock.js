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
                <p>A technology probe that investigates empowering end users in terms of contearating the dark patterns in UX/UI design.</p>
            </div>
            {/* <br></br> */}
        </div>
        
    );
}

function Bubbles(){
    return(
        <div className="flex justify-left">
            <Bubble type="HCI Research"></Bubble>
            <Bubble type="Chrome Extension"></Bubble>
            <Bubble type="Notre Dame"></Bubble>
        </div>
    );
}