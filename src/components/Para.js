import About from "./About";
import Intrest from "./Intrest"

function Para(){
    return(
        <div className="flex flex-col gap-3 mx-6">
            <About />
            <Intrest />
        </div>
    )
}

export default Para