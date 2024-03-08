// import React from 'react';
// import ClipLoader from "react-spinners/ClipLoader";
// import Photo from '../../components/photos/Photo';
// import { useGetPhotosQuery, useAddPhotoMutation } from '../../features/Photos/Photoapi'; 

// const PhotoList = () => {
//   const { data: fetchedPhotos, error, isLoading, isError, isFetching } = useGetPhotosQuery({ refetchOnReconnect: true });
//   const { data: addedPhotoData, error: addPhotoError, isLoading: addPhotoIsLoading, isError: addPhotoIsError, isFetching: addPhotoIsFetching }  = useAddPhotoMutation({ refetchOnReconnect: true });
  
//   return (
//     <div>
//       {isError && <div>Error: {error.data.message}</div>}
//       {(isLoading || isFetching || addPhotoIsLoading || addPhotoIsFetching) && <ClipLoader color="#000" loading={true} size={150} />}
//       <section className='container'>
//         {fetchedPhotos && fetchedPhotos.map((photo, index) => (
//           <Photo key={index} photo={photo} />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default PhotoList;

