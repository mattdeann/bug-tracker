import bugModel from '../Models/bugModel';

function retrieveBugs() {
  let data = [];

  data.push(new bugModel({
    _id: 13413413,
    name: "Crash on Load",
    details: "Crashes after 3 seconds",
    steps: "Open application and it will crash",
    version: "V2.0",
    assigned: "Matthew Dean",
    creator: "Friend Person",
    priority: 1,
    time: "23:38",
  }))

  data.push(new bugModel({
    _id: 23413,
    name: "Wont Load",
    details: "Crashes",
    steps: "Open application and it will crash",
    version: "V2.0",
    assigned: "Matthew Dean",
    creator: "Friend Person",
    priority: 2,
    time: "23:38",
  }))

  let sorted = data.sort((a, b) => a.priority - b.priority);


}

export default retrieveBugs;