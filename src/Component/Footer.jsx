
const Footer = () => {
    return (
        <footer className="flex flex-col items-center mt-20 mb-3">
        <hr className="w-[80vw]" />
        <div className="flex flex-col items-center xl:flex-row xl:items-center gap-4 xl:gap-[7vw] mt-5 text-lg font-medium">
            <div><p className="text-center">Ashraful pathan || frontend developer</p> </div>
            <div className="flex flex-row items-center text-[1px] gap-3">
                <a href="https://www.linkedin.com/in/ashraful-pathan/" 
                target="_blank" rel="noopener noreferrer" className="border-none p-3 rounded-full border-4 bg-[#000000b7] ">
                    <img
                    src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                    alt="LinkedIn link"
                    width={30}
                    height={30}
                    />
                </a>
                <a href="https://github.com/AshrafulPatHan/Sojon_Portfulio "
                target="_blank" rel="noopener noreferrer" className="border-none p-3 rounded-full border-4 bg-[#000000b7] ">
                    <img
                    src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
                    alt="Github link"
                    width={30}
                    height={30}
                    />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100090953234693" 
                target="_blank" 
                rel="noopener noreferrer" className="border-none p-3 rounded-full border-4 bg-[#000000b7] ">
                    <img
                    src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                    alt="Facebook link"
                    width={30}
                    height={30}
                    />
                </a>
            </div>
            <div>
                <p className="text-center">Copyright &copy; 2025 Ashraful Pathan. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
    };

export default Footer;
