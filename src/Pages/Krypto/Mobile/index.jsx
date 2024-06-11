import style from './index.module.css'
import image from '../../../asset/mobile.png'

const Mobile = () => {
    return (
        <>
            <div className={style.mainContainer}>
                <div>
                    <h1 style={{color: "#fff"}}>ANALYTICS</h1>
                    <p style={{color: "#fff"}}>Built-In Analytics<br/> To Track your Nfts</p>
                    <p>Use our built-in analytics dashboard to pull <br/> valuable insights and monitor the value of
                        your Krypto portfolio over time.</p>

                    <button className={style.buttonContainer}>
                        <button style={{color: "#fff", backgroundColor: "#8F8FDB"}}>VIEW OUR PRICING</button>
                    </button>
                </div>
                <img src={image} alt={""}/>
            </div>

        </>
    )
}

export default Mobile;
