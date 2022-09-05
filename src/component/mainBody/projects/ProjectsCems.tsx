import CemsImg from "../../../assets/projectImg/CEMS_HOME.png";
import CemsDashboard from "../../../assets/projectImg/CEMS_Dashboard.png";

const ProjectsCems = () => {
  return (
    <div className="tw-h-vh-full tw-flex">
      <div className="tw-font-medium tw-p-2 tw-text-base  tw-justify-center tw-rounded tw-overflow-hidden  tw-w-1/2  tw-flex tw-flex-col tw-items-center">
        <img
          src={CemsImg}
          alt="CemsImg"
          className="tw-border tw-h-1/2  tw-border-gray-500 tw-mb-2 tw-rounded"
        />
        <img
          src={CemsDashboard}
          alt="CemsDashboard"
          className="tw-border  tw-h-1/2 tw-border-gray-500 tw-rounded"
        />
      </div>
      <div className="tw-font-medium tw-p-3 tw-text-base tw-overflow-hidden tw-w-1/2 tw-justify-end tw-h-full tw-flex tw-flex-col">
        <div className="tw-flex tw-flex-col tw-justify-end tw-w-full tw-pb-8 tw-h-1/2  hover:tw-animate-up-card">
          <div className="tw-text-xl tw-w-full ">
            <div>CEMS (Cloud Edge Master Service)</div>
            <div className="tw-border-b tw-my-2"></div>
          </div>
          <div className="tw-w-full tw-flex tw-h-full">
            <div className="tw-flex tw-h-full tw-w-1/6 tw-font-semibold tw-flex-col  tw-justify-around">
              <div className="tw-text-lg"> 기간 </div>
              <div className="tw-text-lg"> 카테고리 </div>
              <div className="tw-text-lg"> 구성</div>
              <div className="tw-text-lg"> 개발 내용 </div>
              <div className="tw-text-lg"> 제품 소개 </div>
            </div>
            <div className="tw-flex tw-h-full tw-w-5/6 tw-flex-col  tw-justify-around">
              <div className="tw-font-medium">2021.12 ~ 2022.4</div>
              <div className="tw-font-medium">클라우드 서비스</div>
              <div className="tw-font-medium">
                Vue.js 2.0 / Typescript / Go lang{" "}
              </div>
              <div className="tw-font-medium">
                MachBase 의 기존 제품 EdgeMaster 를 cloud 서비스로 구현
              </div>
              <div className="tw-font-medium">
                센서를 통해 수집한 data를 dashboard 를 통해 관리 가능 (folder
                처럼 depth를 지정해 한 회사의 공장마다 혹은 위치마다 관리 가능)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCems;
