import myImg from "../../../assets/myPhoto.jpg";
const IntroMyInfo = () => {
  return (
    <div className="tw-flex tw-flex-col tw-h-full tw-p-3">
      <div className="tw-font-bold tw-text-xl tw-border-b tw-pb-3">
        지원자 정보
      </div>
      <div className="tw-flex tw-w-full tw-h-full tw-pt-3">
        <div className="tw-flex tw-flex-col tw-w-1/6 tw-font-semibold tw-text-lg">
          <div className="tw-h-1/6">이름 </div>
          <div className="tw-h-1/6">생년월일 </div>
          <div className="tw-h-1/6">분야</div>
          <div className="tw-h-1/6">주요 사용 언어</div>
          <div className="tw-h-1/6">언어별 경력</div>
          <div className="tw-h-1/6">관심분야</div>
        </div>

        <div className="tw-flex tw-flex-col tw-w-3/6 tw-font-medium tw-text-base">
          <div className="tw-h-1/6">송치봉</div>
          <div className="tw-h-1/6">1998-03-19 (만 24세)</div>

          <div className="tw-h-1/6">FrontEnd</div>
          <div className="tw-h-1/6">
            Html / css / javascript / React.js / Vue.js
          </div>
          <div className="tw-h-1/6">
            Vue.js 1년(이전 회사 사용) / react.js 7개월(capston design 에서
            7개월 사용)
          </div>
          <div className="tw-h-1/6">
            frontend / web 개발 (Dashboard 및 Cloud 서비스)
          </div>
        </div>
        <div className="tw-w-2/6 tw-flex tw-items-center tw-justify-center">
          <img src={myImg} alt="img" className="tw-w-1/2  tw-border" />
        </div>
      </div>
    </div>
  );
};

export default IntroMyInfo;
