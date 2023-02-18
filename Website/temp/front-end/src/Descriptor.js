import React from 'react'
import vid from "./video2.mp4"
import healthy from "./healthy.gif"
import sorry from "./sorry.gif"

import { LinearProgress, Stack } from '@mui/material';
function Descriptor({fetching,answer}) {
  answer = parseInt(answer)
  return (
    <div className="m-4">
      <video
        autoPlay={true}
        loop
        controls={true}
        src={vid}
        className="h-[500px] object-cover w-[500px]"
      ></video>

      {fetching ? (
        <Stack
          sx={{ width: "100%", color: "grey.500", marginTop: "4rem" }}
          spacing={2}
        >
          <h2 className="text-xl">Processing ....</h2>
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
        </Stack>
      ) : answer == 1 ? (
        <div className="mt-8">
          <img src={sorry} alt="" />
          <div>
            <h1 className="font-bold text-lg">
              <span className="text-red-800 text-3xl">Sorry.......</span> your
              heart health prediction is{" "}
              <span className="text-red-800 text-5xl">1</span>
            </h1>
            <p className="w-[500px]">
              This indicates you have serious heart problem you had better
              visite near by doctor and take appropriate measure as soon as
              possible
            </p>
          </div>
        </div>
      ) : answer == 0 ? (
        <div className="mt-8">
          <img src={healthy} className="h-[300px]" alt="" />
          <div>
            <h1 className="font-bold text-lg">
              <span className="text-green-600 text-5xl">Congrats..</span> your
              heart health prediction is
              <span className="text-green-600 text-5xl">0</span>
            </h1>
            <p className="w-[500px]">
              This indicates you have a healthy heart you have to continue on
              the best practices for better health. Eat healthy; Get active;
              Stay at a healthy weight
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Descriptor