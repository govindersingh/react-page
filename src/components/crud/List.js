import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const axios = require("axios").default;
const url = "https://laravel-api.bytecodetechnologies.co.in/api";

const List = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(`${url}`)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const editUser = (userid) => {
    navigate(`/user/${userid}`)
  }

  const deleteUser = (userid) => {
    axios.delete(`${url}/delete-user/${userid}`);
    document.getElementById(userid).remove();
    //navigate(`/crud`);
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h2>Users</h2>
          <p>A list of all users.</p>
        </div>
        <div className="text-right">
          <button onClick={() => navigate('/user')} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            New User
          </button>
        </div>
        <div className="col-start-1 col-end-7 ...">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                data.map((value, index) => {
                  return (
                    <tr key={index} id={value.user_id}>
                      <th>{value.name}</th>
                      <td>{value.username}</td>
                      <td>{value.email}</td>
                      <td>{value.website}</td>
                      <td className="col-2">
                        <a type="button" className="btn btn-primary mr-2" onClick={() => editUser(value.user_id)}>
                          Edit
                        </a>
                        <a type="button" className="btn btn-primary" onClick={() => deleteUser(value.user_id)}>
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>No data yet.</tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
