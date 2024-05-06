export default function Header() {
    return (
        <header className="relative w-56">
            <h1 className=" pl-6 font-inria-sans font-light text-5xl text-wrap z-10 w-56 relative">mayaArza<br></br>paloBjörk<br></br>lund</h1>
            <div className="flex flex-col gap-4 top-0 w-56 absolute z-0  mt-4">
                <div className=" bg-highlight-h1 h-8 "></div>
                <div className=" bg-highlight-h1 h-8 "></div>
                <div className=" bg-highlight-h1 h-8 w-28"></div>
            </div>
        </header>
    )
}