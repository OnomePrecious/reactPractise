import style from "./index.module.css"
import image2 from "../../asset/tech.png"
import image3 from "../../asset/fast.png"
import image4 from "../../asset/logo.png"
import image5 from "../../asset/forbes.png"
const Featured = () => {
    return(
        <>
            <div className={style.mainContainer}>
                <h3 style={{color: "#fff"}}>FEATURED ON</h3>

                <div className={style.imageContainer}>
                    <img src={image2} alt={""}/>
                    <img src={image3} alt={""}/>
                    <img src={image4} alt={""}/>
                    <img src={image5} alt={""}/>
                </div>

</div>
        </>
    )
}
export default Featured;