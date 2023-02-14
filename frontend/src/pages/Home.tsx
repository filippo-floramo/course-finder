import EditCourseModal from "../components/EditCourseModal";

function Home() {
   return (
      <>
         <div class="main-list content">
            <h2>All Courses</h2>

            <div class="single">
               <div className="left">
                  <h3 class="title"> blog.title lol</h3>
                  <p class="course-type">blog course-type</p>
                  <p class="university" >Ateneo: marcoliBan</p>
               </div>
               <div className="icons">
                  <EditCourseModal />
                  <a>Delete</a>
               </div>
            </div>

         </div>
      </>
   );
}
export default Home;
