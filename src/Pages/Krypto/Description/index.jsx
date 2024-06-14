import style from './index.module.css'
import image from '../../../asset/olivia.png'
import image2 from '../../../asset/evan.png'
import image3 from '../../../asset/jessy.png'
const Description = () =>{
    return(
        <>

            <div className={style.mainContainer}>
                <div className={style.imageContainer}>
                    <img src={image} alt={""}/>
                    <h4 style={{color: "#fff"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                    </h4>
                        <img src={image2} alt={""}/>
                        <h4 style={{color: "#fff"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                        </h4>
                            <img src={image3} alt={""}/>
                            <h4 style={{color: "#fff"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                            </h4>

                </div>
            </div>
        </>
    )
}
export default Description;