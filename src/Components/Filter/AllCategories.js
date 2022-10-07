import Filter from "./Filter"

const AllCategories = () => {
    return(<div>
        <h1>Let's go to shooping</h1>
        {['DRESSES', 'COATS', 'PAJAMAS', 'OFFICE', 'SWIMSUIT','ALL'].map
        (category => <Filter category={category}/>)}
    </div>
        
    )
}

export default AllCategories