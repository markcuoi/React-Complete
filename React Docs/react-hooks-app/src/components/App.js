import React, { useState } from "react";
import ResourceList from "./ResourceList";
import { User } from "./User";

export const App = () => {
  const [resourceName, setResourceName] = useState("posts");

  return (
    <React.Fragment>
      <App />
      <button onClick={() => setResourceName("posts")}>Posts</button>
      <button onClick={() => setResourceName("todos")}>Todos</button>

      <ResourceList resourceName={resourceName} />
    </React.Fragment>
  );
};

export default App;

// class App extends React.Component {
//   state = {
//     resourceName: "posts",
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <button onClick={() => this.setState({ resourceName: "posts" })}>
//           Posts
//         </button>
//         <button onClick={() => this.setState({ resourceName: "todos" })}>
//           Todos
//         </button>
//         <ResourceList resourceName={this.state.resourceName} />
//       </React.Fragment>
//     );
//   }
// }