import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import style from "./Slider.module.scss";
import {data} from "../../utils/dummyData";


const Slider = () => {
    const [slide, setSlide] = useState<number>(0);

    const prevSlide = () => {
        setSlide(slide === 0 ? 2 : (prev: number) => prev - 1)
    }

    const nextSlide = () => {
        setSlide(slide === 2 ? 0 : (prev: number) => prev + 1)
    }

    return (
        <div className={style.slider}>
            <div className={style.container} style={{transform: `translateX(-${slide * 100}vw)`}}>
                <img src={data[0]} alt=""/>
                <img src={data[1]} alt=""/>
                <img src={data[2]} alt=""/>
            </div>
            <div className={style.icons}>
                <div className={style.icon} onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className={style.icon} onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Slider;
