import { OrganizationChart } from "primereact/organizationchart";
import React, { useState } from "react";

function App() {
  const [data] = useState([
    {
      expanded: true,
      type: "person",
      className: "bg-indigo-500 text-white",
      style: { borderRadius: "12px" },
      data: {
        image:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
        name: "Michael Scott",
        title: "Great Grandfather",
      },
      children: [
        {
          expanded: true,
          type: "person",
          className: "bg-purple-500 text-white",
          style: { borderRadius: "12px" },
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
            name: "Dwight Schrute",
            title: "Grandfather",
          },
          children: [
            {
              label: "Rabecca",
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                name: "Rabecca",
                title: "Mother",
              },
              className: "bg-purple-500 text-white",
              style: { borderRadius: "12px" },
              children: [
                {
                  label: "Angela",
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Angela",
                    title: "Daughter",
                  },
                  className: "bg-purple-500 text-white",
                  style: { borderRadius: "12px" },
                },
                {
                  label: "Dwight Jr",
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                    name: "Dwight Jr",
                    title: "Son",
                  },
                  className: "bg-purple-500 text-white",
                  style: { borderRadius: "12px" },
                },
              ],
            },
            {
              label: "Jim",
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                name: "Jim",
                title: "Father",
              },
              className: "bg-orange-500 text-white",
              style: { borderRadius: "12px" },
            },
          ],
        },
        {
          expanded: true,
          type: "person",
          className: "bg-purple-500 text-white",
          style: { borderRadius: "12px" },
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
            name: "Pam Beesly",
            title: "Grandmother",
          },
          children: [
            {
              label: "Rabecca",
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                name: "Rabecca",
                title: "Mother",
              },
              className: "bg-blue-500 text-white",
              style: { borderRadius: "12px" },
            },
            {
              label: "Jim",
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                name: "Jim",
                title: "Father",
              },
              className: "bg-purple-700 text-white",
              style: { borderRadius: "12px" },
              children: [
                {
                  label: "Angela",
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Angela",
                    title: "Daughter",
                  },
                  className: "bg-purple-500 text-white",
                  style: { borderRadius: "12px" },
                },
                {
                  label: "Dwight Jr",
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                    name: "Dwight Jr",
                    title: "Son",
                  },
                  className: "bg-green-500 text-white",
                  style: { borderRadius: "12px" },
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div className="flex flex-column">
          <div className="flex flex-column align-items-center">
            <img
              alt={node.data.name}
              src={node.data.image}
              className="mb-3 w-3rem h-3rem"
            />
            <span className="font-bold mb-2">{node.data.name}</span>
            <span>{node.data.title}</span>
          </div>
        </div>
      );
    }

    return node.label;
  };

  return (
    <div className="card overflow-x-auto">
      <h1
        className="
        text-2xl font-bold text-gray-800 mb-8 text-center 
      "
      >
        The Tree
      </h1>
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
    </div>
  );
}

export default App;
