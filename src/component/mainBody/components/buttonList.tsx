import { useState } from "react";
import BasePing from "../../../global/BasePing";

interface PropItem {
  pHandleYeongJin: () => void;
  pHandleUiryeong: () => void;
  pHandleHome: () => void;
  pIndex: number;
}

const IntroMyInfo = ({
  pHandleYeongJin,
  pHandleUiryeong,
  pHandleHome,
  pIndex,
}: PropItem) => {
  const [fristBadge, setFristBadge] = useState<Boolean>(true);
  const [secondBadge, setSecondBadge] = useState<Boolean>(true);
  const [thirdBadge, setThirdBadge] = useState<Boolean>(true);

  const clickUiryeong = () => {
    setFristBadge(false);
    pHandleUiryeong();
  };
  const clickYeongJin = () => {
    setSecondBadge(false);
    pHandleYeongJin();
  };

  const clickHome = () => {
    setThirdBadge(false);
    pHandleHome();
  };

  return (
    <div className="tw-w-1/2 tw-flex tw-flex-col tw-mr-3">
      {fristBadge ? <BasePing></BasePing> : <div className="tw-mt-3"></div>}
      <button
        style={pIndex === 1 ? { background: "#94A3B8", color: "#ffffff" } : {}}
        className=" tw-bg-white tw-hover:tw-bg-white tw-text-slate-400  tw-font-semibold tw-py-2 tw-px-4 tw-border tw-border-slate-400 tw-rounded tw-shadow tw-ml-3"
        onClick={clickUiryeong}
      >
        - 의령 고등학교
      </button>

      {secondBadge ? <BasePing></BasePing> : <div className="tw-mt-3"></div>}
      <button
        style={pIndex === 2 ? { background: "#94A3B8", color: "#ffffff" } : {}}
        className="tw-bg-white hover:tw-bg-white  tw-text-slate-400  tw-font-semibold tw-py-2 tw-px-4 tw-border tw-border-slate-400  tw-rounded tw-shadow tw-ml-3"
        onClick={clickYeongJin}
      >
        - 영진 전문대학교
      </button>

      {thirdBadge ? <BasePing></BasePing> : <div className="tw-mt-3"></div>}
      <button
        style={pIndex === 3 ? { background: "#94A3B8", color: "#ffffff" } : {}}
        className="tw-bg-white hover:tw-bg-white  tw-text-slate-400  tw-font-semibold tw-py-2 tw-px-4 tw-border tw-border-slate-400  tw-rounded tw-shadow tw-ml-3"
        onClick={clickHome}
      >
        - 현재 사는 곳
      </button>
    </div>
  );
};

export default IntroMyInfo;
