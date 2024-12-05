const Navbar = () => {
    return(
        <div>
            <nav className="flex flex-row justify-between break-keep">
                <ul className="flex flex-row gap-8 m-5">
                    <li>Home</li>
                    <li>Characters</li>
                    <li>Entities</li>
                    <li>Game</li>
                </ul>
                <h1 className="mx-6 font-bold underline italic">Hidden Horrors</h1>
            </nav>
        </div>
    )
}


export default Navbar