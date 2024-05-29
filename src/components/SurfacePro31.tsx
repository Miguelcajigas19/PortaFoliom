import { FunctionComponent } from "react";

export type SurfacePro3Type = {
  className?: string;
};

const SurfacePro3: FunctionComponent<SurfacePro3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[715px] bg-azure-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-5 pb-0 pr-0 pl-[17px] box-border max-w-full text-center text-mini text-actionable-item font-body-p mq1050:h-auto ${className}`}
    >
      <div className="w-[1453px] bg-azure-700 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[130px] px-[91px] pb-[430px] box-border gap-[149px] [debug_commit:bf4bc93] max-w-[103%] lg:pt-[84px] lg:pb-[279px] lg:box-border mq750:gap-[74px] mq750:pt-[55px] mq750:px-[45px] mq750:pb-[181px] mq750:box-border mq450:gap-[37px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-[130px] h-10 relative hidden whitespace-nowrap">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border hidden border-[1px] border-solid border-actionable-item" />
          <div className="absolute top-[27.5%] left-[16.92%] tracking-[-0.01em] font-medium hidden">
            Learn more
          </div>
        </div>
        <div className="w-[750px] flex flex-col items-start justify-start max-w-full text-left text-29xl text-black">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <div className="h-full w-full absolute !m-[0] top-[-10px] left-[-11px] tracking-[-0.01em] leading-[72px] inline-block mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
              <p className="m-0">&nbsp;</p>
            </div>
            <p className="!m-[0] w-[599px] absolute right-[-186px] bottom-[-99px] text-lg tracking-[-0.01em] leading-[30px] text-gray whitespace-pre-wrap inline-block z-[1]">
              Mis pasatiempos en su mayoria son mirar partidos de futbol u
              programa en tv una vez acabe con mis actividades educativas ,
              tambien me gusta practicar la programacion ademas de practicar
              deportes como el futbol y los fines de semana me gusta
              dedicarselos a mi familia u amigos
            </p>
            <div className="h-full w-full absolute !m-[0] top-[-53px] right-[-493px] tracking-[-0.01em] leading-[72px] inline-block z-[1] mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
              Hobbies
            </div>
            <div className="h-[146px] flex-1 relative tracking-[-0.01em] leading-[72px] inline-block max-w-full z-[2] mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
              <p className="m-0">&nbsp;</p>
            </div>
          </div>
          <div className="self-stretch h-[146px] relative tracking-[-0.01em] leading-[72px] inline-block shrink-0 z-[3] mt-[-146px] mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
            <p className="m-0">&nbsp;</p>
          </div>
        </div>
        <div className="w-[1257px] flex flex-row items-start justify-center max-w-full">
          <div className="w-[897px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
            <div className="h-[228px] w-[397px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border min-w-[397px] max-w-full mq750:min-w-full mq1050:flex-1">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[4] mq1050:self-stretch mq1050:w-auto"
                loading="lazy"
                alt=""
                src="/image-28@2x.png"
              />
            </div>
            <img
              className="w-[418px] relative max-h-full object-cover max-w-full mq1050:flex-1"
              loading="lazy"
              alt=""
              src="/whatsapp-image-20240423-at-638-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurfacePro3;
