import Introduce from "./components/Introduce";
import Goals from "./components/Goals";
import ProjectsCems from "./projects/ProjectsCems";
import ProjectsReplication from "./projects/ProjectsReplication";
import ProjectsMachLake from "./projects/ProjectsMachLake";
import ProjectsJm from "./projects/ProjectsJm";
import "../baseBody/style.css";

const MainBody = ({ pCloseButton }: { pCloseButton: boolean }) => {
  return (
    <div
      className={
        pCloseButton
          ? "tw-pl-16dot tw-w-full tw-bg-slate-50"
          : "tw-pl-14 tw-w-full tw-bg-slate-50"
      }
    >
      <div id="1" className="body-box">
        <Introduce></Introduce>
      </div>
      <div id="2" className="body-box">
        <ProjectsCems></ProjectsCems>
      </div>
      <div id="3" className="body-box">
        <ProjectsReplication></ProjectsReplication>
      </div>
      <div id="4" className="body-box">
        <ProjectsMachLake></ProjectsMachLake>
      </div>
      <div id="5" className="body-box">
        <ProjectsJm></ProjectsJm>
      </div>
      <div id="6" className="body-box">
        <Goals></Goals>
      </div>
      <div className="tw-fixed tw-bottom-1 tw-right-1 tw-flex tw-justify-end  ">
        © reactProject by chi-bong. All rights reserved.
      </div>
    </div>
  );
};

export default MainBody;
