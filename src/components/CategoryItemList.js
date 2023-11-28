import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const CategoryItemList = (props) => {
	const { categoryItemList } = props;
	return (
		<div className="border-2 w-full h-fit bg-blue-300 rounded-xl flex justify-between px-2 my-3 items-center ">
			<div className="flex flex-col gap-1 w-8/12 py-1">
				<h1 className="text-xs font-bold md:text-lg lg:text-2xl text-blue-900">
					{categoryItemList?.info?.name}
				</h1>
				<p className="hidden md:block text-clip md:text-[12px] lg:text-[16px]">
					{categoryItemList?.info?.description}
				</p>
				<p className="text-xs font-bold md:text-lg">
					₹
					{categoryItemList?.info?.price / 100 ||
						categoryItemList?.info?.defaultPrice / 100}
				</p>
			</div>

			{categoryItemList?.info?.imageId ? (
				<div className=" w-4/12 h-fit  lg:w-2/12 relative p-1 lg:p-3">
					<img
						className="h-[40px] md:h-[70px] lg:h-[100px] w-full rounded-xl"
						srcSet={IMG_CDN_URL + categoryItemList?.info?.imageId}
					/>
					<button className="hidden md:block bg-blue-900 text-white p-2 rounded-xl absolute top-0 lg:top-3">
						Add +
					</button>
				</div>
			) : (
				<div className="w-4/12 h-full  lg:w-2/12 flex justify-center items-center">
					<button className="hidden md:block bg-blue-900 text-white p-2 rounded-xl">
						Add +
					</button>
				</div>
			)}
			<button className="block md:hidden text-xs w-1/4 rounded-xl p-1 bg-blue-900 text-white">
				Add +
			</button>
		</div>
	);
};

export default CategoryItemList;