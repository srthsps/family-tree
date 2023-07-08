import React, { useState, useEffect } from "react";

function App() {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    let item = document.getElementsByClassName("tree")[0];
    if (item) {
      var chartItem = new FamilyTree(item, {
        mouseScrool: FamilyTree.none,
        siblingSeparation: 120,
        nodeBinding: {
          field_0: "name",
          field_1: "title",
          img_0: "img",
        },
      });
      setChart(chartItem);
    }
  }, []);

  let data = [
    {
      id: 1,
      family_tracking_id: 1,
      name: "king george v1",
      image: "https://cdn.balkan.app/shared/f1.png",
      gender: "male",
      pids: [2],
    },
    {
      id: 2,
      family_tracking_id: 0,
      name: "Queen Elizabeth",
      image: "https://cdn.balkan.app/shared/f2.png",
      gender: "female",
      pids: [1],
    },
    {
      id: 3,
      family_tracking_id: 0,
      name: "Prince Philip",
      image: "https://cdn.balkan.app/shared/f3.png",
      gender: "male",
      pids: [4],
    },
    {
      id: 4,
      family_tracking_id: 1,
      name: "Queen Elizabeth II",
      image: "https://cdn.balkan.app/shared/f3.png",
      gender: "female",
      mid: 2,
      fid: 1,
      pids: [3],
    },
    {
      id: 5,
      family_tracking_id: 1,
      name: "Princess Margaret",
      image: "https://cdn.balkan.app/shared/f6.png",
      gender: "female",
      mid: 2,
      fid: 1,
    },
    {
      id: 6,
      family_tracking_id: 0,
      name: "Diana",
      image: "https://cdn.balkan.app/shared/f9.png",
      gender: "female",

      pids: [7],
    },
    {
      id: 7,
      family_tracking_id: 1,
      name: "Charles",
      image: "https://cdn.balkan.app/shared/f8.png",
      gender: "male",
      mid: 4,
      fid: 3,
      pids: [6],
    },
    {
      id: 8,
      family_tracking_id: 0,
      name: "Camila",
      image: "https://cdn.balkan.app/shared/f7.png",
      gender: "female",

      pids: [7],
    },
    {
      id: 9,
      family_tracking_id: 1,
      name: "Anne",
      image: "https://cdn.balkan.app/shared/f10.png",
      gender: "female",
      mid: 4,
      fid: 3,
    },
    {
      id: 10,
      family_tracking_id: 1,
      name: "Prince Andrew",
      image: "https://cdn.balkan.app/shared/f11.png",
      gender: "male",
      mid: 4,
      fid: 3,
    },
    {
      id: 11,
      family_tracking_id: 1,
      name: "Prince Edward",
      image: "https://cdn.balkan.app/shared/f12.png",
      gender: "male",
      mid: 4,
      fid: 3,
    },
    {
      id: 12,
      family_tracking_id: 0,
      name: "Catherine",
      image: "https://cdn.balkan.app/shared/f13.png",
      gender: "female",

      pids: [13],
    },
    {
      id: 13,
      family_tracking_id: 1,
      name: "Prince William",
      image: "https://cdn.balkan.app/shared/f14.png",
      gender: "male",
      mid: 6,
      fid: 7,
      pids: [12],
    },
    {
      id: 14,
      family_tracking_id: 0,
      name: "Meghan Markle",
      image: "https://cdn.balkan.app/shared/f16.png",
      gender: "female",

      pids: [15],
    },
    {
      id: 15,
      family_tracking_id: 1,
      name: "Prince Harry",
      image: "https://cdn.balkan.app/shared/f15.png",
      gender: "male",
      mid: 6,
      fid: 7,
      pids: 14,
    },
    {
      id: 16,
      family_tracking_id: 1,
      name: "Prince George",
      image: "https://cdn.balkan.app/shared/f17.png",
      gender: "male",
      mid: 12,
      fid: 13,
    },
    {
      id: 17,
      family_tracking_id: 1,
      name: "Princess Charlotte",
      image: "https://cdn.balkan.app/shared/f18.png",
      gender: "female",
      mid: 12,
      fid: 13,
    },
    {
      id: 18,
      family_tracking_id: 1,
      name: "Prince Louis",
      image: "https://cdn.balkan.app/shared/f19.png",
      gender: "male",
      mid: 12,
      fid: 13,
    },
  ];

  useEffect(() => {
    if (chart) {
      chart.load(data);
    }
  }, [chart]);

  return (
    <div className="">
      {/* <h1
        className="
        text-2xl font-bold text-gray-800 mb-8 text-center 
      "
      >
        The Tree
      </h1> */}
      <div id="tree" className="tree"></div>
    </div>
  );
}

export default App;
