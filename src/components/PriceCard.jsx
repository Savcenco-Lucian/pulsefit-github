import { assets } from "../assets/assets";
import SmoothReveal from './SmoothReveal.tsx'

const PriceCard = () => {

    const plans = [
        {
            name: "STANDARD",
            desc: "*Billed every 28 days (minimum 3 month commitment)",
            price: 219,
            isMostPop: false,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",

            ],
        },
        {
            name: "PREMIUM",
            desc: "*Billed every 28 days (minimum 3 month commitment)",
            price: 270,
            isMostPop: true,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        {
            name: "ALL ACCESS",
            desc: "*Billed every 28 days (minimum 3 month commitment)",
            price: 350,
            isMostPop: false,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
    ];

    return (
        <section id="link3" className='mt-24 membership'>
            <div className="px-7">
                <div className='flex items-center justify-between px-7'>
                    <div className='flex'>
                        <div className='w-1 h-1 border bg-[#D7FB00] opacity-60 md:w-2 md:h-2'></div>
                        <p className='text-xs font-oswald text-[#D7FB00] opacity-60 md:text-base'>Membership, Price</p>
                    </div>

                    <div className='border border-[#D7FB00] opacity-60 px-2 py-1 rounded-full'>
                        <p className='text-xs text-center font-oswald text-[#D7FB00] opacity-60 md:text-base'>04</p>
                    </div>
                </div>

                <SmoothReveal><h1 className='text-white py-7 font-oswald font-semibold text-4xl text-center md:text-6xl'>OUR <span className='text-[#D7FB00]'>MEMBERSHIPS</span></h1></SmoothReveal>
                <div className='mt-16 justify-center gap-12 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                                {
                                    item.isMostPop ? (
                                        <span class="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-[#D7FB00] text-center text-black text-sm font-semibold">Most popular</span>
                                    ) : ""
                                }
                                <div className="p-8 space-y-4 border-b">
                                    <span className='text-white font-poppins text-3xl font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-[#D7FB00] text-4xl font-oswald font-semibold'>
                                        ${item.price} <span className="text-3xl text-gray-600 font-normal">/mo</span>
                                    </div>
                                    <p className="text-[#CECECE] font-poppins font-medium">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center">
                                        <a
                                            href="#"
                                            className="px-6 py-2 text-base font-semibold text-[#D7FB00] bg-[#1E1E1E] border border-[#D7FB00] rounded-full md:text-lg hover:bg-[#D7FB00] hover:text-[#1E1E1E] transition"
                                        >
                                            GET STARTED NOW
                                        </a>
                                        <a href="#" className=' bg-[#D7FB00] rounded-full p-4 text-black'>
                                            <img src={assets.arrow_right} className='w-full h-full' alt="" />
                                        </a>
                                    </div>
                                </div>
                                <ul className='p-8 space-y-3'>
                                    <li className="pb-2 text-white text-xl font-medium">
                                        <p>Features</p>
                                    </li>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex text-[#CECECE] font-poppins text-xl items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-[#D7FB00]'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default PriceCard