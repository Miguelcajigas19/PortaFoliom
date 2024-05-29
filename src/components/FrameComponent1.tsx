import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[147px] pr-5 pl-[68px] box-border max-w-full text-left text-29xl text-black font-body-p lg:pl-[34px] lg:box-border mq750:pb-24 mq750:box-border ${className}`}
    >
      <div className="w-[1088px] flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[53px] min-w-[587px] shrink-0 [debug_commit:bf4bc93] max-w-full mq750:min-w-full mq450:gap-[26px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="w-[750px] relative tracking-[-0.01em] leading-[72px] inline-block max-w-full mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
              <p className="m-0">&nbsp;</p>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-5xl">
              <b className="w-[733px] relative tracking-[-0.01em] leading-[36px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[29px]">
                <span>{`Hola soy `}</span>
                <span className="text-mediumblue">Miguel Cajigas</span>
              </b>
            </div>
          </div>
          <div className="w-[785px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg text-gray">
            <p className="m-0 w-[561px] relative tracking-[-0.01em] leading-[30px] whitespace-pre-wrap flex items-center shrink-0 max-w-full">{`Bienvenido a mi portafolio en este te contare todo sobre mi  persona mis experiencias, mis habilidades, mis hobbis y mi contacto espero tengas una muy buena experiencia y te lleves algo bueno de mi `}</p>
          </div>
        </div>
        <div className="h-[416px] w-[295px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border ml-[-110px] mq1050:ml-0">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 [debug_commit:bf4bc93]"
            loading="lazy"
            alt=""
            src="/whatsapp-image-20240423-at-648-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
