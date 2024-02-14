import { useState } from "react";

const checkDateValidity = (validityDate, checkDate) => {
    const validity = new Date(validityDate);
    const check = new Date(checkDate);
    
    return check < validity;
};

const Search = ({ studentsList, residentsList, setResidentsList, setError }) => {
  const [studentName, setStudentName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  
    const handleAddStudent = () => {

        console.log("Students List:", studentsList);
        console.log("Student Name:", studentName);

        
        const existingStudent = studentsList.find(student => {
            console.log("Searching for:", studentName);
            console.log("Comparing with:", student.name);
            console.log("student: " + student)
            return student.name === studentName;
        });


        console.log("Existing student: ", existingStudent);
        if (!existingStudent) {
            setError("Student not found");
            return;
        }

        const isValidDate = checkDateValidity(existingStudent.validDate, selectedDate);
        if (!isValidDate) {
            setError("Student past valid date. Cannot add to the dormitory.");
            return;
        }
        
        setError("")
        setResidentsList([...residentsList, existingStudent]);
        setStudentName("")
        setSelectedDate("")
        console.log("Submit!");
    }


  return (
    <div className="search-container">
      <div className="search-input">
        <input 
            type="text" 
            placeholder="Search name" 
            value={studentName} 
            onChange={(e) => setStudentName(e.target.value)}
        />
      </div>
      <div className="date-select">
        <input 
            type="date" 
            placeholder="Search name" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <button onClick={handleAddStudent}>Submit</button>
    </div>
  );
};

export default Search;
