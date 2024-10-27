export default function Home() {
  return (
    <div className="flex py-4 pb-4 justify-center bg-white">
   
      <div className="w-full px-2 max-w-4xl ">
        <h1 className="py-1 font-bold text-center mb-8 text-4xl w-full text-blue-900 ">
          Sell Your Car on PakWheels and Get the Best Price
        </h1>

        <div className="flex items-center justify-center gap-8">

          <div className="w-1/2 pl-4 text-left  ">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Post your Ad on PakWheels</h2>
            <ul className="text-gray-700 space-y-2">
              <li>✔ Post your Ad for Free in 3 Easy Steps</li>
              <li>✔ Get Genuine offers from Verified Buyers</li>
              <li>✔ Sell your car Fast at the Best Price</li>
            </ul>
            <button className="mt-4 bg-red-700 hover hover:bg-red-900 text-white px-6 py-3 rounded-lg">
              Post Your Ad
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-px h-20 bg-gray-500 mb-2"></div>
            <span className="text-gray-800 font-semibold">OR</span>
            <div className="w-px h-20 bg-gray-500 mt-2"></div>
          </div>


          <div className="w-1/2 text-left pl-4">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Try PakWheels Sell It For Me</h2>
            <ul className="text-gray-700 space-y-2">
              <li>✔ Dedicated Sales Expert To Sell Your Car</li>
              <li>✔ We Bargain For You And Share The Best Offer</li>
              <li>✔ We Ensure Safe & Secure Transaction</li>
            </ul>
            <button className="mt-4 bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded-lg">
              Register Your Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}