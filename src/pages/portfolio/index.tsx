import { IconType } from 'react-icons/lib';
import { PORTFOLIO_PROJECTS } from './data';
const Portfolio = () => {
	return (
		<>
			<h3 className="text-2xl text-center underline align-baseline font-kumbh">
				{' '}
				Portfolio{' '}
			</h3>
			{PORTFOLIO_PROJECTS.map((item, index) => (
				<Project key={index} item={item} />
			))}
		</>
	);
};
export default Portfolio;

const Project = ({
	item,
}: {
	item: {
		title: string;
		creationDate: string;
		description: string;
		link: string;
		icons: IconType[];
	};
}) => {
	return (
		<a
			href={item.link}
			className="relative p-1 m-2 mt-10 transition duration-1000 border-2 border-white bg-gradient-to-r from-blue-e to-black/50 hover:bg-gradient-to-l rounded-xl"
		>
			<section className="relative flex float-right bottom-10">
				{item.icons.map((Item, index) => (
					<Item
						key={index}
						className="box-content w-8 h-8 p-1 mx-1 border-2 border-white rounded-full bg-blue-d"
					/>
				))}
			</section>
			<h5 className="font-bold underline font-raleway">
				{item.title} - {item.creationDate}
			</h5>
			<p className="text-sm">{item.description}</p>
		</a>
	);
};

