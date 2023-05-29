import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { Link } from "react-router-dom";
import { setIn } from "formik";

const CompareSpaces = () => {


  const [spaceList, setSpaceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { apiUrl } = app_config;

  const [spaceNames, setSpaceNames] = useState([]);

  const [compareList, setCompareList] = useState([]);
  const [inputText, setInputText] = useState('');

  const fetchSpaceData = async () => {
    setLoading(true);
    const res = await fetch(
      apiUrl + "/addSpace/getall"
    );
    setLoading(false);
    console.log(res.status);
    // console.log(currentUser._id)

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setSpaceNames(data.map(space => space.name))
      setSpaceList(data);
    }
  };

  useEffect(() => {
    fetchSpaceData();
  }, [])


  const dataCard = (data) => {
    if (data !== null) {
      return (
        <div className="col-md">
          <div className="card">
            <div className="top-img" style={{backgroundImage: `url('${apiUrl + '/' + data.image}')`}}></div>
            {/* <img src={} className="card-img-top" alt="" /> */}
            <div className="card-body">
              <div className="">
                <p className="text-center text-primary fw-bold">{data.name}</p>

                <p>
                <strong>Location: {data.location}</strong>
              </p>
             
                {/* <div className="d-flex">
                <Link
                  to={"/user/devdetails/" + devData.login}
                  className="btn btn-primary mt-4 me-2"
                >
                  View More
                </Link>
                <Link to={devData.url} className="btn btn-dark mt-4 me-2">
                  &nbsp;&nbsp;<i class="fa-brands fa-github"></i> Github Profile
                </Link>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <header>
        <div className="container py-5">
          <p className="display-4 text-center fw-bold">Compare Office Spaces</p>
        </div>
      </header>
      <hr />
      <div className="container">
        <div className="input-group">
          <input
            className="form-control"
            list="names"
            onChange={e => setInputText(e.target.value)}
          />
          <datalist id="names">
            {spaceNames.map((name) => (
              <option value={name} />
            ))}

          </datalist>
          <button className="btn btn-primary" onClick={e => {
            if (compareList.length === 3) return;
            setCompareList([...compareList, spaceList.find(space => space.name.includes(inputText))]);
          }}>
            <i className="fas fa-search"></i> Add To Compare
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div className="container-fluid">
          <div className="row">
            {
              compareList.map(dataCard)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareSpaces;
