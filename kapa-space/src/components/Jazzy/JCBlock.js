import Drag from "../Drag";
import Bubble from "../Bubble";

export default function JCBlock() {
    return (
        <>
            <Drag title="🎹 JazzyCozy" 
            offset={{ x: '10rem', y: '4.2rem' }} 
            target='/jazzycozy'
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
                <p>
                    A 3D social space prototype built on the concept of
                </p>
                <p style={{height: "10px"}}>{null}</p>
                <p> real-time experience for multiple users to share music + expressing personal feelings toward jazz piano pieces</p>
            </div>
            <p style={{height: "10px"}}>{null}</p>
        </div>
        
    );
}

function Bubbles(){
    return(
        <div className="flex justify-left">
            <Bubble type="p5LiveMedia"></Bubble>
            <Bubble type="JavaScript"></Bubble>
            <Bubble type="3D"></Bubble>
        </div>
    );
}