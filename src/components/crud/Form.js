import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const axios = require("axios").default;
const url = "https://laravel-api.bytecodetechnologies.co.in/api";

const Form = () => {
  const [data, setData] = useState("");
  //const [address, setAddress] = useState("");
  //const [company, setCompany] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    if (id) {
      axios
        .get(`${url}/edit-user/${id}`)
        .then(function (response) {
          console.log(response.data);
          let key = { ...response.data };
          //setAddress({ ...key.address });
          //setCompany({ ...key.company });
          setData(key);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  function forSubmit(event) {
    event.preventDefault();
    let formData = data;
    //formData.address = address;
    //formData.company = company;
    if (id) {
      console.log(id);
      formData.id = id;
      axios
        .put(`${url}/edit-user/${id}`, formData)
        .then(function (response) {
          console.log(response.data);
          navigate("/crud");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .post(`${url}/create-user`, formData)
        .then(function (response) {
          console.log(response);
          navigate("/crud");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function handleData(event) {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // function handleAddress(event) {
  //   const { name, value } = event.target;
  //   setAddress((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // }

  // function handleCompany(event) {
  //   const { name, value } = event.target;
  //   setCompany((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // }

  return (
    <div>
      <form
        className="row gy-2 gx-3 align-items-center"
        onSubmit={(e) => forSubmit(e)}
      >
        <div className="row g-3">
          <div className="col">
            <label className="visually-hidden" htmlFor="autoSizingInput">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Jane Doe"
              name="name"
              defaultValue={data.name}
              onChange={(event) => handleData(event)}
            />
          </div>
          <div className="col">
            <label className="visually-hidden" htmlFor="autoSizingInputGroup">
              Username
            </label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder="Username"
                name="username"
                defaultValue={data.username}
                onChange={(event) => handleData(event)}
              />
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col">
            <label htmlFor="inputEmail4" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              name="email"
              defaultValue={data.email}
              onChange={(event) => handleData(event)}
            />
          </div>
          <div className="col">
            <label htmlFor="inputPhone" className="visually-hidden">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              placeholder="Phone"
              name="phone"
              defaultValue={data.phone}
              onChange={(event) => handleData(event)}
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="street"
              defaultValue={data.address}
              onChange={(event) => handleData(event)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              defaultValue={data.city}
              onChange={(event) => handleData(event)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="inputState"
              name="suite"
              defaultValue={data.state}
              onChange={(event) => handleData(event)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zipcode"
              defaultValue={data.zip}
              onChange={(event) => handleData(event)}
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Website"
              aria-label="Website"
              name="website"
              defaultValue={data.website}
              onChange={(event) => handleData(event)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Company name"
              aria-label="Company name"
              name="company"
              defaultValue={data.company}
              onChange={(event) => handleData(event)}
            />
          </div>
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
