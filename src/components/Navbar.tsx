import { CiWifiOn } from "react-icons/ci";
import { CiWifiOff } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";


const Navbar = () => {
    const isConnected = true
    return (
        <nav className="p-3 border-b border-borderColor flex justify-end items-center space-x-4 fixed w-full z-50 bg-black">
            <section className={`flex flex-row items-center space-x-1 py-1 px-3 rounded-full text-sm ${isConnected ? "bg-[#032E15] text-[#05D248]" : "bg-[#1E2939] text-gray-400"}`}>
                {isConnected ? <CiWifiOn className="text-lg" /> : <CiWifiOff className="text-lg" />}
                <h1>{isConnected ? "Connected" : "Disconnected"}</h1>
            </section>

            <section>
                <IoMdNotificationsOutline className="text-2xl" />
            </section>
        </nav>
    )
}

export default Navbar