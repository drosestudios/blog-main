import Image from "next/image";

const BlogDesign01 = ({ img, topic, content, date}) => {
  return (
    <section className="mt-5">
      {/* Information Text Panel */}
      <div className="rounded w-full md:w-[415px] mx-auto md:mx-0 h-auto shadow-md mb-6 flex flex-col">
        <div className="relative w-full md:w-[415px] h-[200px]">
          <Image quality={100} src={img} layout="fill" objectFit="cover"
          className="bg-blend-overlay object-cover brightness-100 rounded" />
        </div>

        <div className="text-justify">
          <h1 className="text-[20px] m-4 text-black font-bold dark:text-white">{topic}</h1>

          <p className="text-[15px] m-4 mt-4 whitespace-wrap text-gray-600 dark:text-gray-100">
                {content}
          </p>

          <p className="text-[14.5px] m-4 font-medium text-gray-900 dark:text-gray-400">Angelo Mejia</p>
          <p className="text-[14.5px] m-4 mt-[-8px] text-gray-600 dark:text-gray-500">{date}</p>
        </div>

      </div>
    </section>
  );
};

export default BlogDesign01;
