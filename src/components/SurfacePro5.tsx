import { FunctionComponent } from "react";

export type SurfaceProType = {
  className?: string;
};

const SurfacePro: FunctionComponent<SurfaceProType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-azure-300 overflow-hidden flex flex-col items-start justify-start pt-[23px] pb-[180px] pr-[82px] pl-[455px] box-border gap-[119px] max-w-full text-left text-29xl text-black font-body-p mq750:gap-[59px] mq750:pt-5 mq750:pb-[117px] mq750:pr-[41px] mq750:pl-[227px] mq750:box-border mq450:gap-[30px] mq450:pl-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[27px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[750px] relative tracking-[-0.01em] leading-[72px] inline-block shrink-0 max-w-full mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">{`Habilidades `}</div>
          </div>
          <div className="w-[590px] flex flex-row items-start justify-start relative max-w-full text-lg text-gray">
            <p className="m-0 h-[90px] flex-1 relative tracking-[-0.01em] leading-[30px] whitespace-pre-wrap inline-block max-w-full">
              Mis habilidades en el mundo del software estan en crecimiento
              debido al continuo aprendizaje en los diferentes tipos de
              lenguajes de programascion como lo son Java, JavaScript,
              Python,SQL..
            </p>
            <div className="h-36 w-[750px] absolute !m-[0] bottom-[-47px] left-[-390px] text-29xl tracking-[-0.01em] leading-[72px] text-black inline-block z-[1] mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
              <p className="m-0">&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[603px] flex flex-row items-end justify-between gap-[20px] max-w-full mq750:flex-wrap">
        <div className="h-[136px] w-[212px] flex flex-col items-start justify-end pt-0 px-0 pb-3.5 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-23@2x.png"
          />
        </div>
        <img
          className="h-[151px] w-[193px] relative object-cover"
          loading="lazy"
          alt=""
          src="/image-26@2x.png"
        />
      </div>
    </section>
  );
};

export default SurfacePro;
