import { useEffect, useState } from "react";
import BaseButton from "../../global/BaseButton";
import { changeHome } from "../../modules/changeHome";
import { useDispatch } from "react-redux";
import * as Icons from "heroicons-react";

interface PropItem {
  pHandleCloseButton: () => void;
  pCloseButton: boolean;
}

const LeftBar = ({ pHandleCloseButton, pCloseButton }: PropItem) => {
  const [sPageRouter, setPageRouter] = useState<string[]>([
    "Introduce",
    "Goals",
  ]);

  useEffect(() => {
    !pCloseButton
      ? setPageRouter(["I", "C", "R", "M", "O", "G"])
      : setPageRouter([
          "Introduce",
          "CEMS",
          "Replication",
          "MachLake",
          "주문의 민족",
          "Goals",
        ]);
  }, [pCloseButton]);
  const dispatch = useDispatch();

  const sRouteList = sPageRouter.map((aItem: string, aIdx: number) => (
    <BaseButton
      key={aItem}
      pOnClick={() => {
        dispatch(changeHome(aItem));
      }}
      pButtonName={aItem}
      pPosition={!pCloseButton ? "center" : "left"}
      pButton={false}
      pIdx={aIdx}
    ></BaseButton>
  ));

  return (
    <div
      className={
        !pCloseButton
          ? "tw-w-14 tw-truncate tw-h-vh-full tw-flex tw-flex-col tw-border-r tw-border-gray-300 tw-fixed tw-bg-white tw-justify-between"
          : "tw-w-1/6 tw-h-vh-full tw-flex tw-flex-col tw-border-r tw-border-gray-300 tw-fixed tw-bg-white tw-justify-between"
      }
    >
      <div>{sRouteList}</div>

      {!pCloseButton ? (
        <div className="tw-flex tw-justify-end tw-p-3">
          <button onClick={pHandleCloseButton}>
            <Icons.ChevronDoubleRightOutline color="#475569"></Icons.ChevronDoubleRightOutline>
          </button>
        </div>
      ) : (
        <div className="tw-flex tw-justify-end tw-p-3">
          <button onClick={pHandleCloseButton}>
            <Icons.ChevronDoubleLeftOutline color="#475569"></Icons.ChevronDoubleLeftOutline>
          </button>
        </div>
      )}
    </div>
  );
};

export default LeftBar;
