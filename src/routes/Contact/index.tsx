import { FC } from "react"
import "../../App.css"
import Header from "../../components/Header";

const Contact: FC = () => {
    return (
        <div className="bg-white">
            <Header></Header>
            <div className="flex px-20 mt-40">
                <div className="w-1/2">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-14">
                            <img src="https://s3-alpha-sig.figma.com/img/81ed/7be0/0cf7ff47fc052eb38343290bf9c3390c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hZOOF4tG7viIdwQTqYmgXKaqNLCJ9Ky7vwjSktPjcgUfdd6LiSZDYsQV8O6zKRD-M6VzgfUt61Vb-TecJ5wvBGH0x0DdGscZhGe1f4xtoCfExOYpviBoA-lyg5xiZJpGFcDOF6e7wkXecAy2d72gInzsDC1i9tTMB8ZWAOgOeLzgSZlb-xtI0k4yobFLcykeflTCZSrnZh3fdcn13284FAzaYioPA0lnEG76cMuvub5An6EROezD-x6tExd~JmKs4Ee3N0tjFxHm-gfzFHbv9RMhH60uRFEEvREvsbeBkbldVsMY~nV7-U6g82DM8T2uM2-1Rv0iLpPwzpmahe1ysA__" alt="" className="w-72 h-72 object-top rounded-full" />
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-600 text-lg">Contact Details</p>
                                <div className="flex flex-col text-gray-950 gap-1.5 text-3xl">
                                    <p>ayush.barnwal@brightscout.com</p>
                                    <p>+91 8651447521</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-gray-600 text-lg">Socials</p>
                            <ul className="flex flex-col text-gray-950 gap-1.5 text-3xl">
                                <li>LinkedIn</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Webflow</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="w-1/2 text-gray-950 gap-10 flex flex-col">
                    <h1 className=" text-6xl font-medium">Let’s build something cool together</h1>
                    <form action="" className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3 pb-3 border-b">
                            <p className="text-lg font-normal">Name</p>
                            <input type="text" className="border-none appearance-none focus:outline-none text-2xl" placeholder="James Robert" />
                        </div>
                        <div className="flex flex-col gap-3 pb-3 border-b">
                            <p className="text-lg font-normal">Email</p>
                            <input type="text" className="border-none appearance-none focus:outline-none text-2xl" placeholder="ayush.barnwal@brightscout.com" />
                        </div>
                        <div className="flex flex-col gap-3 pb-3 border-b">
                            <p className="text-lg font-normal">Subject</p>
                            <input type="text" className="border-none appearance-none focus:outline-none text-2xl" placeholder="For web design work Enquire" />
                        </div>
                        <div className="flex flex-col gap-3 pb-3 border-b">
                            <p className="text-lg font-normal">Message</p>
                            <div className="h-40">
                                <textarea className="border-none appearance-none focus:outline-none text-2xl w-full h-full no-scrollbar" placeholder="Type your Message" />
                            </div>
                        </div>
                  <button className='rounded-full px-16 py-6 !bg-gray-950 !text-white !text-lg w-fit h-fit'>Submit</button>
                    </form>
                </div>
            </div>

            <footer className='flex flex-col bg-black p-20 pb-0 gap-36 mt-32'>
                <div className='flex justify-between pb-8'>
                    <div>
                        Build with 💖 by Brightscout & Ayush
                    </div>
                    <ul className='flex gap-8'>
                        <li><a href=""></a>LinkedIn</li>
                        <li><a href=""></a>Twitter</li>
                        <li><a href=""></a>Instagram</li>
                        <li><a href=""></a>Webflow</li>
                    </ul>
                </div>
            </footer>
        </div>

    );
};

export default Contact;