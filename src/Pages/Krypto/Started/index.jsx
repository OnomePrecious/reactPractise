import style from './index.module.css'

const Started =() => {
    return(
        <>
            <div className={style.mainContainer}>
                <div className={style.textContainer}>
                    <h4> ARE YOU READY?</h4>
                    <h2 style={{color: "#fff", display: "flex", justifyContent: "center"}}>Be A Part Of The <br/> Next
                        Big Thing</h2>
                <button className={style.buttonSection}>
                    GET STARTED
                </button>


</div>
            </div>
        </>

    )
}
export default Started;