import Link from "next/link";
// import n404 from "@/public/assets/images/n404.png";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <>
      <div className="container pt-20">
        <div>
          {/* Error message display */}
          <div className="text-center mt-20">
            <div className="flex justify-center items-center">
              <Image
                width={450}
                height={450}
                src="/assets/n404.png"
                alt="image"
              />
            </div>

            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* Displaying error status text or message */}
            <p className="text-red-700 font-semibold">
              <i>page not Found</i>
            </p>
          </div>

          {/* Button to navigate back to home page */}
          <div className="text-center mt-6">
            <button className="bg-blue-600 px-4 py-2 rounded-lg">
              <Link href="/">Go Back to Home</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
