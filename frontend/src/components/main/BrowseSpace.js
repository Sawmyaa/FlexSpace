import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";

const BrowseSpace = () => {
  const [allSpaceData, setAllSpaceData] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { apiUrl } = app_config;

  const { location, price } = useParams();

  const categories = [
    "Office",
    "Warehouse",
    "Meeting Room",
    "Coworking Space",
    "Training Room",
    "Event Space",
    "Retail Space",
  ];

  const priceRange = [
    "0-500",
    "500-1000",
    "1000-2000",
    "20000-3000",
    "Above 3000",
  ];

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangaluru",
    "Hyderabad",
    "Ahmedabad",
    "Kanpur",
    "Lucknow"
  ]

  const [selCategory, setSelCategory] = useState(null);
  const [selPriceRange, setSelPriceRange] = useState(null);
  const [selCity, setSelCity] = useState(null);
  const [entryPerPage, setEntryPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const fetchAllSpaceData = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/addSpace/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      if (location && price) {
        const [p1, p2] = price.split("-").map((p) => parseInt(p));
        console.log(p1, p2);
        const filtered = data.filter(
          (data) => data["location"] === location && data["price"] >= p1 && data["price"] <= p2
        );
        setMasterList(filtered);
        setAllSpaceData(data);

      }
      setLoading(false);
      setMasterList(data);
      setAllSpaceData(data);
    }
  };

  const displayPagination = () => {
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(allSpaceData.length / entryPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {/* {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <Link
                className="page-link"
                href="#"
                onClick={() => paginate(number)}
              >
                {number}
              </Li>
            </li>
          ))} */}
        </ul>
      </nav>
    );
  }

  const filterBar = () => {
    return (
      <MDBAccordion
        flush
        className="border border-success rounded-7 text-center"
      >
        <MDBAccordionItem collapseId={1} headerTitle="Filter Space">
          {displayCategoryData()}
        </MDBAccordionItem>
      </MDBAccordion>
    );
  };

  useEffect(() => {

  }, [])


  const filterSpace = async (category, value) => {
    console.log(category, value);
    const res = await fetch(apiUrl + "/addSpace/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    let filtered = [];
    if (category === "rate") {
      const [p1, p2] = value.split("-").map((p) => parseInt(p));
      console.log(p1, p2);
      filtered = data.filter(
        (data) => data[category] >= p1 && data[category] <= p2
      );
    } else {
      filtered = data.filter((d) =>
        d[category].toLowerCase().includes(value.toLowerCase())
      );
    }

    console.log(filtered);
    setAllSpaceData(filtered);
    setMasterList(filtered);
  };

  const displayCategoryData = () => {
    return (
      <div>
        <button
          className="btn btn-primary btn-rounded"
          onClick={fetchAllSpaceData}
        >
          All
        </button>
        {categories.map((cat, index) => (
          <div className="mx-2 text-center" key={index}>
            <button
              className={`btn ${selCategory === index ? "btn-secondary" : "btn-primary mt-3"
                } btn-rounded`}
              onClick={() => {
                filterSpace("name", `${cat}`);
              }}
            >
              {cat}
            </button>
          </div>
        ))}
      </div>
    );
  };

  const applySearch = async (searchInput) => {
    let filtered = masterList.filter((data) =>
      data.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(filtered);
    setAllSpaceData(filtered);
  };

  useEffect(() => {
    fetchAllSpaceData();
  }, []);

  const displaySpaceData = () => {
    if (!loading) {
      return allSpaceData.map((space, index) => (
        <div className="row justify-content-center mb-3" key={space._id}>
          <div className="col-md-12 col-xl-12">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        // src={space.image ? space.image : "/images/space-placeholder.jpg"}
                        src={"http://localhost:5000/" + space.image}
                        className="w-100"
                        alt=""
                      />
                      <a href="#!">
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(253, 253, 253, 0.15)",
                            }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h5>{space.name}</h5>

                    <div className="mt-1 mb-0 text-muted small">
                      <span className="text-primary"> • </span>
                      <span>{space.location}</span>
                    </div>

                    <p className="text-truncate mb-4 mb-md-0">
                      {space.facilities}
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">₹{space.rate}</h4>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <Link
                        to={`/user/book/${space._id}`}
                        className="btn btn-primary btn-sm"
                        type="button"
                      >
                        Book Now
                      </Link>
                      <Link
                        to={`/main/spacedetails/${space._id}`}
                        className="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    } else {
      return <div>Loading...</div>;
    }
  };

  return (
    <div>
      <header
        className="page-header"
        style={{
          backgroundImage: `url('https://assets.entrepreneur.com/content/3x2/2000/20150804172201-office-space-rent-startup.jpeg')`,
          height: "25vh",
          backgroundPosition: "center",
        }}
      >
        <div
          className="container-fluid h-100 p-5"
          style={{ backgroundColor: "#00000094" }}
        >
          <p className="display-4 fw-bold text-white">
            Get Flexible Office Spaces for any occasion
          </p>
          <div className="input-group my-3">
            <input
              type="text"
              className="form-control form-control-lg"
              onChange={(e) => applySearch(e.target.value)}
            />
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-md-3">
            {filterBar()}
            <hr className="mt-3" />
            <h3>Select Price Range</h3>

            {priceRange.map((range) => (
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked={range === selPriceRange}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelPriceRange(range);
                      filterSpace("rate", range);
                    } else {
                      setSelPriceRange(null);
                      fetchAllSpaceData();
                    }
                  }}
                />
                <label class="form-check-label">{range}</label>
              </div>
            ))}

            <hr className="mt-3" />
            <h3>Select Location</h3>

            {cities.map((city) => (
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked={city === selCity}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelCity(city);
                      // --------------------------to change to city
                      filterSpace("location", city);
                    } else {
                      setSelCity(null);
                      fetchAllSpaceData();
                    }
                  }}
                />
                <label class="form-check-label">{city}</label>
              </div>
            ))}

          </div>
          <div className="col-md-9">
            <div className="d-flex">
              {/* <button className="btn btn-primary btn-rounded" onClick={fetchAllSpaceData}>All</button> */}
              {/* <div className="d-flex">{displayCategoryData()}</div> */}
            </div>

            <hr />
            {displaySpaceData()}
            {/* <nav aria-label="..." className="my-3">
              <ul className="pagination pagination-circle">
                <li className="page-item">
                  <a className="page-link">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    2 <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseSpace;
