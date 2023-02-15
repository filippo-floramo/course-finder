function CreateCourse() {
   return (
      <div class="create-course content">
         <form action="/test" method="POST">
            <label for="title">Course name:</label>
            <input type="text" id="title" name="title" required />
            <label for="course-type">Course type:</label>
            <select type="text" id="course-type" name="course-type" required>
               <option value="" hidden></option>
               <option value="lol">lol</option>
               <option value="lel">lel</option>
               <option value="miao">miao</option>
            </select>
            <sub>Brand new course? <a href="">Create one here</a></sub>
            <label for="university">University:</label>
            <select type="text" id="university" name="university">
               <option value="mew">mew</option>
               <option value="ciao">lel</option>
               <option value="cazzo">miao</option>
            </select>
            <sub>Brand new university? <a href="">Create one here</a></sub>
            <button>Submit</button>
         </form>
      </div>
   );
}

export default CreateCourse;