import React from "react";

import "./table.css";

const Table = (props) => {
  return (
    <div>
      <div className="table-wrapper">
        <table>
          {props.headData && props.renderHeader ? (
            <thead>
              <tr>
                {props.headData.map((item, index) =>
                  props.renderHeader(item, index)
                )}
              </tr>
            </thead>
          ) : null}
          {props.bodyData && props.renderBody ? (
            <tbody>
              {props.bodyData.map((item, index) =>
                props.renderBody(item, index)
              )}
            </tbody>
          ) : null}
        </table>
      </div>
    </div>
  );
};

export default Table;
