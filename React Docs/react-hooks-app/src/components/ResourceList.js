import React, { useState, useEffect } from "react";
import axios from "axios";

import useResources from "./userResources";

export const ResourceList = ({ resourceName }) => {
  const resources = useResources(resourceName);

  return (
    <ul>
      {resources.map((resource) => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;

// class ResourceList extends React.Component {
//   state = {
//     resource: [],
//   };

//   async componentDidMount() {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/${this.props.resourceName}`
//     );

//     this.setState({ resources: response.data });
//   }

//   componentDidMount() {
//     const fetchName = async () => {
//       try {
//         const res = await axios.get(
//           `https://jsonplaceholder.typicode.com/${this.props.resourceName}`
//         );
//         this.setState({ resource: res.data });
//       } catch (e) {
//         console.log("error");
//       }
//     };
//     fetchName();
//   }

//   componentDidUpdate(prevProps) {
//     const fetchName = async () => {
//       try {
//         const res = await axios.get(
//           `https://jsonplaceholder.typicode.com/${this.props.resourceName}`
//         );
//         this.setState({ resource: res.data });
//       } catch (e) {
//         console.log("error");
//       }
//     };

//     if (prevProps.resourceName !== this.props.resourceName) {
//       fetchName();
//     }
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.resource.map((resource) => (
//           <li key={resource.id}>{resource.title}</li>
//         ))}
//       </ul>
//     );
//   }
// }
