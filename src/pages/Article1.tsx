import FrameComponent from "../components/FrameComponent1";
import SurfacePro1 from "../components/SurfacePro11";
import SurfacePro2 from "../components/SurfacePro21";
import SurfacePro3 from "../components/SurfacePro31";
import SurfacePro from "../components/SurfacePro5";

const Article: FunctionComponent1ArticleType = () => {
  return (
    <div className="w-full relative bg-azure-400 overflow-hidden flex flex-col items-start justify-start pt-[53px] px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <section className="w-[1353px] flex flex-row items-start justify-center pt-0 px-5 pb-[27px] box-border max-w-full text-left text-29xl text-black font-montaga">
        <div className="w-[577px] relative tracking-[-0.01em] leading-[72px] inline-block shrink-0 max-w-full mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
          Bienvenido a mi Portafolio
        </div>
      </section>
      <FrameComponent />
      <SurfacePro3 />
      <SurfacePro2 />
      <SurfacePro1 />
      <SurfacePro />
      <section className="self-stretch bg-azure-500 overflow-hidden flex flex-col items-start justify-start pt-[42px] px-20 pb-[285px] box-border min-h-[559px] max-w-full text-left text-29xl text-black font-body-p mq750:pt-[27px] mq750:px-10 mq750:pb-[185px] mq750:box-border">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[60px] box-border max-w-full mq1050:pl-[30px] mq1050:pr-[30px] mq1050:box-border">
          <div className="h-36 w-[750px] relative tracking-[-0.01em] leading-[72px] inline-block shrink-0 max-w-full mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
            Contacto
          </div>
        </div>
        <div className="w-[750px] flex flex-row items-start justify-start relative max-w-full mt-[-56px]">
          <p className="!m-[0] w-[686px] absolute right-[-365px] bottom-[-24px] text-lg tracking-[-0.01em] leading-[30px] text-gray inline-block">
            <span className="block">Numero de telefono: 3052421137</span>
            <span className="block">
              correo personal: miguelcajigas18@gmail.com
            </span>
          </p>
          <div className="h-36 flex-1 relative tracking-[-0.01em] leading-[72px] inline-block max-w-full z-[1] mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
            <p className="m-0">&nbsp;</p>
          </div>
          <div className="h-full w-full absolute !m-[0] top-[-35px] right-[-136px] tracking-[-0.01em] leading-[72px] inline-block z-[2] mq1050:text-19xl mq1050:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
            <p className="m-0">&nbsp;</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
