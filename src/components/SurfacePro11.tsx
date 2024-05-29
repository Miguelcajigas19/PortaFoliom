import { FunctionComponent } from "react";

export type SurfacePro1Type = {
  className?: string;
};

const SurfacePro1: FunctionComponent<SurfacePro1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-azure-600 overflow-hidden flex flex-col items-start justify-start pt-[37px] pb-[257px] pr-[71px] pl-20 box-border gap-[58px] max-w-full text-left text-29xl text-black font-body-p mq750:gap-[29px] mq750:pt-5 mq750:pb-[109px] mq750:pr-[35px] mq750:pl-10 mq750:box-border mq1050:pt-6 mq1050:pb-[167px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="w-[750px] relative tracking-[-0.01em] leading-[72px] inline-block shrink-0 max-w-full mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
          Sobre mi
        </div>
      </div>
      <div className="w-[811px] flex flex-col items-end justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[750px] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch h-36 relative tracking-[-0.01em] leading-[72px] inline-block shrink-0 z-[1] mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
              <p className="m-0">&nbsp;</p>
            </div>
            <div className="self-stretch h-36 relative tracking-[-0.01em] leading-[72px] inline-block shrink-0 z-[2] mt-[-144px] mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
              <p className="m-0">&nbsp;</p>
            </div>
          </div>
        </div>
        <div className="w-[306px] flex flex-row items-start justify-start relative text-lg text-gray">
          <p className="!m-[0] h-[509px] w-[786px] absolute top-[-165px] right-[-261px] tracking-[-0.01em] leading-[30px] whitespace-pre-wrap inline-block">{`Hola soy Miguel Angel Cajigas Delgado tengo 20 años  vivo en Pasto soy originario de Sandona Nariño me gradue en la Escula Normal superior de Pasto y actualmente estoy cursando 5to semestre de la carrera Ingenieria de Software en Universidad Cooperativa de Colombia `}</p>
          <img
            className="h-[392px] flex-1 relative max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/whatsapp-image-20240423-at-648-2-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default SurfacePro1;
