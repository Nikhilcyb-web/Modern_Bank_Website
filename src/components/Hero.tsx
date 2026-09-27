import styles from '../style'
import '../index.css'
import { discount , robot } from "../assets"
import GetStarted from './GetStarted'


function Hero() {
  return (

    <section id="Home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart}
      flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex flex-row items-center py-1.5 px-4 bg-linear-to-r from-gray-400 to-gray-900 rounded-[10px] mb-2`}>
          <img src={discount} alt="discount" className=" w-8 h-8"/>
          <p className={`${styles.paragraph} text-white/30 ml-2`}>    
          <span className="text-white">20% </span>
          Discount for {" "} 
          <span className="text-white">1 Month </span>
           Account
          </p>         
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-18.75">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-5xl font-bold bg-linear-to-r from-cyan-600 to-white/70 bg-clip-text text-transparent">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-18.75 w-full">
          Payment Method.
        </h1>
        <p className=" font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-117.5px mt-5" >Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      </div>

       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-full h-full relative z-5" />

      
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-1 w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
