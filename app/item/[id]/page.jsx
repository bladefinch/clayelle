import Link from "next/link";
import items from "@/data/items.json"
import MainSlider from "@/app/components/mainslider";

export function generateStaticParams() {
    return items.map((i) => ({
      id: i.id.toString()
    }));
}

export default function ItemPage({params}){
    const item = items.find((i) => i.id.toString() === params.id);

    return(
        <div className="item__page">
            <img className="item__bigimg" src={item.pic_full}/>
            <div className="container">
                <div className="item__page__wrap">
                    <div className="item__title__wrap">
                        <div className="item__title">{item.name}</div>
                        <div className="item__price">{item.price}</div>
                    </div>
                    <div className="item__pagebuy__wrap">
                        <Link href='/' className="button">Add to card</Link>
                        <div className="item__orderinfo">Order now. Complimentary Express Delivery or Collect in Store available</div>
                    </div>
                    <div className="item__moreinfo__wrap">
                        <div className="item__moreinfo">
                            <div className="item__minititle">Descrition:</div>
                            <div className="item__miniinfo">{item.description}</div>
                        </div>
                        <div className="item__moreinfo">
                            <div className="item__minititle">Creation method:</div>
                            <div className="item__miniinfo">{item.method}</div>
                        </div>
                        <div className="item__moreinfo">
                            <div className="item__minititle">Details:</div>
                            <div className="item__miniinfo">
                                {item.details.map((detail, index) => <div key={index}>{detail}</div>)}
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="item__recs">
                    <div className="item__recs__title">You may also like</div>
                    <MainSlider/>
                </div>
            </div>
        </div>
    );
}