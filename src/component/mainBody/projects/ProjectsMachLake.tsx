import MachLake from "../../../assets/projectImg/makelake.png";
import LakeInfo from "../../../assets/projectImg/machLake2.png";

const ProjectsCems = () => {
  return (
    <div className="tw-h-vh-full tw-flex">
      <div className="tw-font-medium tw-p-2 tw-text-base  tw-justify-center tw-rounded tw-overflow-hidden  tw-w-1/2  tw-flex tw-flex-col tw-items-center">
        <img
          src={MachLake}
          alt="MachLake"
          className="tw-border tw-h-1/2 tw-border-gray-500 tw-rounded"
        />
        <img
          src={LakeInfo}
          alt="LakeInfo"
          className="tw-border tw-h-1/2  tw-border-gray-500 tw-mt-2 tw-rounded"
        />
      </div>
      <div className="tw-font-medium tw-p-3 tw-text-base tw-overflow-hidden tw-w-1/2 tw-justify-start tw-mt-20 tw-h-full tw-flex tw-flex-col">
        <div className="tw-flex tw-flex-col tw-justify-end tw-w-full tw-pb-8 tw-h-1/2  hover:tw-animate-up-card">
          <div className="tw-text-xl tw-w-full ">
            <div>MachLake</div>
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
              <div className="tw-font-medium">2021.9 ~ 2021.12</div>
              <div className="tw-font-medium">데이터 클라우드 서비스</div>
              <div className="tw-font-medium">Vue.js 2.0 / Go lang</div>
              <div className="tw-font-medium">
                홈페이지 제작 / library 수정 및 전반적 ui 변경
              </div>
              <div className="tw-font-medium">
                기존 MachBase는 client 형태로 데이터를 가지고 있었지만, aws를
                이용하여, cloud 형태로 보관
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCems;
