import { useState } from "react";
import BaseModal from "../../../global/BaseModal";
import ButtonList from "./buttonList";
import MapView from "./MapView";
import IntroMyInfo from "./IntroMyInfo";

const Introduce = () => {
  // 모달 관련 handle
  const [sModalForm, setModalForm] = useState<number>(0);

  const handleTrueModalForm = (aIdx: number) => {
    setModalForm(aIdx);
  };

  const handleCloseModalForm = () => {
    setModalForm(0);
  };

  // map 기본 설정
  const [lngLat, setLngLat] = useState<number[]>([
    35.322499840787074, 128.26637465961238,
  ]);
  const [sButtonIdx, setButtonIdx] = useState<number>(1);
  // modal header

  let sMapInfoHeader = "지원자의 지역";
  let sEduInfoHedaer = "지원자의 교육 정보";
  let beforeCompanyHeader = "지원자의 이전 회사 정보";

  // lng lat
  const home = [37.5422775, 127.0699986];
  const yeongJin = [35.89625748406372, 128.62258452981106];
  const uiryeong = [35.322499840787074, 128.26637465961238];

  // handler method
  const handleUiryeong = () => {
    setLngLat(uiryeong);
    setButtonIdx(1);
  };

  const handleYeongJin = () => {
    setButtonIdx(2);
    setLngLat(yeongJin);
  };

  const handleHome = () => {
    setButtonIdx(3);

    setLngLat(home);
  };

  return (
    <div className="tw-flex tw-flex-col tw-h-full">
      <div className="tw-h-30-full tw-flex ">
        <button
          onClick={() => handleTrueModalForm(1)}
          className="tw-font-medium hover:tw-text-white hover:tw-bg-slate-400 tw-text-base hover:tw-animate-ani-setup tw-rounded tw-overflow-hidden tw-shadow-lg tw-bg-white tw-w-1/3 tw-m-5"
        >
          지원자의 지역 정보에 대해 볼수 있어요 !
        </button>
        <button
          onClick={() => handleTrueModalForm(2)}
          className="tw-font-medium hover:tw-text-white hover:tw-bg-slate-400 tw-text-base hover:tw-animate-ani-setup tw-rounded tw-overflow-hidden tw-shadow-lg tw-bg-white tw-w-1/3 tw-m-5"
        >
          지원자의 교육 정보에 대해 볼수 있어요 !
        </button>
        <button
          onClick={() => handleTrueModalForm(3)}
          className="tw-font-medium hover:tw-text-white hover:tw-bg-slate-400 tw-text-base hover:tw-animate-ani-setup tw-rounded tw-overflow-hidden tw-shadow-lg tw-bg-white tw-w-1/3 tw-m-5"
        >
          지원자의 회사 정보에 대해 볼수 있어요 !
        </button>
      </div>
      <div className="tw-h-60-full tw-rounded tw-overflow-hidden tw-shadow-lg tw-bg-white tw-m-5">
        <IntroMyInfo></IntroMyInfo>
      </div>
      {sModalForm !== 0 ? (
        <BaseModal
          pModalHeader={
            sModalForm === 1
              ? sMapInfoHeader
              : sModalForm === 2
              ? sEduInfoHedaer
              : beforeCompanyHeader
          }
          handleTrueModalForm={handleCloseModalForm}
          height={sModalForm === 1 ? "70vh" : ""}
          width={"1000px"}
        >
          {sModalForm === 1 ? (
            <div className="tw-flex tw-h-full">
              <ButtonList
                pHandleYeongJin={handleYeongJin}
                pHandleUiryeong={handleUiryeong}
                pHandleHome={handleHome}
                pIndex={sButtonIdx}
              ></ButtonList>
              <div className="tw-w-full tw-p-1 tw-rounded tw-overflow-hidden tw-shadow-lg ">
                <MapView pLngLat={lngLat}></MapView>
              </div>
            </div>
          ) : sModalForm === 2 ? (
            <div>
              <div className="tw-flex tw-border-b">
                <div className="tw-ml-3 tw-mr-2"> -</div>
                <div className="tw-w-1/4">과정 명</div>
                <div className="tw-w-1/4">교육기간</div>
                <div className="tw-w-1/4">교육주관처</div>
                <div className="tw-w-1/4">이수목적</div>
              </div>

              <div className="tw-flex tw-mt-2">
                <div className="tw-ml-3 tw-mr-2"> -</div>

                <div className="tw-w-1/4"> 필리핀 현지학기제 </div>
                <div className="tw-w-1/4">
                  <div> 2019.10.03</div>
                  <div>~ 2019.12.16</div>
                </div>
                <div className="tw-w-1/4">
                  영진전문대학교, Salle araneta univers
                </div>
                <div className="tw-w-1/4"> 영어 회화 및 토익 - 실력 향상 </div>
              </div>
              <div className="tw-flex tw-mt-2">
                <div className="tw-ml-3 tw-mr-2"> -</div>

                <div className="tw-w-1/4"> 자바스크립트 고급 과정 </div>
                <div className="tw-w-1/4">
                  <div> 2020.12.21</div>
                  <div>~ 2021.01.15</div>
                </div>
                <div className="tw-w-1/4">영진전문대학교</div>
                <div className="tw-w-1/4"> 전공 실무 기술 향상 </div>
              </div>
              <div className="tw-flex tw-mt-2">
                <div className="tw-ml-3 tw-mr-2"> -</div>

                <div className="tw-w-1/4">프로젝트 및 DB설계 기법 </div>
                <div className="tw-w-1/4">
                  <div> 2020.12.22</div>
                  <div>~ 2021.01.21</div>
                </div>
                <div className="tw-w-1/4">영진전문대학교</div>
                <div className="tw-w-1/4"> 전공 실무 기술 향상 </div>
              </div>
              <div className="tw-flex tw-mt-2">
                <div className="tw-ml-3 tw-mr-2"> -</div>

                <div className="tw-w-1/4">IOT 설계 </div>
                <div className="tw-w-1/4">
                  <div> 2021.01.04</div>
                  <div>~ 2021.01.22</div>
                </div>
                <div className="tw-w-1/4">영진전문대학교</div>
                <div className="tw-w-1/4"> 전공 실무 기술 향상 </div>
              </div>
              <div className="tw-flex tw-mt-2">
                <div className="tw-ml-3 tw-mr-2"> -</div>

                <div className="tw-w-1/4">MVC웹프로그래밍 </div>
                <div className="tw-w-1/4">
                  <div> 2021.01.25</div>
                  <div>~ 2021.02.05</div>
                </div>
                <div className="tw-w-1/4">영진전문대학교</div>
                <div className="tw-w-1/4"> 전공 실무 기술 향상 </div>
              </div>
            </div>
          ) : (
            <div className="tw-flex tw-flex-col">
              <div className="tw-flex tw-flex-col">
                <div className="tw-flex tw-items-center"></div>
              </div>
              <div className="tw-flex tw-ml-5">
                <div className="tw-flex tw-flex-col tw-h-40 tw-w-1/3 tw-font-semibold tw-text-lg">
                  <div className="tw-h-1/4 tw-flex tw-items-center tw-mb-2">
                    회사명
                  </div>
                  <div className="tw-h-1/4">세부정보 </div>
                  <div className="tw-h-1/4">주요 front 언어 </div>
                  <div className="tw-h-1/4">진행 프로젝트에 도입 했던 기능</div>
                </div>
                <div>
                  <div className="tw-h-1/4 tw-flex tw-items-center tw-mb-2">
                    마크베이스
                  </div>
                  <div className="tw-h-1/4">
                    data 수집 및 data dashboard 세부정보
                  </div>
                  <div className="tw-h-1/4">vue js 2.0 / typescript</div>
                  <div className="tw-h-1/4">
                    drag N drop / modal / slider / tap / Vue X (store) / badge /
                    card / carousel / leaflet / etc..
                  </div>
                </div>
              </div>
            </div>
          )}
        </BaseModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Introduce;
