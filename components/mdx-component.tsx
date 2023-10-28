import { useMDXComponent } from 'next-contentlayer/hooks';
import NextImage, { ImageProps } from 'next/image';


interface MdxProps {
  code: string;
}

const components = {
  Image: (props: ImageProps) => <NextImage {...props} />,
  
};

const Mdx: React.FC<MdxProps> = ({ code }) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

export default Mdx;
