import { ReactElement, ReactNode } from "react";
import BaseButton from "./BaseButton";

interface Modal {
  pModal?: ReactElement<any, any>;
  pModalHeader: string;
  width?: string;
  height?: string;
  children?: ReactNode;
  handleTrueModalForm: () => void;
  handleEvent?: () => void;
}

const BaseModal = ({
  pModal,
  pModalHeader,
  handleTrueModalForm,
  children,
  width,
  height,
}: Modal) => {
  const sWidthHeight = {
    minWidth: width,
    height: height,
  } as React.CSSProperties;

  return (
    <div className="tw-w-full tw-h-full tw-fixed tw-top-0 tw-left-0 tw-z-10">
      <div
        onClick={handleTrueModalForm}
        className="tw-w-full tw-h-full tw-bg-gray-900 tw-z-20 tw-opacity-10"
      ></div>
      <div
        style={sWidthHeight}
        className="tw-flex tw-flex-col tw-modal-default tw-max-w-sm tw-bg-white tw-rounded tw-overflow-hidden tw-shadow-lg tw-p-3 tw-animate-fade-in-down-fast-modal"
      >
        <div className="tw-flex tw-items-center tw-justify-between tw-border-b  tw-mb-2">
          <div className="tw-font-semibold tw-text-xl tw-mb-3 tw-ml-2">
            {pModalHeader}
          </div>
        </div>

        <div>{pModal}</div>
        {children}

        <div className="tw-flex tw-justify-end tw-items-center tw-pr-2">
          <BaseButton
            pButton={true}
            pButtonName={"close"}
            pPosition={"center"}
            pOnClick={handleTrueModalForm}
            pIdx={1}
          ></BaseButton>
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
