import Image from "next/image";
import Link from "next/link";
import MainSlider from "./components/mainslider";

export default function Home() {
  return (
    <>
    <section className="mainbanner">
      <div className="container">
        <div className="mainbanner__wrap">
          <div className="main__title">Nature&apos;s Touch in Every Piece</div>
          <div className="main__info">We create handcrafted ceramics inspired by nature, stillness, and the quiet warmth of home. Each piece is made slowly, intentionally — from soil, fire, and feeling.</div>
        </div>
      </div>
    </section>
    <section className="mainslider">
      <div className="container">
        <div className="mainslider__wrap"> 
          <MainSlider/>
          <Link href="/store" className="button">More</Link>
        </div>
      </div>
    </section>
    <section className="banner1">
        <div className="container">
          <div className="banner1__wrap">
            <div className="banner__info">
              <div className="title">Formed by Nature</div>
              <div className="info">Soft lines and organic shapes, inspired by petals, stones, and water. Each piece feels calm, balanced, and naturally beautiful.</div>
            </div>
            <img className="banner1__img" src="/img/banner1.png"/>
          </div>
      </div>
    </section>
    <section className="banner2 banner1 ">
        <div className="container">
          <div className="banner1__wrap">
            <img className="banner1__img" src="/img/banner2.png"/>
            <div className="banner__info">
              <div className="title">Objects That Breathe</div>
              <div className="info">Made for quiet moments — morning tea, fresh flowers, open space. Claylle pieces bring softness into your everyday.</div>
            </div>
          </div>
      </div>
    </section>
    <section className="banner3 banner1 ">
        <div className="container">
          <div className="banner1__wrap">
            <div className="banner__info">
              <div className="title">Held by Hands</div>
              <div className="info">Shaped slowly, touched gently. Each vessel carries the warmth of the hands that made it.</div>
            </div>
          </div>
      </div>
    </section>
    <section className="banner1">
        <div className="container">
          <div className="banner1__wrap">
            <div className="banner__info">
              <div className="title">Still, But Alive</div>
              <div className="info">Simple forms, subtle textures, soft colors. Clay that feels alive — grounded, light, and full of presence.</div>
            </div>
            <img className="banner1__img" src="/img/banner4.png"/>
          </div>
      </div>
    </section>
    </>
  );
}
