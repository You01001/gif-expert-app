import {useFetchGifs} from "../hooks/useFetchGifs.js";
import {GifGridItem} from "./GifGridItem.jsx";

export const GifGrid = ({category}) => {

	const {data:images, loading} = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{loading && <p className="animate__animated animate__flash">Loading...</p>}
			{/*{loading ? <p>Loading...</p> : null}*/}
			<div className="class_GifGrid">
					{
						images.map( img => (
							<GifGridItem
								key={img.id}
								{...img}
							/>
						))
					}
			</div>
		</>
	)
}