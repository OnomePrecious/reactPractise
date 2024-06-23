import style from './index.module.css'

const Footer = () => {
    return(
        <>
<div className={style.mainContainer}>

    <p style={{color: "#fff"}}>Krypto </p>
<div className={style.mainContainer}>

</div>
    <div className={style.footerSide}>
        <div>
            <div><p>krypto</p></div>
            <p>Home</p>
            <p>About</p>
            <p>Buy NFTs</p>
            <p>Sell NFTs</p>
        </div>
        <div>
            <div><p>Market</p></div>
            <p>Browse NFTs</p>
            <p>Buy NFTs</p>
            <p>Sell NFTs</p>
        </div>
        <div>
            <div><p>contact</p></div>
            <p>Email</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Twitter</p>
        </div>
        <div>
            <div> <p>join our newsletter</p></div>
            <label>
                <input placeholder="email address" className={style.input}/>
            </label>
        </div>
    </div>
</div>

        </>
    )
}
export default Footer;