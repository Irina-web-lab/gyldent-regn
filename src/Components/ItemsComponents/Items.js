import dataItems from "../../data/dataItems";
import Item from "./Item";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/itemsSlice";


const Items = () => {
    const selectedCategory = useSelector(getSelectedCategory);
        return (
            <div className="block-item">
                {dataItems
                .filter(item => {
                    if (selectedCategory === 'ALL') return true;
                return selectedCategory === item.category;
                }
                )
                .map((item, id) => <Item item={item} key={item.id}/>)}
            </div>
    )
    }
    
    export default Items;


