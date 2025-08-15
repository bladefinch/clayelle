import items from "@/data/items.json"
import ItemCard from "../components/itemcard";

export default function Store(){
    return(
        <div className="store">
            <div className="store__banner">
                <div className="container">
                    <div className="main__title">Where stillness takes on shape</div>
                    <div className="main__info">Claylle holds the memory of water and earth, of motion and rest. This is clay as nature intended: calm, grounded, and endlessly becoming.</div>
                </div>
            </div>
            <div className="store__items__wrap">
                {items.map((item, index) => <ItemCard key={index} item={item}/>)}
            </div>
        </div>
    );
}