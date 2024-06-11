import style from "./index.module.css"

const Navbar = () => {
    return(
        <>
            <div className={style.nav}>
            <div className={style.mainContainer}>
                <p style={{color: "#fff"}}>Krypto</p>
                <p style={{color: "#fff"}}>about</p>
                <p style={{color: "#fff"}}>pricing</p>
                <p style={{color: "#fff"}}>contact</p>
                <p style={{color: "#fff"}}>buy nfts</p>
            </div>

                </div>
        </>
    )
}
export default Navbar;