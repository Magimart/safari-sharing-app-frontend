import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css';
import React, {useState} from "react";
import Navbar from '../Headers/Navbar';


const ProfilePage = () => {

  const imageUrl  = "http://lorempixel.com/850/280/nightlife/5/"
  const imageUrlpro  = "http://lorempixel.com/850/280/nightlife/5/"



  const [formData, setFormData] = useState(null);

      const handleChange = (e) => { 

        console.log(e.target.name)
        console.log(e.target.value)
 
        const {name, value} = e.target;
          setFormData((prev) => ({ 

            ...prev, [e.target.name] : e.target.value,
          }));
             
          e.preventDefault();

        }

        const handleOnClick = () => { 
          try{ 
             fetch('http://localhost:3000/upload-profile', { 

                 method: "POST",
                 headers: { 
                   'content-Type' : 'application/json'
                  },
                  body: JSON.stringify(formData)
             })

           .then((res) => console.log(res.json(res)));

          window.location = '/'

          }catch (err){ 
           console.error(err.message);
          }
  
    }

  const getAvartar = () => console.log('clicked')
  

  return (
    <>
      <section className="row justify-content-center text-center p-5">
        <div className="container-fluid">
          <div className="fb-profile">
            <img align="left" class="fb-image-lg" src={ imageUrl}/>
            <img align="left" className="fb-image-profile thumbnail" src={ imageUrlpro}/>
              {/* upload form */}
          <form onSubmit={handleOnClick} method="POST" action="http://localhost:3000/upload-profile" enctype="multipart/form-data">
                   <div>
                      <label>
                          select pic:
                      </label>
                      <input type="file" name="profile" />
                    </div>
                  <div>
                 <input type="submit" onChange={handleChange} value="Upload" />
             </div>
         </form>
          <div className="card"  id="profile-page-content-wrap">
                 <div className="mini-nav">
                    <nav class="navbar navbar-light bg-light">
                          <a class="navbar-brand">Navbar</a>
                         <form class="form-inline">
                               <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                               <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                          </form>
                          <div class="btn-group" role="group">
                               <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  logout
                               </button>
                           <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                     <a class="dropdown-item" href="#">profile setting</a>
                                      <a class="dropdown-item" href="#">privacy setting</a>
                            </div>
                        </div>
                    </nav>
                    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <button type="button" class="btn btn-secondary"></button>
                        < button  type="button" > <h4>Upload image</h4></button>                       
                    </div>
                 </div>
                <div></div>
                <div className="card-body">
                  <div className="col-sm- ">
                    <div className="contentWrap ">
                        <div className="col-sm-4">
                      <div className="sideWrap col-sm-12">
                            <p className="share-match">
                                  With supporting text below as a natural lead-in to additional content.
                                 </p>
                            <button type="button" class="btn btn-secondary btn-sm" id="btn-share-match">your match</button>
                       </div>
                  </div>
                  <div className="articleWrap col-sm-8">
                        <div className="col-sm-12">
                            <div className="single-wrap">
                                <p className="shared-safaris-by-others">
                                    With supporting text below as a natural lead-in to additional content.
                               </p>
                               <button type="button" className="btn btn btn-secondary btn-sm" id="shared-safaris-by-others">safari shared by other travelers</button>
                             </div>
                             </div>
                          </div>
                        </div>
                       </div>
                  </div>
              </div>
            <div class="fb-profile-text">
          </div>
       </div>
       </div>
      </section>
  </>    
  );
};

export default ProfilePage;
