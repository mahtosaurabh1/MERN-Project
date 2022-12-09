import React, { useEffect, useState } from "react";
import "../Styles/planDetail.css";
import "../Styles/contact.css";
import { useNavigate } from "react-router-dom";

function PlanDetail() {
  // const [plan, setplan] = useState({})
  let plan = {
    name: "hello",
    price: 500,
    duration: "30",
    discount: "20%",
    ratingsAverage: "4*",
  };
  let arr = [{ review: "5*", rating: 5 }];

  const [review, setreview] = useState("");
  const [rate, setrate] = useState("");

  const [allReview, setAllReview] = useState([]);

  let auth = localStorage.getItem("user");
  let navigate = useNavigate();

  useEffect(() => {
    getAllReview();
  }, []);

  const handleClick = async () => {
    let result = await fetch("http://localhost:5000/add-review", {
      method: "post",
      body: JSON.stringify({ review, rate }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    getAllReview();
  };

  const getAllReview = async () => {
    let result = await fetch("http://localhost:5000/get-review");
    result = await result.json();
    console.log("review",result);
    setAllReview(result);
  };
  const handleDelete = async (id) => {
    let result = await fetch(`http://localhost:5000/delete-review/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getAllReview();
    }
  };

  return (
    <div className="pDetailBox">
      <div className="h1Box">
        <h1 className="h1">PLAN DETAILS</h1>
        <div className="line"></div>
      </div>
      <div className="planDetailBox">
        <div className="planDetail">
          <div className="loginBox">
            {
              <div className="entryBox">
                <div className="entryText">Premimum Quality Food</div>
                <div className=" input">Delux Item</div>
              </div>
            }
          </div>
        </div>
      </div>

      <div className="reviewBox">
        <div className="reviewEnrty">
          <input
            type="text"
            value={review}
            onChange={(e) => setreview(e.target.value)}
          />
          <select
            name=""
            id=""
            className="select"
            onChange={(e) => {
              console.log(e.target.value);
              setrate(e.target.value);
            }}
          >
            <option value="5">5 Exellent</option>
            <option value="4">4 Very Good</option>
            <option value="3">3 Good</option>
            <option value="2">2 Poor</option>
            <option value="1">1 Very Poor</option>
          </select>
          <button className="btn" onClick={handleClick}>
            Submit
          </button>
        </div>
        {allReview.length > 0 ? (
          allReview.map((ele, idx) => {
            return (
              <div className="reviewsCard">
                <div className="pdreviews">
                  <div className="pdrdetail">
                    <h3>{JSON.parse(auth).name}</h3>
                    <div className="input">{ele.review}</div>
                  </div>
                  <div className="rate">
                    {
                      
                      <label htmlFor="star5" title="text">
                        {ele.rate}
                      </label>
                    }
                  </div>
                </div>

                <div className="rcBtn">
                  <button
                    className="showMoreBtn btn"
                    onClick={() => handleDelete(ele._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>no review yet</h1>
        )}
      </div>
    </div>
  );
}

export default PlanDetail;
