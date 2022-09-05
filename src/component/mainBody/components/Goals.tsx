import * as Icons from "heroicons-react";


const Goals = () => {
  return (
    <div className="tw-w-full tw-h-full tw-p-4 tw-flex tw-items-center tw-justify-center">
      <div className="tw-flex tw-items-center tw-justify-center tw-rounded-lg tw-shadow-xl tw-p-3 tw-w-1/3 tw-h-1/3 tw-bg-white">
      <Icons.Puzzle color="#94A3B8" size={50} />
       
      </div>
      <div className="tw-font-semibold tw-text-lg tw-ml-9">
        FrontEnd 개발자로 지원한{" "}
        <span className="tw-text-xl tw-font-bold">송치봉 </span>
        입니다.
        <br />
        <br />
        항상 제시간에 행동할 것을 약속드리며,
        <br />
        업무에 집중하며, 높은 성과를 내기 위해 최선을 다하겠습니다.
        <br />
        모든 행동 속에서 성실함과 열정을 표할 것을 마음 깊게 다짐합니다.
        <br />
        항상 도전하는 정신과 힘든 일이 있어도 융통성 있게 해결해 나갈 수 있도록
        하겠습니다.
        <br />
        <br />
        감사합니다.
      </div>
    </div>
  );
};

export default Goals;
