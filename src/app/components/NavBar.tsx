"use clinet";
import { Jost } from "next/font/google";
import Link from "next/link";
import { LuUserRound,LuHeart, LuShoppingBag,LuHeadphones,LuSearch } from "react-icons/lu";
import Marquee from "react-fast-marquee";
const jost = Jost({
    weight:"400",
    subsets:["latin"]

})
export default function Navbar(){
    return (
        <>
        <div className={`${jost.className}  overflow-hidden`}>
            {/* top top bar */}
            <div className="bg-[url('/top-bg.png')] bg-cover bg-center text-white py-2">
            <Marquee autoFill pauseOnHover >
           <span className="px-10">🧨 SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</span>
            </Marquee>
            </div>
            {/* top top bar end */}
            {/* middel bar */}
            <div className="bg-black flex justify-between text-white">
                {/* navsitem */}
                <div className="flex">
                <div className="border-r border-white py-2 px-3 hover:bg-white hover:text-black text-2xl"><Link href="#">ELLA</Link></div>
                <div className="border-r border-white py-2 px-3 hover:bg-white hover:text-black text-2xl"><Link href="#">GENTLEMAN</Link></div>
                <div className="border-r border-white py-2 px-3 hover:bg-white hover:text-black text-2xl"><Link href="#">Belle Doll</Link></div>
                <div className="border-r border-white py-2 px-3 hover:bg-white hover:text-black text-2xl"><Link href="#">Amber.</Link></div>
                <div className="border-r border-white py-2 px-3 hover:bg-white hover:text-black text-2xl"><Link href="#">GLASSY</Link></div>

                </div>
                {/* navsitem end */}
                <div className="flex items-center pr-3">

                    <div className="text-sm px-2 ">EXTRA 10% OFF ON FIRST ORDER</div>
                    <div className=" px-2 text-2xl hover:scale-150"><LuUserRound /></div>
                    
                    <div className=" px-2 text-2xl hover:scale-150 relative"><LuHeart />
                    <div className="absolute text-sm right-0 rounded-full px-1 bg-white top-0 text-black">
                        0
                    </div>
                    
                    </div>
                    <div className=" px-2 text-2xl hover:scale-150 relative"><LuShoppingBag />
                    <div className="absolute text-sm right-0 rounded-full px-1 bg-white top-0 text-black">
                        0
                    </div>
                  
                    
                    </div>
                    <div className=" px-2 text-2xl hover:scale-150"><LuHeadphones /></div>
                </div>
            </div>
            {/* middle bar end  */}
            {/* bottom bar  */}
            <div className="flex justify-between items-center px-2 py-5">
                <div className="flex  items-center">
                     <h1 className="text-3xl mr-20"><strong>ELLA</strong></h1>
                <div className="flex ">
                    <div className="px-4 text-black text-sm"> NEW GENTLEMAN</div>
                    <div className="px-4 text-black text-sm"> TREND</div>
                    <div className="px-4 text-black text-sm"> COLLECTION</div>
                    <div className="px-4 text-black text-sm"> LOOKBOOK</div>
                </div>
                </div>
               <div className="flex items-center">
                <input type="text" className="w-52 border p-1" placeholder="Search the store"/>
                <button className="bg-black text-white p-2 text-lg focus:outline-0"><LuSearch /></button>
               </div>
            </div>
        </div>  
        </>
    )               
}