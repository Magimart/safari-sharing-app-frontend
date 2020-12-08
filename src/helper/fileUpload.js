import React from "react";

const fileUload = () => {
    
  return (
      <section className="row justify-content-center text-center p-5">
      <form onSubmit={handleChange} method="POST" action="http://localhost:3000/upload-profile" enctype="multipart/form-data">
       <div>
            <label>
                 profile picture:
            </label>
          <input type="file" name="profile" />
        </div>
        <div>
        <input type="submit" value="Upload" />
       </div>
       </form>
      </section>
  );
};

export default fileUpload;


