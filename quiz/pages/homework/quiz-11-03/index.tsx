import ReactPlayer from "react-player";

const QuizThird = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=5KLsjhz9jMI"
        width={800}
        height={600}
        muted
        controls
        playing
      />
    </div>
  );
};

export default QuizThird;
