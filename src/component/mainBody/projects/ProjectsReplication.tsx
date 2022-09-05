import Replication from "../../../assets/projectImg/Replication.png";

const ProjectsReplication = () => {
  return (
    <div className="tw-h-vh-full tw-flex">
      <div className="tw-font-medium tw-p-3 tw-text-base tw-overflow-hidden tw-w-1/2 tw-justify-start tw-h-full tw-flex tw-flex-col tw-pt-10">
        <div className="tw-flex tw-flex-col tw-justify-end tw-w-full tw-pb-8 tw-h-1/2  hover:tw-animate-up-card">
          <div className="tw-text-xl tw-w-full ">
            <div>Replication</div>
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
              <div className="tw-font-medium">2021.7 ~ 2021.9</div>
              <div className="tw-font-medium">내부 복제 서비스</div>
              <div className="tw-font-medium">Vue.js 2.0 / Go lang </div>
              <div className="tw-font-medium">
                data 복제를 할 수 있도록, 제품의 클라이언트를 켜고 끄며, client
                등록 및 data 전달 개수 표현
              </div>
              <div className="tw-font-medium">
                Client 의 data를 다른 server 와 client 상관 없이 복제
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-font-medium tw-p-2 tw-text-base tw-justify-center tw-rounded tw-overflow-hidden  tw-w-1/2  tw-flex tw-flex-col tw-items-center ">
        <img
          src={Replication}
          alt="CemsImg"
          className="tw-border tw-h-1/2  tw-border-gray-500 tw-mt-20 tw-rounded"
        />
      </div>
    </div>
  );
};

export default ProjectsReplication;
