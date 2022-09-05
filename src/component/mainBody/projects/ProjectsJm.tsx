import jmImg from "../../../assets/projectImg/jmImg.png";

const ProjectsReplication = () => {
  return (
    <div className="tw-h-vh-full tw-flex">
      <div className="tw-font-medium tw-p-3 tw-text-base tw-overflow-hidden tw-w-1/2 tw-justify-start tw-h-full tw-flex tw-flex-col tw-pt-10">
        <div className="tw-flex tw-flex-col tw-justify-end tw-w-full tw-pb-8 tw-h-1/2  hover:tw-animate-up-card">
          <div className="tw-text-xl tw-w-full ">
            <div>주문의 민족</div>
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
              <div className="tw-font-medium">2021.1 ~ 2021.6</div>
              <div className="tw-font-medium"> 고객 주문 및 영업주 서비스</div>
              <div className="tw-font-medium"> React.js / spring boot </div>
              <div className="tw-font-medium">
                HomePage 개발 및 고객 주문, 결제, 채팅방 / 고용자 출 퇴근 / pos
                기능 구현
              </div>
              <div className="tw-font-medium">
                비대면 주문 및 영업주가 필요한 시스템을 구현 cloud 서비스
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="tw-font-medium tw-p-2 tw-text-base tw-justify-center tw-rounded tw-overflow-hidden  tw-w-1/2  tw-flex tw-flex-col tw-items-center ">
        <img
          src={jmImg}
          alt="CemsImg"
          className="tw-border tw-h-1/2  tw-border-gray-500 tw-mt-20 tw-rounded"
        />
      </div>
    </div>
  );
};

export default ProjectsReplication;
