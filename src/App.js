import { useEffect, useState } from 'react';
import './App.css';
import ApiItem from './components/ApiItem';
import Message from './components/Message';
// import getData from './data/api-data.json';

function App() {
  const [search, setSearch] = useState('');
  const [apiList, setApiList] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch("https://615459e32473940017efadc7.mockapi.io/api_data")
      .then(response => response.json())
      .then(data => setApiList(data))
  }, [])

  const onChangeHandle = (e) => {
    setSearch(e.target.value);
  }
  const onSubmitHandle = (e) => {
    e.preventDefault();
  }
  const bookmarksHandle = () => {
    setBookmarks(
      apiList.filter(item => item.bookmark));
  }

  return (
    <div className="App">

      <h3>A collective list of free APIs for use in <br /> software and web development.</h3>
      <form action="" onSubmit={(e) => onSubmitHandle(e)} className="api-search-form">
        <input type="text"
          placeholder="Find development, games, images APIs"
          value={search}
          onChange={(e) => onChangeHandle(e)}
        />
      </form>

      <div className="container">
        <h4>Featured APIs of this week</h4>
        <div className="api-list">
          {apiList.length > 0 ? apiList
            .filter(item => item.name.toLowerCase().includes(search.trim().toLowerCase()))
            .map(apiItem => (
              <ApiItem key={apiItem.id} item={apiItem} bookmarksHandle={bookmarksHandle} />
            )) :
            <Message message="There is no API to show!" />
          }
        </div>
      </div>
      <div className="container">
        <h4>Your Bookmarks</h4>
        <div className="api-list">
          {bookmarks.length > 0 ?
            bookmarks.map(apiItem => (
              <ApiItem key={apiItem.id} item={apiItem} bookmarksHandle={bookmarksHandle} />
            )) :
            <Message message="Your bookmark list is empty!" />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
