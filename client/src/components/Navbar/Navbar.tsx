import style from './Navbar.module.scss'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import en from '../../assets/en.png';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.wrapper}>
                <div className={style.left}>
                    <div className={style.item}>
                        <img src={en} alt="/"/>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className={style.item}>
                        <span>USD</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className={style.item}>
                        <Link className={style.link} to="/products/1">Women</Link>
                    </div>
                    <div className={style.item}>
                        <Link className={style.link} to="/products/2">Men</Link>
                    </div>
                    <div className={style.item}>
                        <Link className={style.link} to="/products/3">Children</Link>
                    </div>
                </div>
                <div className={style.middle}>
                    <Link className={style.link} to="/">STORE</Link>
                </div>
                <div className={style.right}>
                    <div className={style.item}>
                        <Link className={style.link} to="/">Homepage</Link>
                    </div>
                    <div className={style.item}>
                        <Link className={style.link} to="/">About</Link>
                    </div>
                    <div className={style.item}>
                        <Link className={style.link} to="/">Contact</Link>
                    </div>
                    <div className={style.item}>
                        <Link className={style.link} to="/">Stores</Link>
                    </div>
                    <div className={style.icons}>
                        <SearchIcon/>
                        <PersonOutlineOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <div className={style.cartIcon}>
                            <ShoppingCartOutlinedIcon/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar