import {useState} from "react";
import {AddCategory} from "./components/AddCategory.jsx";
import {GifGrid} from "./components/GifGrid.jsx";

export const GitExpertApp = () => {

	const [categories, setCategories] = useState(['']);

	return (
        <>
			<hr />
			<h2>GitExpertApp</h2>
			<AddCategory setCategories={setCategories}/>
			<hr />
			<ol>
				{
					categories.map((category) => (
						<GifGrid
							key={category}
							category={category}
						/>
					))
				}
			</ol>
		</>
    )
}
