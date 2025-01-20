import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect ,createContext} from 'react';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import About from './About';
import Contacts from './component/Contacts';
import Home from './component/Home';
import Services from './component/Services';
import Message from './component/message';
import { useTranslation } from 'react-i18next';
import './i18n';


// import img1 from './img/pic1.jpg';
// import img2 from './img/pic2.jpg';
// import img3 from './img/pic3.jpg';
// import img4 from './img/pic4.jpg';
// import img6 from './img/pic6.jpg';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// export default App;
// function Gallery(){
// const [items,setItems]=useState([img1, img2, img3, img4,img6]);
// const [index,setIndex]=useState(0);
// return(
//   <>
//   <h1>my Gallery</h1>

//   <button onClick={() =>setIndex((index + 1) % items.length)}>»</button>
//   <img src={items[index]} alt={`Gallery ${index + 1}`} />
//   <button onClick={() =>setIndex((index - 1 + items.length) % items.length)}>«</button>
//    </>

// );
// }
// export default Gallery;




// function TryCollection() {
//   const [activities, setActivities] = useState(["Soccer", "Dance", "Hiking", "Travel", "Basket", "Garden", "Skiing", "Coding", "Picnic"]);

//   const addActivity = (newItem) => setActivities([...activities, newItem]);
//   const removeActivity = (indexToRemove) => {
//     setActivities(activities.filter((_, index) => index !== indexToRemove));
//   };

//   const showAll = () => {
//     activities.forEach((activity) => {
//       console.log(activity);  // מדפיס את כל פעילות בקונסול
//     });
//   };

//   useEffect(() => {
//     const savedActivities = JSON.parse(localStorage.getItem('activities')) || [];
//     setActivities(savedActivities);
//   }, []);

//   return (
//     <>
//       <button onClick={() => addActivity("Fishing")}>add_item</button>
//       <button onClick={() => showAll()}>print</button>
//     </>
//   );
// }

// export default TryCollection;
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation(); // שימוש ב-i18next לשינוי שפה
  const [language, setLanguage] = useState(i18n.language); // שמירת השפה הנוכחית

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // שינוי השפה ב-i18next
    setLanguage(lang); // עדכון המצב בקונטקסט
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function My_App(){
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return(
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">Aboute</Link>
      <Link to="/Services">Services</Link>
      <Link to="/Contacts">Contacts</Link>
     <button onClick={()=>changeLanguage('en')}>English</button>
     <button onClick={()=>changeLanguage('he')}>עברית</button>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Services" element={<Services />}></Route>
      <Route path="/Contacts" element={<Contacts />}></Route>
      <Route path="/message" element={<Message />}></Route>

    </Routes>
    </BrowserRouter>
  )
}
export default My_App;