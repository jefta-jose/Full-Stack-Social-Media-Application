import React from "react";
import { ClipLoader } from "react-spinners";

import { useGetCategoriesQuery } from "../../features/videoCategory/videoCategoryApi";

import VideoCategories from "./VideoPost";
import './videoCategoryList.scss'

const VideoCategoryList = () => {

    //Destructure mutation
    const {data: Category, error, isLoading, isError, isFetching } = useGetCategoriesQuery()
    // console.log("This is the logged categories:",Category);

    return (
        <div className="CategoryList">
            {isError && <div style={{color:"red"}}>{error.data.message}</div> }
            {(isLoading || isFetching) && <ClipLoader color="#000" loading={true}/>}
            <section className="categoriesListSection">
                {Category && Category.map((category, index) => (
                    <VideoCategories key={index} category={category}/>
                ))}
            </section>
        </div>
    )
}

export default VideoCategoryList;