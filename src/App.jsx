import './App.scss';
import Card from './components/card/card';
import React,{useState, useEffect} from 'react';
import getCardData from './services/getData';

const App = () =>  {
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);

  

  useEffect(() => {
    getCardData()
        .then( (data)=> {
          setData(data)
        })

  }, []); 
  
  function deleteButton() {
    if(click){
      return {opacity: 0}
    }
  }
  
  return (
    <main className="main">
      <strong className="description">Похожие объвления</strong>
      <div className="App">
        { 
          data.map((items) => { 
            function returnCards() {
              if(click){
                return <Card data={items}/>;
              }
              else{
                if(items.id<=16){
                  return <Card data={items}/>;
                }
              }
            }
            return returnCards();
          })
        }
      </div>
      <div className="showMore" onClick={() => setClick(true)} style={deleteButton()}>
        <span className="text">Показать еще</span>
        <span className="expand"></span>
      </div>
    </main>
  );
}

export default App;
