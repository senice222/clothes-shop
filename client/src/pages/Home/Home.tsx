import Slider from "../../components/Slider/Slider";
import style from './Home.module.scss'

const Home = () => {
    return (
        <div className={style.home}>
            <Slider/>
        </div>
    )
}

export default Home