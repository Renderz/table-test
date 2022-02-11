import React from "react";
import { Table, Typography } from "antd";
import "./App.less";

// chrome86以下展示错误(86-89因为无法下载到安装包没有测试)
// safari15.2展示错误

const columns = [
  {
    title: "Full Name",
    dataIndex: "name",
    key: "name",
    // 任意一列添加ellipsis，不知道为什么不计算nowrap长度，展示错误
    ellipsis: true,
    // 添加任何一列fixed: 'left'，会把table-layout改为auto，计算全部nowrap单元格长度，展示正常
    // fixed: "left",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    // 使用Typography.Text不会存在问题
    render: (text) => (
      <Typography.Text ellipsis style={{ width: 60 }}>
        {text}
      </Typography.Text>
    ),
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
  },
  {
    title: "Column 6",
    dataIndex: "address",
    key: "6",
  },
  {
    title: "Column 7",
    dataIndex: "address",
    key: "7",
  },
  {
    title: "Column 8",
    dataIndex: "address",
    key: "8",
  },
  {
    title: "Action",
    key: "operation",
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no11111123123123123. ${i}`,
  });
}

const Demo = () => {
  return (
    // 使用定长，或者scroll.x=true(width:auto)，展示正常
    // 使用scroll.x=max-content，展示错误
    <Table columns={columns} dataSource={data} scroll={{ x: "max-content" }} />
  );
};

export default Demo;
