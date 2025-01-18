interface Props {
  src: string;
  clipClass: string;
}

const ImageClipBox = ({ src, clipClass }: Props) => {
  return (
    <div className={clipClass}>
      <img src={src} alt="Contact image" />
    </div>
  );
};
export default ImageClipBox;
