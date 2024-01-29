import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SliderImg from "./SliderImg";

function App() {
  return (
    <div className="App">
      <div className="container row my-3">
        <div className="col-2 mt-2 ">
          <div className="btn-color border rounded-top text-center p-1">User1</div>
          <div className="btn-color border p-1 text-center">User2</div>
          <div className="btn-color border p-1 text-center">User3</div>
          <div className="btn-color border p-1 text-center">User4</div>
          <div className="btn-color border p-1 text-center">User5</div>
          <div className="btn-color border p-1 text-center rounded-bottom">User6</div>
        </div>
        <div className="col-10">
          <div className="btn-radius">
            <button className="btn-color rounded-start">Recent Activity</button>
            <button className="btn-color">Contact Info</button>
            <button className="btn-color">Profile Info</button>
            <button className="btn-color">Address Info</button>
            <button className="btn-color">Personal Info</button>
            <button className="btn-color rounded-end">Account Info</button>
          </div>
          <div className="rounded border mt-3 background-white py-2 px-4">
            <h1>Activity Information</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              debitis iure quod commodi culpa incidunt consectetur architecto
              doloribus, voluptas eaque nam vel quas nostrum atque alias eum, ea
              repellat inventore? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ullam dolorem ea tenetur nobis, accusamus
              eveniet dolorum porro beatae vitae cumque aut, alias officia
              tempore quod possimus assumenda veritatis perspiciatis magni.
            </p>
            <div className="d-flex justify-content-around">
              <ul>
                <li>List Item Text</li>
                <li>List Item Text</li>
                <li>List Item Text</li>
                <li>List Item Text</li>
                <li>List Item Text</li>
              </ul>
              <ul>
                <li>List Item Text</li>
                <li>List Item Text</li>
                <li>List Item Text</li>
                <li>List Item Text</li>
                <li>List Item Text</li>
              </ul>
              <ul className="color-red">
                <li>List Item Text</li>
                <li>List Item Text</li>
                <li>List Item Text</li>
                <li>List Item Text</li>
                <li>List Item Text</li>
              </ul>
            </div>
            <div className="text-center">
              <SliderImg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
