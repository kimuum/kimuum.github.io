import React, { Component } from "react";
import styled from "styled-components";

import * as data1 from "codinglist/data/data_1.js";
import * as dataBridge from "codinglist/data/data_bridge.js";
import * as dataHome from "codinglist/data/data_home.js";
import * as dataTutorial from "codinglist/data/data_tutorial.js";

import Table from "codinglist/Table";
class CodingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };

    this.setActiveList = this.setActiveList.bind(this);
  }

  // 탭 변경 함수 //
  setActiveList(e, index) {
    this.setState((state) => {
      return {
        active: index,
      };
    });

    e.preventDefault();
  }

  render() {
    const lists = [data1, dataHome, dataBridge, dataTutorial];
    const activeList = lists[this.state.active];
    const tabs = lists.map((item, index) => (
      <li
        key={index.toString()}
        id={`tab_${index}`}
        className={
          this.state.active === index
            ? `list tab_${index} on`
            : `list tab_${index}`
        }
        onClick={(e) => this.setActiveList(e, index)}
      >
        {item.pageLabel}
      </li>
    ));

    return (
      <Wrapper id="wrap">
        <header id="header">
          <div className="header-container">
            <div className="header-box">
              <h1>LG전자 스마트홈 경험패키지 마이크로사이트</h1>
            </div>
          </div>
        </header>

        <section id="content">
          <div className="content-container">
            <div className="content-box">
              <div id="tab">
                <ul className="tab">{tabs}</ul>
              </div>
              <div className="table-container">
                {activeList && <Table data={activeList.data} />}
              </div>
            </div>
          </div>
        </section>
        <button type="button" className="top_btn">
          UP
        </button>
      </Wrapper>
    );
  }

  componentDidMount() {}
}
const Wrapper = styled.div`
  #header {
    padding: 10px 20px;
    background: linear-gradient(to right, #010708 0%, #a50034 100%);
    h1 {
      font-size: 2.4rem;
      font-weight: 700;
      color: #fff;
      line-height: normal;
      text-transform: uppercase;
    }
  }
  .content-container {
    padding: 30px 20px;
  }
  #tab {
    .tab {
      overflow-x: auto;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      max-width: 100%;
      margin: 0 auto;
      padding: 0;
    }
    .list {
      flex: 1;
      max-width: 120px;
      height: 50px;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      background-color: rgba(51, 51, 51, 0.3);
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      list-style: none;
      &.on {
        background-color: #333;
      }
    }
  }

  .table-container {
    overflow: hidden;
    overflow-x: auto;
    .content {
      display: none;
      &.on {
        display: block;
      }
    }
  }

  .coding-list {
    width: 100%;
    border-collapse: collapse;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    text-align: center;
    table-layout: fixed;
    thead {
      tr {
        th {
          height: 50px;
          border-bottom: 1px solid #ddd;
          background: #f6f6f6;
          font-size: 1.4rem;
          font-weight: 700;
          color: #333;
          line-height: normal;
          vertical-align: middle;
        }
      }
    }
    tbody {
      tr {
        td {
          height: 40px;
          padding: 0 10px;
          border-left: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          font-size: 1.6rem;
          font-weight: 400;
          color: #333;
          line-height: normal;
          vertical-align: middle;
          &::first-child {
            border-left: 0;
          }
        }
      }
    }

    td {
      /* white-space: nowrap; */
      text-align: left;
      &.category,
      &.name,
      &.link {
        text-indent: 1rem;
      }
      &.link {
        font-weight: 700;
      }
    }
  }
  .ok {
    background-color: rgba(165, 0, 52, 0.85);
    color: white !important;
  }

  .ing {
    color: #555555 !important;
  }

  .top_btn {
    opacity: 0;
    transition: all 0.5s ease;
    position: fixed;
    right: 25px;
    bottom: 10px;
    width: 50px;
    height: 50px;
    color: white;
    border: none;
    background: black;
    cursor: pointer;
    &.active {
      opacity: 1;
    }
  }
  td {
    &.order {
      font-size: 1.4rem !important;
      font-weight: bold !important;
      color: #055fb2 !important;
    }
  }

  a:hover {
    color: rgba(165, 0, 52, 0.85);
  }
  .coding-subscript {
    margin-top: 20px;
    font-size: 14px;
  }
  .td-title {
    font-weight: normal;
    color: gray;
  }

  @media screen and (max-width: 768px) {
    #header {
      h1 {
        font-size: 1.8rem;
      }
    }
    #tab {
      .tab {
        .list {
          max-width: 80px;
          height: 40px;
          font-size: 1.2rem;
          line-height: 40px;
          border-top-left-radius: 1.5rem;
          border-top-right-radius: 1.5rem;
        }
      }
    }
    .coding-list {
      tbody {
        tr {
          td {
            font-size: 14px;
          }
        }
      }
    }
    .order,
    .name,
    .number,
    .category {
      display: none !important;
    }
    .link {
      width: 60% !important;
    }
    .status {
      width: 60px !important;
    }
  }
`;
export default CodingList;
