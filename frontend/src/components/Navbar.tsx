function Navbar() {
   return (
      <nav>
         <div class="site-title">
            <a href="/"><h1>Alma Courses</h1></a>
            <p>A course finder</p>
         </div>
         <ul>
            <li><a href="/universities">Atenei</a></li>
            <li><a href="/course-types">Tipologia Corsi</a></li>
            <li><a href="/create-course">Create Course</a></li>
         </ul>
      </nav>
   );
}

export default Navbar;