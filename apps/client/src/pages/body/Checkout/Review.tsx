type Props = {};

export default function Review({}: Props) {
  return (
    <>
      <div className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {" "}
            <div className="flex flex-col items-center flex-1">
              {" "}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✓
              </div>{" "}
              <span className="text-sm mt-2">Cart</span>{" "}
            </div>{" "}
            <div className="flex-1 h-1 bg-green-500 mb-4"></div>{" "}
            <div className="flex flex-col items-center flex-1">
              {" "}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✓
              </div>{" "}
              <span className="text-sm mt-2">Shipping</span>{" "}
            </div>{" "}
            <div className="flex-1 h-1 bg-green-500 mb-4"></div>{" "}
            <div className="flex flex-col items-center flex-1">
              {" "}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✓
              </div>{" "}
              <span className="text-sm mt-2">Payment</span>{" "}
            </div>{" "}
            <div className="flex-1 h-1 bg-gray-300 mb-4"></div>{" "}
            <div className="flex flex-col items-center flex-1">
              {" "}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white">
                4
              </div>{" "}
              <span className="text-sm mt-2 font-medium">Review</span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
