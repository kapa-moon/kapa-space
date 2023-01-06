import Drag from "../Drag";
import Bubble from "../Bubble";

export default function DBlock() {
    return (
        <>
            <Drag title="🍲 Decider"
            offset={{ x: '20rem', y: '2rem' }} 
            target='/decider'
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
                    A mobile web app that helps groups of fiends find a place to hangout (or discover something new!)
                </p>
                <p style={{height: "7px"}}>{null}</p>
                <p>
                    Users can create a group and invite friends with a simple code. Similar to Kahoot!
                </p>
                </div>
            
        </div>
        
    );
}

function Bubbles(){
    return(
        <div className="flex justify-left">
            <Bubble type="Full stack Web App"></Bubble>
            <Bubble type="Agile"></Bubble>
            <Bubble type="React.js"></Bubble>
            <Bubble type="Node.js"></Bubble>
        </div>
    );
}