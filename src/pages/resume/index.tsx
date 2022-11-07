import { useMemo } from "react";

const Resume = () => {
  return (
    <>
      <div className="px-5 text-sm font-kumbh grow">
        <h3 className="text-2xl text-center underline align-baseline font-kumbhn print:hidden font-raleway">
          Resumé
        </h3>
        <ul className="hidden mx-auto text-center border-t border-black w-fit print:block">
          <li className="px-12"> nrwilliams8@gmail.com</li>
          <li className="px-12"> 802-768-1218 </li>
        </ul>
        <section id="education">
          <h4 className="w-auto text-2xl border-b-2 border-white print:border-black">
            Education:
          </h4>
          <p>
            <span className="float-right ml-10 text-right">
              Expected May 2024 <br /> GPA:3.67
            </span>
            <b>Rochester Institute of Technology (RIT)</b>
            , Rochester, NY <br />
            Bachelor of Science, Computing and Information Technologies
          </p>
          <br />
          <p>
            <b>Recipient:</b>
            {` Dean's List Sprint 2020 - Spring 2022`}
          </p>
          <h5 className="border-b-2 mt-2 w-fit min-w-[50%] text-lg print:text-base  print:border-black">
            Relevant Courses
          </h5>
          <ul className="flex flex-wrap print:text-xs sm:text-sm">
            {RELEVANT_COURSES.map((item, index) => (
              <section key={index} className="min-w-[33%] grow">
                <h5 className="font-bold underline">{item.category}:</h5>
                {item.courses.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </section>
            ))}
          </ul>
        </section>
        <br />
        <section id='work'>
          <h3 className="w-auto text-2xl border-b-2 border-white font-raleway print:border-black">
            Work Experience:
          </h3>
          {WORK_EXPERIENCE.map((item: any, index: number) => (
            <WorkExp key={index} info={item} />
          ))}
        </section>
        <br />
        <SkillsSection />
      </div>
      <a className="sticky py-2 text-lg text-center underline text-blue-c hover:cursor-pointer hover:text-blue-b b-0 text-hidden bg-black/20">
        {/** NATE,
         * REMEMBER TO
         * ADD A LINK
         * TO AN UP-TO-DATE
         * RESUME PDF*/}
        For Full PDF Resumé, Please Click Here
      </a>
    </>
  );
};
export default Resume;

const WorkExp = ({ info }: any) => {
  return (
    <>
      <div>
        <b className="float-right"> {info.dates} </b>
        <h5 className="font-bold"> {info.company} </h5>
        <p className="float-right"> {info.location} </p>
        <p> {info.title} </p>
        <ul className="ml-5 list-disc">
          {(info?.duties || []).map((item: string, index: number) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
      </div>
      <br />
    </>
  );
};
const SkillsSection = () => {
  let skills = useMemo(
    //@ts-ignore
    () => Object.keys(SKILLS).filter((x) => SKILLS[x].length > 0),
    []
  );
  console.log(skills);
  return (
    <section>
      <h4 className="w-auto text-2xl border-b-2 border-white print:border-black">
        Skills:
      </h4>
      {skills.map((item: string, index: number) => (
        <ul className="grid grid-cols-3 mx-5 text-base" key={index}>
          <h5 className="col-span-3 font-bold border-b border-white print:border-black">
            {" "}
            {item}:{" "}
          </h5>
          {
            //@ts-ignore
            SKILLS[item].map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      ))}
    </section>
  );
};

const RELEVANT_COURSES = [
  {
    category: "Development",
    courses: [
      "Computer Problem Solving",
      "Web & Mobile Development",
      "Client Programming",
      "Task Automation",
      "Designing the User Experience ",
    ],
  },
  {
    category: "Administration",
    courses: [
      "Routing and Switching",
      "Systems Administration",
      "Config. Management",
    ],
  },
  {
    category: "Database",
    courses: ["Database & Data Modeling", "Information Requirements Modeling"],
  },
];
const WORK_EXPERIENCE = [
  {
    company: "LSI Solutions",
    dates: "August 2022 - Present",
    location: "Victor, NY",
    title: "IT Development Co-Op",
    duties: [
      "Improve company efficiency by developing applications for internal use.",
    ],
  },
  {
    company: "Burr and Burton Academy",
    dates: "June 2018 - August 2019. Summers 2020 & 2021",
    location: "Manchester, VT",
    title: "Tech Department Internship",
    duties: [
      "Lessened load of senior IT department members by triaging incoming IT-related issues, questions, and requests.",
      "Ensured prompt and reliable response to support requests through the use of Zendesk ticketing system.",
      "Improved school live-stream events through the use of new hardware and software solutions.",
      "Facilitated preparation, distribution, and collection of iPads and accessories used by the majority of the student body as a part of 1:1 iPad program.",
    ],
  },
];
const SKILLS = {
  Beginner: ["Angular", "C#", "Bash"],
  Intermediate: ["Python", "Java", "MySQL", "jQuery"],
  Proficient: ["HTML", "Javascript", "CSS", "React", "Typescript"],
};
