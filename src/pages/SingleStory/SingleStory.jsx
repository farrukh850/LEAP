import { Link } from 'react-router-dom';
import "../../assets/css/main.css";
import { useParams } from 'react-router-dom';
import stories from '../../data/stories.json';

const Home = () => {
    const { id } = useParams();
    const story = stories.find(story => story.id === parseInt(id));

    if (!story) {
        return <div className="container mx-auto px-4 py-8">Story not found</div>;
    }
    return (
        <>
            <div className="bg-[url('/images/inner-banner.png')] bg-no-repeat bg-center bg-cover lg:h-screen max-lg:h-96 max-lg:px-5">
                <div className="container">
                    <div className="flex flex-col items-center justify-center text-center lg:h-screen max-w-[911px] mx-auto max-lg:h-96">
                        <h1 className="text-5xl max-lg:text-3xl max-lg:leading-10 text-white leading-16 font-poppins font-bold">{story.title}</h1>
                    </div>
                </div>
            </div>
            <div className="container pt-22 pb-44 max-xl:px-5">
                    <div className="max-w-[840px] mx-auto">
                        <div className="w-full h-[386px] rounded-lg overflow-hidden">
                            <img src={story.image} alt="Blog Image" className="w-full h-full object-cover" />
                        </div>
                        {story.content.split("<br /><br />").map((line, index) => (
                            <p key={index} className="mt-12 whitespace-pre-line text-base leading-6 text-[#555]">
                                {line} {/* No need for replace() here */}
                            </p>
                        ))}
                    </div>
                    <div className="grid grid-cols-12 max-lg:space-y-28 gap-6 mt-20">
                        {stories.map(story => (
                            <div className="col-span-4 max-sm:col-span-12 max-lg:col-span-6 relative">
                                <div className="w-full h-[286px] rounded-lg overflow-hidden">
                                <img src={story.image} alt="Success Story Image" className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4 bg-[#F5F7FA] shadow-[0px_8px_16px_0px_#ABBED166] rounded-lg text-center absolute top-[75%] mx-6 min-h-[168px]">
                                <h3 className="text-xl leading-7 text-[#242424] font-semibold">{story.title}</h3>
                                <Link  to={`/stories/${story.id}`} className="flex items-center gap-2 justify-center mt-6"><p className="text-xl leading-7 text-[#78A07C] font-poppins font-semibold">Readmore</p><img src="/images/arrow-right-green.svg" alt="Arrow Right Green" /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </>
    );
};

export default Home;