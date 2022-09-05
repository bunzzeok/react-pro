import { useRef, useState } from "react";
import BaseDropDown from "../../global/BaseDropdown";
import * as Icons from "heroicons-react";

const BaseHeader = () => {
  const [sOpenDropdown, setOpenDropdown] = useState<boolean>(false);
  const sRefInformation = useRef<HTMLInputElement>(null);

  const handleDropdown = () => {
    setOpenDropdown(!sOpenDropdown);
    console.log(sRefInformation);
  };

  const ItemList = [
    "지원자 연락 정보 ",
    "송치봉",
    "bunzzeok@naver.com",
    "010-8070-7405",
  ];

  return (
    <div className="tw-h-16 tw-flex tw-items-center tw-justify-between tw-px-10 tw-border-b  tw-bg-white ">
      <div className="tw-flex tw-items-center">
        <Icons.Puzzle color="#94A3B8" size={35} />
        <span className="tw-ml-2 tw-text-slate-600 tw-font-semibold tw-text-xl">
        입사지원 포트폴리오
        </span>
      </div>
      <div ref={sRefInformation} className="tw-flex tw-items-center">
        <button onClick={handleDropdown}>
          <Icons.UserCircle color="#94A3B8" size={40} />
        </button>
        {sOpenDropdown ? (
          <BaseDropDown
            pItemListName={ItemList}
            pHeight={
              sRefInformation.current &&
              sRefInformation.current.offsetHeight + 20
            }
            pPositon={
              sRefInformation.current &&
              sRefInformation.current.offsetLeft -
                sRefInformation.current.clientWidth -
                120
            }
          ></BaseDropDown>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default BaseHeader;
