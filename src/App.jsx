import React from 'react';
import './style.css';
import logo from './assets/logo.png';
import Result from './components/Result';

const App = () => {
  function searchID(id, table) {
    const item = table.find((item) => item.id === id);
    console.log('item', item);
    setUser(item);
  }
  const [id, setId] = React.useState('');
  const [user, setUser] = React.useState(null);
  const [spinner, setSpinner] = React.useState(false);
  const [table, setTable] = React.useState([]);
  React.useEffect(() => {
    setSpinner(true);
    fetch(
      'https://raw.githubusercontent.com/MrAbdurakhimov/react-results/master/src/database/db.json'
    )
      .then((response) => {
        setSpinner(false);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return setTable(data);
      });
  }, []);
  return (
    <div>
      {spinner && (
        <div id="loader">
          <p className="loading-message">
            Iltimos kuting ma'lumotlar yuklanmoqda
          </p>
          <div className="spinner"></div>
        </div>
      )}
      <form className="app">
        <img src={logo} className="logo" alt="" />
        <br />
        <br />
        <p className="heading">
          Assalomu alaykum, Prezident ta'lim muassasalari agentligi imtihon
          natijalari bilish uchun web ilovaga xush kelibsiz
        </p>
        <hr />
        <input
          type="text"
          className="idInput"
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        ></input>
        <button
          className="btn getResult"
          onClick={(e) => {
            e.preventDefault();
            searchID(id, table);
          }}
        >
          Natijani olish
        </button>
      </form>
      <hr />
      {user && (
        <Result
          name={user.name}
          id={user.id}
          class1={user.class}
          school={user.school}
          type={user.type}
          count={user.count}
          count1={user.count1}
          count2={user.count2}
          count3={user.count3}
          ball={user.ball}
          ball1={user.ball1}
          ball2={user.ball2}
          ball3={user.ball3}
          result={user.result}
        />
      )}

      {user === undefined && (
        <div className="result">
          <h2>Siz kiritgan ID topilmadi</h2>
        </div>
      )}
    </div>
  );
};

export default App;
