import { useSelector } from "react-redux";

export default function CategoryDisplay({categoryId}) {

    const gif = useSelector(store => store.categories);

    return (
        // CURRENT CATEGORY WITH A DROP-DOWN TO CHANGE CATEGORY
        <h1>Category</h1>
    );
}