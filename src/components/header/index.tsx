export function Header() {
    return(
        <header className="w-full fixed z-10 top-5 md:top-10">
            <div className="bg-blue-700/50 backdrop-blur-md flex justify-between w-[100%] md:w-[70%] mx-auto p-2 md:rounded-[5px]">
                <h2 className="text-emerald-400 font-bold text-3xl hidden md:block "> {"isName(() => 'Iago Bruno' );"}</h2>
                <ul className="text-gray-300 font-bold flex gap-4 text-2xl">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </div>
        </header>
    );
}