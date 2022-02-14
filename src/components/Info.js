import Image from "./Image";

function Info(){
    return(
        <div className="flex flex-col gap-3">
            <Image />
            <div className="flex flex-col gap-2 text-white">
                <div className="flex flex-col justify-center items-center tracking-wider">
                    <h1 className="text-3xl font-semiBold">Laura Smith</h1>
                    <p className=" text-sm">Frontend Devloper</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <div>
                        <a href="#" className="text-xs">Hello@gmail.com</a>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-blue-500 text-white text-lg w-24 h-9 rounded">Email</button>
                        <button className="bg-pink-500 text-white text-lg w-24 h-9 rounded">Linkedin</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Info;