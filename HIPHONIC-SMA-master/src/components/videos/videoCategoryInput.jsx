import React, {useState} from "react";
import { MdAddCircle } from "react-icons/md";

import { useAddCategoryMutation } from "../../features/videoCategory/videoCategoryApi";

import './videoCategoryInput.scss'

const videoCategoryInput = () => {
const [addCategory] = useAddCategoryMutation();
const [categoryName, setCategoryName] = useState('');
const [previewURL, setPreviewURL] = useState('');

// Add video hidden form
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
      setIsVisible(!isVisible);
  };

  //Handle input area changes

    // Handle when the Video Category Name field is changed
        const handleCategoryNameInputChange = (e) => {
            setCategoryName(e.target.value);
        };

    // Handle when the Video Category Name field is changed
        const handlePreviewURLInputChange = (e) => {
            setPreviewURL(e.target.value);
        };

// Handle when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (categoryName.trim() !== '') {
        const videoCategoryWithData = {
            categoryName: categoryName,
            previewURL: previewURL,
          }
    
        addCategory(videoCategoryWithData)
        .then((response) => {
        console.log('Category created successfully:', videoCategoryWithData);
        setVideoUrl('');
        setVideoCaption('');
        });
    } else {
        console.log('Category not created');
      }
    };

    return (
        <div className="videoCategoryInputComponent">
            <MdAddCircle style={{fontSize:'100px'}} onClick={toggleVisibility}/>
              <p>Add category</p>
              {/*            */}
              <div className="videoCategoryInputContainer">
                <form 
                className="videoCategoryInputForm"
                onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    value={categoryName}
                    onChange={handleCategoryNameInputChange}
                    placeholder='Enter category name...'
                    required
                  />
                  <input
                    type="text"
                    value={previewURL}
                    onChange={handlePreviewURLInputChange}
                    placeholder='Enter preview URL...'
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
                
              </div>
            {/* //   )} */}
        </div>
    )
}

export default videoCategoryInput;