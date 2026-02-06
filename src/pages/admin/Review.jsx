import React from "react";
import { reviewData } from "../../data/data";
import { Helmet } from "react-helmet";
import PageTransition from "../../component/ui/PageTransition";

const Review = () => {
  return (
    <>
      <Helmet>
        <title>Review Admin</title>
      </Helmet>

      <PageTransition>
        <div className="space-y-6 md:space-y-8 xl:space-y-10 px-10 md:px-20 xl:px-30 pb-30">
          <div className="md:space-y-1 xl:space-y-3">
            <h2 className="text-xl md:text-3xl xl:text-4xl font-black text-white">
              Customer Reviews
            </h2>
            <p className="text-xs md:text-base xl:text-xl text-slate-400">
              Moderate and respond to customer feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewData.map((review) => (
              <div
                key={review.id}
                className="p-4 md:p-6 xl:p-8 rounded-2xl border border-white/10 bg-slate-950 relative group"
              >
                <div className="flex flex-col justify-between items-start mb-4">
                  <div className="flex items-center gap-2 xl:gap-4">
                    <div className="w-9 md:w-12 xl:w-15 h-9 md:h-12 xl:h-15 rounded-full text-base md:text-xl xl:text-3xl bg-slate-800 flex items-center justify-center font-bold text-blue-500">
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm md:text-lg xl:text-2xl font-bold text-white">
                        {review.user}
                      </p>
                      <p className="text-[10px] md:text-xs xl:text-base text-slate-500 uppercase font-bold">
                        {review.carModel}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm xl:text-base 2xl:text-lg text-slate-300 mt-3 italic mb-6">
                    "{review.comment}"
                  </p>
                  <div className="flex items-center justify-between w-full pt-4 border-t border-white/10">
                    <span
                      className={`text-[10px] md:text-xs xl:text-sm font-black uppercase px-2 py-1 rounded ${
                        review.status === "approved"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {review.status}
                    </span>
                    <div className="flex gap-2 xl:gap-4">
                      {review.status === "pending" && (
                        <button className="text-[10px] md:text-xs xl:text-sm font-bold text-green-500 hover:underline">
                          Approve
                        </button>
                      )}
                      <button className="text-[10px] md:text-xs xl:text-sm font-bold text-red-500 hover:underline">
                        Delete
                      </button>
                      <button className="text-[10px] md:text-xs xl:text-sm font-bold text-slate-500 hover:underline">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default Review;
