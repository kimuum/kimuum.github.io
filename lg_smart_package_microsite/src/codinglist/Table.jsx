import React, { Component } from "react";
import { Link } from "react-router-dom";

class Table extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    // 데이터가 비동기적으로 로드되는 경우를 처리
    if (!data) {
      return <div>Loading...</div>;
    }
    // 데이터가 존재하지 않을 경우
    if (!data || data.length === 0) {
      return <div>No data available</div>;
    }

    const row = data.map((category, ki) =>
      category.list.map((list, j) => (
        <tr key={j.toString()}>
          <td className="category">{category.category}</td>
          <td className="name">{list.pageName}</td>
          <td className="link">
            <Link target="_blank" to={`/${list.fileName}`}>
              {list.fileName}
            </Link>
          </td>
          <td>{list.progress}</td>
        </tr>
      ))
    );

    return (
      <div>
        <table className="coding-list">
          <colgroup>
            <col className="category" width="15%" />
            <col className="name" width="19%" />
            <col className="link" width="20%" />
            <col className="status" width="auto" />
          </colgroup>
          <thead>
            <tr>
              <th className="category" scope="col">
                Depth01
              </th>
              <th className="name" scope="col">
                Depth02
              </th>
              <th className="link" scope="col">
                링크
              </th>
              <th className="status" scope="col">
                업데이트(기획서 버전/디자인 수정 기준)
              </th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
        <p className="coding-subscript">2024.07.10 업데이트</p>
      </div>
    );
  }
}

export default Table;
