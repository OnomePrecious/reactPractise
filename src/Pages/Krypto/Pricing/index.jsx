import style from "./index.module.css"
import image from "../../../asset/image.png";



const Pricing = () => {
    return(
        <>
        <div className={style.mainContainer}>
            <div className={style.imageContainer}>
                <img src={image} alt={""}/>
                <button className={style.buttonContainer}>
                    <button
                        style={{
                            color: "#fff",
                            border: "darkviolet",
                             borderRadius: ""
                        }}>
                        VIEW OUR PRICING
                    </button>
                </button>

            </div>
            <div className={"style.textContainer"}>
                <h3 style={{color: "#fff"}}>ANALYTICS</h3>
                <h1 style={{color: "#fff"}}>Built-In Analytics<br/>To Track Your Nfts</h1>
                <h4 style={{color: "#fff"}}>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto
                    portfolio over time</h4>

            </div>
        </div>
</>
)
}
export default Pricing;