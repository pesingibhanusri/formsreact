// import { Component } from "react";

// class Loginform extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//       formdata: [], // Array to store form data
//     };
//   }

//   handlechange = (e) => {
//     // Update state as the user types into the form fields
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handlesubmit = (e) => {
//     e.preventDefault();
//     const { username, email, password } = this.state;

//     // Append new form data to the formdata array
//     this.setState((prevState) => ({
//       formdata: [...prevState.formdata, { username, email, password }],
//       username: "",  // Reset the input fields after submission
//       email: "",
//       password: "",
//     }));
//   };

//   render() {
//     console.log(this.state); // Debug log to check form data
//     return (
//       <>
//         <form onSubmit={this.handlesubmit}>
//           <label htmlFor="username">Name</label>
//           <input
//             type="text"
//             placeholder="Enter username"
//             id="username"
//             name="username"
//             value={this.state.username} // Controlled input
//             onChange={this.handlechange}
//           />
//           <br />
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             placeholder="Enter email"
//             id="email"
//             name="email"
//             value={this.state.email} // Controlled input
//             onChange={this.handlechange}
//           />
//           <br />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             placeholder="Enter password"
//             id="password"
//             name="password"
//             value={this.state.password} // Controlled input
//             onChange={this.handlechange}
//           />
//           <br />
//           <button type="submit">Login</button>
//         </form>

//         {/* Render form data in a table after submission */}
//         {this.state.formdata.length > 0 ? (
//           <table border="1" cellSpacing="0" style={{ marginTop: "20px" }}>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Password</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.formdata.map((data, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{data.username}</td>
//                     <td>{data.email}</td>
//                     <td>{data.password}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         ) : (
//           <p>Loading......</p> // Message displayed when no form data is submitted yet
//         )}
//       </>
//     );
//   }
// }

// export default Loginform;



// // { this.state.formdata ?
// //     <div>
// //     <h2>Name:{this.state.formdata.username}</h2>
// //     <h2>Email:{this.state.formdata.email}</h2>
// //     <h2>Password:{this.state.formdata.password}</h2>
// //     </div>:"loading....."
            
// //     }


import { Component } from "react";

class Loginform extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      formdata: [], 
    };
  }

  handlechange = (e) => {
   
    this.setState({ [e.target.name]: e.target.value });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;

  
    this.setState((e) => ({
      formdata: [...e.formdata, { username, email, password }],
      username: "",  // 
      email: "",
      password: "",
    }));
  };

  render() {
    console.log(this.state); 
    return (
      <>
        <form onSubmit={this.handlesubmit}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            placeholder="Enter username"
            id="username"
            name="username"
            value={this.state.username} 
            onChange={this.handlechange}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
            value={this.state.email} 
            onChange={this.handlechange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handlechange}
          />
          <br />
          <button type="submit">Login</button>
        </form>

       
        {this.state.formdata.length > 0 ? (
          <table border="1" cellSpacing="0" style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {this.state.formdata.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>Loading......</p> 
        )}
      </>
    );
  }
}

export default Loginform;
