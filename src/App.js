import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import notes from "./notes";



function App() {
  return (
    <div className="App">
     <Header />
     {notes.map((content) => <Note 
    key = {content.key}
    title = {content.title}
    content = {content.content}
  />)}
  
     <Footer />
        
      
    </div>
  );
}

export default App;
