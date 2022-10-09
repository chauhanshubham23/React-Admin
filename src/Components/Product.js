import React from "react";
import Title from "antd/lib/typography/Title";
import "../css/product.css";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { useState, useEffect } from "react";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setdataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((response) => response.json())
      .then((data) => {
        setdataSource(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "Code",
      dataIndex: "code",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Qty",
      dataIndex: "qty",
    },
    {
      key: "4",
      title: "Price",
      dataIndex: "price",
    },

    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p style={{color:'green'}}>{completed ? "Inactive" : "Active"}</p>;
      },
    },
    {
      key: "5",
      title: "Date Added",
      dataIndex: "date",
    },
  ];

  return (
    <>
      <Title level={2} className="productitle">
        Product{" "}
        <Link to="/productform">
          <PlusOutlined id="plusicon" />
        </Link>
      </Title>
      <div className="table">
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            current: page,
            pageSize: pageSize,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        ></Table>
      </div>
    </>
  );
};

export default Product;
