import { Suspense } from "react";
import { NotFoundStyled } from "./Statistics.style";
import YouTube, { YouTubeProps } from "react-youtube";
import { Loader } from "components";

const Statistics = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "150px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };

  return (
    <Suspense fallback={<Loader />}>
      <NotFoundStyled>
        <h2>Useful videos</h2>

        <div className="youtube_contents">
          <YouTube videoId="wm5gMKuwSYk" opts={opts} onReady={onPlayerReady} />
          <YouTube videoId="SqcY0GlETPk" opts={opts} onReady={onPlayerReady} />
          <YouTube videoId="wm5gMKuwSYk" opts={opts} onReady={onPlayerReady} />
          <YouTube videoId="SqcY0GlETPk" opts={opts} onReady={onPlayerReady} />
          <YouTube videoId="wm5gMKuwSYk" opts={opts} onReady={onPlayerReady} />
          <YouTube videoId="SqcY0GlETPk" opts={opts} onReady={onPlayerReady} />
          <YouTube videoId="wm5gMKuwSYk" opts={opts} onReady={onPlayerReady} />
          <YouTube videoId="SqcY0GlETPk" opts={opts} onReady={onPlayerReady} />
        </div>
      </NotFoundStyled>
    </Suspense>
  );
};

export default Statistics;
