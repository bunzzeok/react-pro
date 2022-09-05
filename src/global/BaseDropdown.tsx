import GithubIcon from "../assets/githubIcon.png";

interface PropItem {
  pItemListName: string[];
  pPositon: number | null;
  pHeight: number | null;
  pEvent?: () => void;
}

const BaseDropDown = ({
  pItemListName,
  pHeight,
  pPositon,
  pEvent,
}: PropItem) => {
  let sLeft = -1;
  if (pPositon) sLeft = pPositon;

  const handleEvent = (aIdx: number) => {
    if (aIdx === pItemListName.length - 1) {
      pEvent && pEvent();
    }
  };
  return (
    <div
      style={{ left: sLeft + "px", top: pHeight + "px" }}
      className="tw-animate-fade-in-down-fast-dropdown tw-absolute tw-rounded tw-overflow-hidden tw-shadow-lg tw-bg-white tw-p-3 "
    >
      {pItemListName.map((aItem, aIdx) => {
        return (
          <div
            className={
              aIdx === pItemListName.length - 1
                ? "tw-flex tw-items-center tw-justify-center tw-p-2 "
                : aIdx === 0
                ? "tw-flex tw-items-center tw-justify-center tw-border-b tw-p-2 tw-font-semibold tw-text-base"
                : "tw-flex tw-items-center tw-justify-center tw-border-b tw-p-2 "
            }
            key={aItem}
            onClick={() => handleEvent(aIdx)}
          >
            {aItem}
          </div>
        );
      })}
      <div className="tw-flex tw-w-full tw-justify-center tw-border-t ">
        <a href="https://github.com/bunzzeok" className="tw-pt-2">
          <img src={GithubIcon} alt="git" />
        </a>
      </div>
    </div>
  );
};
export default BaseDropDown;
