import { FunctionComponent } from "react";

export type SurfacePro2Type = {
  className?: string;
};

const SurfacePro2: FunctionComponent<SurfacePro2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-azure-100 overflow-hidden flex flex-col items-start justify-start pt-[53px] px-[89px] pb-[304px] box-border gap-[20px] max-w-[101%] shrink-0 text-left text-29xl text-black font-body-p mq750:pt-[34px] mq750:px-11 mq750:pb-[198px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[47px] box-border max-w-full mq1050:pl-[23px] mq1050:pr-[23px] mq1050:box-border">
        <div className="w-[750px] relative tracking-[-0.01em] leading-[72px] inline-block shrink-0 max-w-full mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
          Experiencia
        </div>
      </div>
      <div className="w-[939px] flex flex-col items-start justify-start max-w-full">
        <div className="w-[750px] flex flex-row items-start justify-start relative max-w-full">
          <div className="h-36 flex-1 relative tracking-[-0.01em] leading-[72px] inline-block max-w-full z-[1] mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
            <p className="m-0">&nbsp;</p>
          </div>
          <div className="h-full w-full absolute !m-[0] bottom-[-16px] left-[0px] tracking-[-0.01em] leading-[72px] inline-block z-[3] mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
            <p className="m-0">&nbsp;</p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full text-lg text-gray">
          <div className="w-[750px] flex flex-row items-start justify-start relative max-w-full">
            <p className="!m-[0] w-[618px] absolute top-[-126px] right-[12px] tracking-[-0.01em] leading-[30px] whitespace-pre-wrap [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical]">{`Por el momento no cuento con experiencia en el mundo laboral pero espero muy pronto empezarlo a hacer por mientras  a seguir con mi continuo aprendizaje `}</p>
            <img
              className="h-[271px] w-[474px] absolute !m-[0] right-[65px] bottom-[-145px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-27@2x.png"
            />
            <div className="h-[142px] flex-1 relative text-29xl tracking-[-0.01em] leading-[72px] text-black inline-block max-w-full z-[2] mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
              <p className="m-0">&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurfacePro2;
