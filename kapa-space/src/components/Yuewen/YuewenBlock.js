import Drag from "../Drag";
import Bubble from "../Bubble";

export default function YuewenBlock() {
    return (
        <>
    <Drag title="Yuewen Yang" offset={{ x: '9rem', y: '4rem' }} target='/yuewen'
    p={<Description/>} bubbles={<Bubbles/>}> </Drag>
        </>
    );
}

function Description(){
    return(
        <div>
            <div>
                <p>"Nice to meet you!"</p>
                <p style={{height: "10px"}}>{null}</p>
                <p>I just graduated from New York University with a degree in Math and Computer Science.
                </p>
            </div>
        </div>
        
    );
}

function Bubbles(){
    return(
        <div className="flex justify-left">
            <Bubble type="CS/HCI"></Bubble>
            <Bubble type="NYC"></Bubble>
            <Bubble type="Kunming`China"></Bubble>
        </div>
    );
}