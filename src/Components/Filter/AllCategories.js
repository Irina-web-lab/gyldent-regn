import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="btn-category">
           {['RINGER', 'ØREDOBBER', 'KJEDER', 'KLOKKER', 'ALL']
            .map((category, index) => <Filter category={category}  key={index}/>
            )}             
        </div>
)
}

export default AllCategories;
