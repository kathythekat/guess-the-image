import { useState } from "react";
import { Flex, Container } from "@chakra-ui/react";
import Image from "./Image";
import ImageBlocker from "./ImageBlocker";
import GuessForm from "./GuessForm";
import Footer from "./Footer";
import Score from "./Score";

function ImageContainer({ src, title, nextImage, bottomText }) {
  const [score, setScore] = useState(0);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    left: 0,
  });
  const [ended, setEnded] = useState(false);
  const reveal = () => setEnded(true);

  const handleDimensionsChange = ({ width, height, left }) => {
    setDimensions({ width, height, left });
  };

  const handleNext = () => {
    setEnded(false);
    nextImage();
  };

  let leftText = "Guess the Movie!";
  let btnText = "Reveal Answer";
  let handleClick = reveal;

  if (ended) {
    leftText = title;
    btnText = "Select Next Image";
    handleClick = handleNext;
  }

  const handleGuess = (userGuess) => {
    if (userGuess.toLowerCase() === title.toLowerCase()) {
      setScore((score) => score + 1);
    }
    if (userGuess.toLowerCase() !== title.toLowerCase()) {
      setScore((score) => score - 1);
    }
  };

  return (
    <Flex direction="column" position="relative" minH="100vh" bg="gray.200">
      <Flex flex={1} alignItems="center">
        {!ended && <ImageBlocker {...dimensions} reveal={reveal} />}
        <Image
          src={src}
          alt={title}
          handleDimensionsChange={handleDimensionsChange}
        />
      </Flex>
      {/* <Flex alignItems="center" justifyContent="center"> */}
      <Container maxW="container.md">
        {" "}
        <GuessForm size="md" colorScheme="orange" handleGuess={handleGuess} />
      </Container>
      <Score score={score} />
      {/* </Flex> */}
      <Footer
        leftText={leftText}
        btnText={btnText}
        handleClick={handleClick}
        rightText={bottomText}
      />
    </Flex>
  );
}

export default ImageContainer;
