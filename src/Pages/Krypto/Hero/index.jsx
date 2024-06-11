import laptop from '../../../asset/laptop.png'
import style from "./index.module.css"
const Hero = () =>{
    return(
        <>
        <div className={style.heroSection}>
            <div>
               <h1 style={{color: "#fff"}}>Discover <br/> And Collect <br/> Rare NFTs</h1>
            <p style={{color: "#fff"}}>The most secure marketplace for buying <br/>and selling unique crypto assets.</p>

                <button className={style.buttonSection}>
                    <button style={{color: "#fff"}}>Buy NFTS</button>
                    <button style={{color: "#fff"}}>Sell NFTS</button>
                </button>
            </div>
                    <img src={laptop} alt={""}/>
                </div>

        </>
    )  
}
export default Hero;