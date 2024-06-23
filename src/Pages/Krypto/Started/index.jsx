import style from './index.module.css'

const Started =() => {
    return(
        <>
            <div className={style.mainContainer}>
                <div className={style.textContainer}>
                    <h4> ARE YOU READY?</h4>
                    <p style={{color: "#fff", display: "flex", justifyContent: "center"}}>Be A Part Of The <br/> Next
                        Big Thing</p>
                </div>
                <button className={style.buttonSection}>
                    GET STARTED
                </button>



            </div>
        </>

    )
}
export default Started;