import { FaLinkedin, FaGithub } from 'react-icons/fa';
import imageLink from '../../assets/nate.jpg'
const AboutMe = () => {
	return (
		<>
			<img
				src={imageLink}
				className="w-32 m-2 mx-auto border-2 shadow border-white/25 rounded-2xl"
				alt="Nathaniel Bachelder"
			/>
			<section className="max-w-[50em] grow mx-auto">
				<h3 className="text-2xl text-center underline align-baseline font-kumbh">
					About Me
				</h3>
				<p>
					When I was young, I was practically obsessed with computers.
					I'd spend much of my time playing video games and exploring
					the internet. Whenever something broke down, I'd watch with
					intrigue as a family friend fixed it. After a while, I took
					over that job, teaching myself how to fix whatever
					malfunction I'd somehow managed to cause. It became clear to
					me that I wanted to work with computers when I got older.
					<br /> <br />
					This dream has taken me several different directions. In my
					sopphomore year of high school, I took a class in Video Game
					design, working for hours both during class and after school
					to build a maze. In my senior year, I took a small class
					that basically involved shadowing the IT director and
					helping with various support calls. When I decided to take a
					gap year after high school, this class evolved into an
					internship in the school's IT department.
					<br /> <br />
					After my gap year, I enrolled in Rochester Institute of
					Technology's Computing and Information Technologies program,
					where I have now completed my third year. The well-rounded
					selection of classes in the program has allowed me to hone
					the skills I already had, as well as gain several new ones.
					<br /> <br />I built this site to act as a demonstration of
					some of my abilities, as well as a showcase of some of the
					projects that I've worked on both in and out of class.
				</p>
				<p className='hidden'>
					My name is Nathaniel Bachelder. I am a fourth-year student
					in Rochester Institute of Technology's Computing and
					Information Technologies program. This site was built to act
					both as a demonstration of some of my abilities, and a
					showcase of some of the projects that I've worked on both in
					and out of class.
				</p>
			</section>
			<nav className="sticky bottom-0 flex justify-around font-bold">
				<a href="https://www.linkedin.com/in/nrwbachelder/">
					<FaLinkedin className="w-9 h-9" />
				</a>
				|
				<a href="https://github.com/CodeNate02">
					<FaGithub className="w-9 h-9" />
				</a>
			</nav>
		</>
	);
};
export default AboutMe;
