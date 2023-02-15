import Select from "react-select";
import { useState } from "preact/hooks";
function EditCourseModal() {

   const [toggleModal, setToggleModal] = useState<boolean>(false);
   const [lol, setLol] = useState<any>({
      course: "lol",
      courseType: {value: "lel", label: "miao"},
      university:  [{value: "cazzo", label: "in culo"}]
   });

   console.log(lol);

   return (
      <>
         <a onClick={() => setToggleModal(!toggleModal)}>Edit</a>
         {toggleModal &&
            <div className="backdrop">
               <div className="modal">
                  <div class="options">
                     <form>
                        <div>
                           <label for="updated-course">Course name:</label>
                           <input
                              defaultValue={lol.course}
                              onChange={(e) => console.log((e.target as HTMLInputElement).value)}
                              type="text"
                              id="change-course"
                              name="updated-course"
                              required
                           />
                           <label for="updated-course">Field of Study:</label>
                           <Select
                              name="updated-course"
                              id="updated-course"
                              options={[{ value: "ciao", label: "miao" }]}
                              styles={{
                                 container: (b) => ({
                                    ...b,
                                    margin: "10px 0",
                                    borderRadius: "20px"
                                 }),
                                 control: (b) => ({
                                    ...b,
                                    borderRadius: "2px"
                                 }),
                              }}
                           />
                           <label for="updated-univertity">University:</label>
                           <Select
                              name="updated-univertity"
                              id="updated-univertity"
                              options={[{ value: "ciao", label: "miao" },]}
                              defaultValue={lol.university}
                              onChange={(value) => console.log(value.map(v => v.label))}
                              isMulti
                              styles={{
                                 container: (b) => ({
                                    ...b,
                                    margin: "10px 0"
                                 })
                              }}
                           />
                        </div>
                     </form>
                  </div>
                  <span class="modal-button">Confirm</span>
                  <span class="modal-button" onClick={() => setToggleModal(!toggleModal)}>Undo</span>
               </div>
            </div>
         }
      </>
   );
}

export default EditCourseModal;
