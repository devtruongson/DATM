import { PlusOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Radio,
  Select,
  Skeleton,
  Switch,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CinemaEdit = () => {
  // Hooks
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageUrls, setImageUrls] = useState("");
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const [defaultFileList, setDefaultFileList] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();

  // useQuery
  const { data, isLoading } = useQuery({
    queryKey: ["cinemas", id],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/cinemas/${id}`);
      return response.data;
    },
  });
  useEffect(() => {
    if (data?.imageUrls) {
      setImageUrls(data.imageUrls);
      setDefaultFileList(
        data.imageUrls.map((url, index) => ({
          uid: index,
          name: `image-${index}`,
          status: "done",
          url: url,
        }))
      );
    }
  }, [data]);
  const { mutate, isPending } = useMutation({
    mutationFn: async (cinema) => {
      return await axios.put(`http://localhost:3000/cinemas/${id}`, cinema);
    },
    onSuccess: () => {
      console.log("Cập nhật thành công, điều hướng...");
      messageApi.open({
        type: "success",
        content: "Cập nhật rạp phim thành công!",
      });
    
      setTimeout(() => {
        navigate("/admin/cinemas");
      }, 2000);
    
      queryClient.invalidateQueries({
        queryKey: ["cinemas", id],
      });
    },
    
    onError: (error) => {
      messageApi.error({
        type: "error",
        content: `Cập nhật rạp phim thất bại, ${error}`,
      });
    },
  });
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onHandleChange = (info) => {
    if (info.file.status === "done") {
      setImageUrls((prev) => [...prev, info.file.response.secure_url]);
    }
  };
  const onFinish = (values) => {
    if (!imageUrls) return;
    mutate({ ...values, imageUrls });
  };
  if (isLoading) return <Skeleton active />;
  return (
    <div>
      {contextHolder}

      <h1 className="text-4xl my-8">Chỉnh sửa rạp phim</h1>
            <Form
                name="basic"
                form={form}
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
              style={{
                maxWidth: 600,
              }}
              onFinish={onFinish}
              initialValues={data}
              disabled={isPending}
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
            key={defaultFileList.length}
            multiple={true}
            action="https://api.cloudinary.com/v1_1/ecommercer2021/image/upload"
            listType="picture-card"
            data={{ upload_preset: "demo-upload" }}
            onChange={onHandleChange}
            defaultFileList={defaultFileList}
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
              <Button type="primary" htmlType="submit">EDIT</Button>
              </Form.Item>
            </Form>
    </div>
  );
};

export default CinemaEdit;

