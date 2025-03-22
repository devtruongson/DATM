import { Modal } from 'antd';
import { hanldeGetIdViewYoutobe } from '../../../helpers/handleGetIdVideoProview';

// eslint-disable-next-line react/prop-types
export default function PreviewTrailler({ url, isModalOpen, handleCancel }) {
    return (
        <Modal open={isModalOpen} onCancel={handleCancel} width={'70vw'} footer="">
            <div className="fle justify-center items-center pt-5">
                <iframe
                    className="w-full h-[70vh] rounded-md"
                    src={`https://www.youtube.com/embed/${hanldeGetIdViewYoutobe(url)}?vq=hd1080p`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </Modal>
    );
}
