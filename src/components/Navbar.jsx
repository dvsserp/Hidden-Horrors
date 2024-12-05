const Navbar = () => {
    return(
        <div>
            <nav className="flex flex-row justify-between top-0 bg-grey-900 border border-red-800 rounded-xl">
                <ul className="flex flex-row gap-8 m-5">
                    <li><a src="#">Home</a></li>
                    <li><a src="#">Characters</a></li>
                    <li><a src="#">Entities</a></li>
                    <li><a src="#">Game</a></li>
                </ul>
                <h1 className="mx-6 font-bold underline italic text-red-900">Hidden Horrors</h1>
            </nav>
        </div>
    )
}


export default Navbar