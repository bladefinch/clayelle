import Link from "next/link";

export default function Footer(){
    return(
        <div className="footer"> 
            <div className="container">
                <div className="footer__logo">Clayelle</div>
                <div className="footer__wrap">
                    <div className="footer__column">
                        <Link href="">Contact Us+</Link>
                    </div>
                    <div className="footer__column">
                        <Link href="">FAQs</Link>
                        <Link href="">Email Subscribe</Link>
                        <Link href="">Sitemap</Link>
                    </div>
                    <div className="footer__column">
                        <Link href="">About Clayelle</Link>
                        <Link href="">Clayelle Equilibrium</Link>
                    </div>
                    <div className="footer__column">
                        <Link href="">Code of Ethics</Link>
                        <Link href="">Privacy & Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}