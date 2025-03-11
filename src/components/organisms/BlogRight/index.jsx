import { formatDateView } from '../../../helpers/formatDateView';
import SearchInput from '../../atoms/Input/SearchInput';
import LabelCommon from '../../atoms/LabelCommon';
import ReadMore from '../../atoms/ReadMore';
import ListCategories from '../../molecules/ListCategories';
import Empty from '../Empty';
import moviePro from '../../../../public/images/content/blog_category/side_img1.jpg';
import n1 from '../../../../public/images/content/blog_category/n1.jpg';

const recentNews = [
    {
        thumbnail: '',
        title: 'Lorem spum menus.',
        date: '2025/03/06',
    },
    {
        thumbnail: '',
        title: 'Lorem spum menus.',
        date: '2025/03/06',
    },
    {
        thumbnail: '',
        title: 'Lorem spum menus.',
        date: '2025/03/06',
    },
];

const cates = [
    {
        id: 1,
        label: 'all',
        values: 23123,
    },
    {
        id: 2,
        label: 'Action',
        values: 512,
    },
    {
        id: 3,
        label: 'Romantic',
        values: 23123,
    },
    {
        id: 4,
        label: ' Love',
        values: 23123,
    },
    {
        id: 5,
        label: 'Musical',
        values: 23123,
    },
    {
        id: 6,
        label: 'Drama',
        values: 23123,
    },
];

const archives = Array.from({ length: 7 }, (_, index) => {
    return {
        id: 1 + index,
        label: 2012 + index,
        values: 20000,
    };
});

const BlogRight = () => {
    return (
        <div className="w-[100%]">
            <SearchInput style={{ marginBottom: '40px' }} />
            <img src={moviePro} alt="" className="w-[100%] mb-[40px]" />

            <LabelCommon label={'About Presenter'} style={{ marginBottom: '20px' }} />
            <p>Lorem ipsum dolor sit amet ue adipisicing elit, sed do eiuodor incididunt ut part.</p>
            <ReadMore style={{ marginBottom: '40px' }} />

            <div className="mb-[40px]">
                <LabelCommon label={'Category'} style={{ marginBottom: '20px' }} />
                <ListCategories data={cates} />
            </div>

            <div className="mb-[40px]">
                <LabelCommon label={'Recent News'} style={{ marginBottom: '20px' }} />
                {recentNews?.length ? (
                    recentNews.map((item, index) => {
                        return (
                            <div className="flex justify-start items-center w-[100%]" key={index}>
                                <img src={item?.thumbnail || n1} alt="" />
                                <div className="pl-[10px]">
                                    <p>{item?.title}</p>
                                    <p className="text-[#ff4444]">{formatDateView(item.date)}</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <Empty />
                )}
            </div>

            <div className="mb-[40px]">
                <LabelCommon label={'Archives'} style={{ marginBottom: '20px' }} />
                <ListCategories data={archives} />
            </div>

            <div className="mb-[40px]">
                <LabelCommon label={'Subscribe'} style={{ marginBottom: '20px' }} />
                <input
                    type="text"
                    className="p-[8px] w-[100%] outline-none border-[1px] border-solid border-[#ccc] mb-[20px]"
                />
                <button className="w-[100%] p-[8px] bg-[#ff4444] text-white rounded-[10px]">Subscribe</button>
            </div>
        </div>
    );
};

export default BlogRight;
