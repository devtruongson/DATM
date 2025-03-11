/* eslint-disable react/no-children-prop */
import { boxShadow } from '../../../constants';
import BlogCard from '../../molecules/BlogCard';
import Empty from '../../organisms/Empty';
import ContainerWapper from '../../templates/ContainerWapper';
import MainTemplate from '../../templates/MainTemplate';
import BlogRight from '../../organisms/BlogRight';
const data = [
    {
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
    },
    {
        id: 1,
        thumbnail: ['', '', ''],
        trailer_url: '',
        date: '2025/03/08',
        author: 'Admin',
        title: 'Simplicity is about subtracting the obvious and adding part area of the meaningful',
        description:
            'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit sequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet the mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.',
        likes: 1244,
        comments: 256,
        presenter: 1456,
    },
    {
        id: 1,
        thumbnail: ['a'],
        trailer_url: 'https://www.youtube.com/embed/XVtxye3c4AU',
        date: '2025/03/08',
        author: 'Admin',
        title: 'Simplicity is about subtracting the obvious and adding part area of the meaningful',
        description:
            'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit sequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet the mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.',
        likes: 1244,
        comments: 256,
        presenter: 1456,
    },
    {
        id: 1,
        thumbnail: [],
        trailer_url: 'https://www.youtube.com/embed/XVtxye3c4AU',
        date: '2025/03/08',
        author: 'Admin',
        title: 'Simplicity is about subtracting the obvious and adding part area of the meaningful',
        description:
            'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit sequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet the mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.',
        likes: 1244,
        comments: 256,
        presenter: 1456,
    },
];

const BlogCategory = () => {
    return (
        <MainTemplate>
            <ContainerWapper>
                <div className="w-[100%] flex lg:flex-row flex-col justify-between lg:items-start items-center lg:gap-0 gap-[20px] py-[100px] ">
                    <div className="lg:w-[70%] w-[95%] flex flex-col justify-start items-center gap-[40px]">
                        {data?.length ? (
                            data.map((item) => {
                                return <BlogCard key={item?.id} data={item} children={null} />;
                            })
                        ) : (
                            <Empty />
                        )}
                    </div>
                    <div className="lg:w-[25%] w-[95%] py-[40px] px-[30px] bg-white rounded-[10px]" style={boxShadow}>
                        <BlogRight />
                    </div>
                </div>
            </ContainerWapper>
        </MainTemplate>
    );
};

export default BlogCategory;
