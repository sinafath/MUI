import { styled } from "@mui/material";
import NextImage from "next/image";

const ImageStyled = styled(NextImage)({
  objectFit:"cover"

});

const Image = () => {
  return <ImageStyled fill={true} src={"/Sale.webp"} alt="Image" />;
};

export default Image;
