import React from "react";

import "./table.css";

const Table = (props) => {
  return (
    <div>
      <div className="table-wrapper">
        <table>
          {props.headData && props.renderHeader ? (
            <thread>
              <tr>
                {props.headData.map((item, index) =>
                  props.renderHeader(item, index)
                )}
              </tr>
            </thread>
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
