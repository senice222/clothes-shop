import style from './Footer.module.scss'
import payment from '../../assets/payment.png'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.top}>
                <div className={style.item}>
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className={style.item}>
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className={style.item}>
                    <h1>About</h1>
                    <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
                </div>
                <div className={style.item}>
                    <h1>Contact</h1>
                    <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.left}>
                    <span className={style.logo}>Lamastore</span>
                    <span className={style.copyright}>
            © Copyright 2023. All Rights Reserved
          </span>
                </div>
                <div className={style.right}>
                    <img src={payment} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Footer