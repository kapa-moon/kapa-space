import Drag from "../Drag";
import Bubble from "../Bubble";

export default function JCBlock() {
    return (
        <>
            <Drag title="🎨 Graphics" 
            offset={{ x: '24rem', y: '1rem' }}
            target='/graphics'
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
                <p>Some projects built in the <em>Computer Graphics</em> class, covering topics such as raytracing, animation, splines, and interactions.</p>
            </div>
            {/* <br></br> */}
        </div>
        
    );
}

function Bubbles(){
    return(
        <div className="flex justify-left">
            <Bubble type="JavaScript"></Bubble>
            <Bubble type="GLSL"></Bubble>
            <Bubble type="3D"></Bubble>
        </div>
    );
}