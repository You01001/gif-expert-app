import 'animate.css';
export const GifGridItem = ({title, url}) => {

	return (
		<div className="class_GifGridItem animate__animated animate__fadeIn">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

