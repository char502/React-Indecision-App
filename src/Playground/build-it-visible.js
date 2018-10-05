// Andrew's version

const appRoot = document.getElementById("app");

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, appRoot);
};

render();

// --------------------------------------------

// console.log("App.js is running");

// My version - not as pretty but still works

// const text = {
//   text: "Hey. These are some details you can now see!"
// };

// let textCondition = "";
// let detail = "";
// let visibility = true;

// const visibilityToggle = () => {
//   if (!textCondition) {
//     textCondition = text.text;
//     visibility = false;
//   } else {
//     textCondition = "";
//     visibility = true;
//   }
//   //console.log(textCondition);
//   renderVisibilityApp();
// };

// const appRoot = document.getElementById("app");

// const renderVisibilityApp = () => {
//   const visabilityTemplate = (
//     <div>
//       <h3>Visibility Toggle</h3>
//       <button onClick={visibilityToggle}>
//         {visibility ? "Show Details" : "Hide Details"}
//       </button>
//       <p>{textCondition}</p>
//     </div>
//   );
//   ReactDOM.render(visabilityTemplate, appRoot);
// };
// renderVisibilityApp();
