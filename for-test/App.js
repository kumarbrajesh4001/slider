import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
// import SliderImg from "./SliderImg";

function App() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 200, itemsToShow: 2 },
    { width: 400, itemsToShow: 3 },
    { width: 600, itemsToShow: 4 },
    { width: 800, itemsToShow: 5 },
    { width: 1000, itemsToShow: 6 },
    { width: 1200, itemsToShow: 7 },
  ];
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-3 mt-2 ">
          <div className="bg-gray border rounded-top text-center p-2">
            User1
          </div>
          <div className="btn-color border p-2 text-center">User2</div>
          <div className="btn-color border p-2 text-center">User3</div>
          <div className="btn-color border p-2 text-center">User4</div>
          <div className="btn-color border p-2 text-center">User5</div>
          <div className="btn-color border p-2 text-center rounded-bottom">
            User6
          </div>
        </div>
        <div className="col-9">
          <div className="row nav-btn btn-color">
            <div className="col-2 text-center py-1 border-end border-white">Recent Activity</div>
            <div className="col-2 text-center py-1 border-end border-white">Contact Info</div>
            <div className="col-2 text-center py-1 border-end border-white">Profile Info</div>
            <div className="col-2 text-center py-1 border-end border-white">Address Inf</div>
            <div className="col-2 text-center py-1 border-end border-white">Personal Info</div>
            <div className="col-2 text-center py-1 border-end border-white">Account Info</div>
          </div>
         
          <div className="rounded border mt-4 background-white py-2 px-4">
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
            <Carousel breakPoints={breakPoints}>
              <Item>
                <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>

              <Item>
                <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>

              <Item>
                <img src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>

              <Item>
                <img src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>

              <Item>
                <img src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>
              <Item>
                <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" />
              </Item>

             
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
