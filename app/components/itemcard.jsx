import Link from "next/link";

export default function ItemCard({item}){
    return(
        <Link href={`/item/${item.id}`}>
            <div className="itemcard">
                <img className="itemcard__img" src={item.pic}/>
                <div className="itemcard__info__wrap">
                    <div className="main__slider__title">{item.name}</div>
                    <div className="main__slider__price">{item.price}</div>
                </div>
            </div>
        </Link>
    );
}