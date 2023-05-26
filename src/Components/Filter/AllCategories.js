import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="btn-category">
           {['RINGER', 'ØREDOBBER', 'KJEDER', 'KLOKKER', 'ALL']
            .map((category, id) => <Filter category={category}  key={id}/>
            )}             
        </div>
)
}

export default AllCategories;