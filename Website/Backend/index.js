const express = require("express");
const { spawn } = require("child_process");
const cors = require("cors");
const app = express();

// middle wares
app.use(express.json());
app.use(cors());

app.post("/check", (req, res) => {
 
  const new_glucose = req.body.glucose > 120 ? 1 : 0;
 console.log(req.body);
  var dataToSend;
  const python = spawn("python", [
    "compute.py",
    req.body.age,
    req.body.gender,
    req.body.chest_pain,
    req.body.bloodPresure,
    req.body.cholestrol,
    new_glucose,
    req.body.ecg,
    req.body.heartRate,
    req.body.angina,
    req.body.depresion,
    req.body.st_segment,
    req.body.vessel,
    req.body.thal,
  ]);

  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser

    res.send({ gax: dataToSend });
  });
});

const port = 3000;
app.listen(port, () =>
  console.log(`app starts running on port 
${port}...`)
);
