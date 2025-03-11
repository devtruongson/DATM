import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Image, message, Popconfirm, Skeleton, Space, Table, Tag } from 'antd';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const CinemaList = () => {
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();
  const { data, isLoading } = useQuery({
    queryKey: ["cinemas"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/cinemas`);
      return response.data.map((cinema) => ({ key: cinema.id, ...cinema, }));
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (id) => {
      return await axios.delete(`http://localhost:3000/cinemas/${id}`);
    },
    onSuccess: () => {
      messageApi.success("Xóa sản phẩm thành công");
      queryClient.invalidateQueries({
        queryKey: ["cinemas"],
      });
    },
    onError: (error) => {
      messageApi.error("Xóa sản phẩm không thành công", error.message);
    },
  });
 

  const columns = [
    {
        title: 'Tên rạp',
        dataIndex: 'name',
        key: 'name',
      },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
    },
    {
      title: 'Thành phố/Tỉnh thành',
      dataIndex: 'province',
      key: 'province',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'imageUrl',
      key: 'image',
      render:(image)=> <Image src={image} width={100}/>
    },
    {
      title: 'Liên hệ',
      dataIndex: 'contact',
      key: 'contact',
    },
    
   
    {
      title: 'Action',
      key:"action",
      render:(_, item)=>{
        return(
        <>
          <Space>
          <Link to={`/admin/cinemas/edit/${item.id}`} >
              <Button type="primary">EDIT</Button>
            </Link>
            <Popconfirm 
              title="DELETE"
              description="ARE YOU SURE"
              okText="YES"
              cancelText="NO"
              onConfirm={()=>mutate(item.id)}
              onCancel={() => {}}
            >
              <Button type='primary' danger>DELETE</Button>
            </Popconfirm>
            
          </Space>
        </>
        )
      }
    },
  ];

  if (isLoading) return <Skeleton active/>
  
  
  return (
    <div>
      {contextHolder}
      <Link to={`/admin/cinemas/add`} >
        <Button type="primary">ADD</Button>
      </Link>
      <Table dataSource={data} columns={columns} />
    </div>
  )
}

export default CinemaList;
