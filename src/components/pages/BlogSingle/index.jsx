import { boxShadow } from '../../../constants';
import BlogCard from '../../molecules/BlogCard';
import BlogRight from '../../organisms/BlogRight';
import ContainerWapper from '../../templates/ContainerWapper';
import MainTemplate from '../../templates/MainTemplate';
import bs1 from '../../../../public/images/content/blog_category/bs1.jpg';
import bs2 from '../../../../public/images/content/blog_category/bs2.jpg';
import bs3 from '../../../../public/images/content/blog_category/bs3.jpg';
import bs4 from '../../../../public/images/content/blog_category/bs4.jpg';
import bs5 from '../../../../public/images/content/blog_category/bs5.jpg';
import avatarDefault from '../../../../public/images/content/blog_category/comm_img1.jpg';
import Empty from '../../organisms/Empty';
import { formatDateView } from '../../../helpers/formatDateView';
import Indicator from '../../atoms/Indicator';
import { Form } from 'antd';

const data = {
    id: 1,
    thumbnail: [''],
    trailer_url: '',
    date: '2025/03/08',
    author: 'Admin',
    title: 'Simplicity is about subtracting the obvious and adding part area of the meaningful',
    description:
        'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit sequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet the mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.',
    likes: 1244,
    comments: 256,
    presenter: 1456,
    commenstData: Array.from({ length: 3 }, (_, index) => {
        return {
            id: index + 1,
            author: 'Joahn Doe',
            message:
                'The actor, director and producer, son to well-known stunt choreographer of Bollywood, rried to one of the most vivacious, bubbly, live-wire actress, is none other than our dashing Ajay Devgan, originally named Vishal Devgan !',
            date: '2025/03/05',
            avatar: '',
        };
    }),
};
const BlogSingle = () => {
    const [form] = Form.useForm();

    const handleSubmit = (data) => {
        console.log(data);
    };

    return (
        <MainTemplate>
            <ContainerWapper>
                <div className="w-[100%] flex lg:flex-row flex-col justify-between lg:items-start items-center sm:gap-0 gap-[20px] py-[100px] ">
                    <div className="lg:w-[70%] w-[95%] flex flex-col justify-start items-center gap-[40px]">
                        <BlogCard data={data} isAll={false}>
                            <div className="px-[35px] pb-[40px]">
                                <p className="mb-[40px] text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et ore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea comi consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parire
                                    Excepteur sint occaecat cupidatat non proident,
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et lore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea codo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paturi
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est labume Sed ut perspiciatis unde omnis iste natus erroet dolore
                                    magnam aliquam quaerat voluptatem.button bgin culpa qui officia deserunt mollit
                                    animin culpa qui officia deserunt mollit anim.
                                </p>

                                <div className="flex sm:flex-row flex-col justify-between items-center mb-[28px] sm:gap-0 gap-[10px]">
                                    {[bs1, bs2, bs3].map((item, index) => {
                                        return (
                                            <img src={item} alt="image" key={index} className="sm:w-auto w-[100%]" />
                                        );
                                    })}
                                </div>
                                <p className="mb-[28px] text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et ore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea comi consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parire
                                    Excepteur sint occaecat cupidatat non proident,
                                </p>

                                <div className=" flex sm:flex-row flex-col justify-between items-stretch mb-[40px]">
                                    <div className="border-[1px] border-solid border-[#ccc] p-[30px]">
                                        <p className="italic">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            temport ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        </p>
                                        <p className="text-[#ff4444]">by - Akshay H.</p>
                                    </div>
                                    <img src={bs4} alt="" />
                                </div>

                                <p className="text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et ore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea comi consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parire
                                    Excepteur sint occaecat cupidatat non proident,
                                </p>
                            </div>
                        </BlogCard>

                        <div
                            className=" flex sm:flex-row flex-col justify-between items-stretch mb-[20px]"
                            style={boxShadow}
                        >
                            <img src={bs5} alt="" className="sm:block hidden rounded-l-[10px]" />
                            <div className="border-[1px] border-solid border-[#ccc] p-[30px] bg-[#ff4444] text-white rounded-r-[10px] sm:rounded-l-[0px] rounded-l-[10px]">
                                <p className="text-[20px] font-[500] mb-[10px]">About Admin : Sandy</p>
                                <p className="text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temport ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            </div>
                        </div>

                        <div className="w-[100%] mb-[40px]">
                            <p className="text-[32px] font-[500] text-[#000]">Comments</p>
                            <Indicator style={{ marginBottom: '40px' }} />
                            <div className="flex flex-col justify-start items-start gap-[20px]">
                                {data?.commenstData?.length ? (
                                    data.commenstData.map((item) => {
                                        return (
                                            <div
                                                className="flex sm:flex-row flex-col justify-start items-start p-[20px]"
                                                style={boxShadow}
                                                key={item.id}
                                            >
                                                <img src={item?.avatar || avatarDefault} alt="" />
                                                <div className="sm:px-[20px] px-[0px]">
                                                    <p className="text-[#000] text-[18px] font-[500] mb-[5px]">
                                                        {item.author}
                                                    </p>
                                                    <p className="text-[#ff4444] mb-[10px] font-[500]">
                                                        {formatDateView(item.date)}
                                                    </p>
                                                    <p className="text-[16px] text-[#707070] text-justify">
                                                        {item.message}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <Empty />
                                )}
                            </div>
                        </div>

                        <div className="w-[100%]">
                            <p className="text-[32px] font-[500] text-[#000]">Leave a comment</p>
                            <Indicator style={{ marginBottom: '40px' }} />
                            <Form form={form} layout="vertical" onFinish={handleSubmit} requiredMark={false}>
                                <div className="flex sm:flex-row flex-col justify-between items-center">
                                    <Form.Item
                                        label="Name"
                                        className="sm:w-[45%] w-[100%]"
                                        name="name"
                                        rules={[{ required: true, message: 'Please enter your name!' }]}
                                    >
                                        <input
                                            type="text"
                                            className="bg-white w-[100%] px-[20px] py-[10px] outline-none"
                                            style={boxShadow}
                                            placeholder="Name"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        className="sm:w-[45%] w-[100%]"
                                        label="Email"
                                        name="email"
                                        rules={[
                                            { required: true, message: 'Please enter your email!' },
                                            { type: 'email', message: 'Invalid email format!' },
                                        ]}
                                    >
                                        <input
                                            type="text"
                                            className="bg-white w-[100%] px-[20px] py-[10px] outline-none"
                                            style={boxShadow}
                                            placeholder="Email"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="">
                                    <Form.Item
                                        className="w-[100%]"
                                        label="Comments"
                                        name="comments"
                                        rules={[{ required: true, message: 'Please enter your email!' }]}
                                    >
                                        <textarea
                                            className="bg-white w-[100%] outline-none min-h-[200px] py-[10px] px-[20px]"
                                            style={boxShadow}
                                            placeholder="Comments"
                                        />
                                    </Form.Item>
                                </div>
                                <button
                                    className="text-white bg-[#ff4444] p-[16px] rounded-[10px] text-[16px] font-[500]"
                                    type="submit"
                                >
                                    Send a Comment
                                </button>
                            </Form>
                        </div>
                    </div>
                    <div className="lg:w-[25%] w-[95%] py-[40px] px-[30px] bg-white rounded-[10px]" style={boxShadow}>
                        <BlogRight />
                    </div>
                </div>
            </ContainerWapper>
        </MainTemplate>
    );
};

export default BlogSingle;
