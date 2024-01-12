import { useState } from "react";

const Test = () => {
  const [tableData, setTableData] = useState([
    {
      first: "Mark",
      last: "JSON",
      handle: "Handle",
    },
    {
      first: "Mark",
      last: "JSON",
      handle: "Handle",
    },
    {
      first: "Mark",
      last: "JSON",
      handle: "Handle",
    },
  ]);

  const handleAdd = () => {
    let data = [
      {
        first: "Mark1",
        last: "JSON",
        handle: "Handle",
      },
      {
        first: "Mark",
        last: "JSON",
        handle: "Handle",
      },
      {
        first: "Mark",
        last: "JSON",
        handle: "Handle",
      },
    ];
    setTableData(data);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">1</th>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.handle}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pt-5">
        <span className="btn btn-primary" onClick={handleAdd}>
          Add
        </span>
      </div>
    </div>
  );
};

export default Test;
