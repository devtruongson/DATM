import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, Rate, Select, Switch, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const CinemaAdd = () => {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (cinema) => {
      await axios.post("http://localhost:3000/cinemas", cinema);
    },
    onSuccess: () => {
      
      navigate("/admin/cinemas");
    },
  });

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onUploadChange = (info) => {
    if (info.file.status == "done") {
      setImageUrl(info.file.response.secure_url);
    }
  };

  const onFinish = (values) => {
    mutate({ ...values, imageUrl });
  };
  return (
    <div>
      <h1 className="text-4xl my-8">Thêm mới rạp phim</h1>
      <Form
        name="add-form"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Tên rạp phim"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên rạp phim",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập địa chỉ rạp phim",
            },
          ]}
        >
         <Input />
        </Form.Item>
        <Form.Item label="Thành phố" name="province">
          <Select>
            <Select.Option value="province1">Thành phố 1</Select.Option>
            <Select.Option value="province2">Thành phố 2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            action="https://api.cloudinary.com/v1_1/dxhgeg7vi/image/upload"
            listType="picture-card"
            data={{ upload_preset: "upload-demo" }}
            onChange={onUploadChange}
          >
            <button
              style={{
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="contact"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số điện thoại",
            },
            {
              pattern: /^[0-9]{10}$/,
              message: "Số điện thoại phải có 10 chữ số",
            },
          ]}
          >
          <Input />
        </Form.Item>
        
       
        <Form.Item>
          <Button htmlType="submit">ADD</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CinemaAdd;