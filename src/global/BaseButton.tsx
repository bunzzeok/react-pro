import { Link } from "react-scroll";

type MyFormProps = {
  pButton: boolean;
  pOnClick: () => void;
  pButtonName: string;
  pPosition?: string;
  pIdx: number;
};

const BaseButton = ({
  pOnClick,
  pButtonName,
  pPosition,
  pButton,
  pIdx,
}: MyFormProps) => {
  const handleSubmit = () => {
    pOnClick();
  };
  const sPosition = {
    sLeftOrTop: {
      display: "flex",
      justifyContent: "flex-start",
    } as React.CSSProperties,
    sCenter: {
      display: "flex",
      justifyContent: "center",
    } as React.CSSProperties,
    sRightOrBottom: {
      display: "flex",
      justifyContent: "flex-end",
    } as React.CSSProperties,
  };

  if (!pButton) {
    return (
      <Link
        to={String(pIdx + 1)}
        smooth={true}
        offset={-64}
        duration={700}
        className="tw-w-full"
      >
        <button
          onClick={handleSubmit}
          style={
            pPosition === "center"
              ? sPosition.sCenter
              : pPosition === "left"
              ? sPosition.sLeftOrTop
              : sPosition.sRightOrBottom
          }
          className="tw-bg-transparent tw-pl-5 hover:tw-bg-slate-400 tw-py-2 tw-text-slate-400 tw-font-semibold tw-text-lg hover:tw-text-white tw-px-2 tw-w-full"
        >
          {pButtonName}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={handleSubmit}
        style={
          pPosition === "center"
            ? sPosition.sCenter
            : pPosition === "left"
            ? sPosition.sLeftOrTop
            : sPosition.sRightOrBottom
        }
        className="tw-bg-transparent hover:tw-bg-slate-400 tw-py-2 tw-text-slate-400 tw-font-semibold tw-text-lg hover:tw-text-white tw-px-2"
      >
        {pButtonName}
      </button>
    );
  }
};
export default BaseButton;
