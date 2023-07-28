import { useDynamicSvgImport } from "@/hooks/useDynamicSvgImport";

type SvgLoaderProps = {
  file: string;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
};

export const SvgLoader = ({ file, className, svgProps }: SvgLoaderProps) => {
  const { SvgIcon } = useDynamicSvgImport(file);

  return (
    <>
      {SvgIcon && (
        <div className={className}>
          <SvgIcon {...svgProps} />
        </div>
      )}
    </>
  );
}

export default SvgLoader;
