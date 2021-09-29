const ApiItem = ({ item, bookmarksHandle }) => {

   const buttonClickHandle = () => {
      item.bookmark = !item.bookmark;
      bookmarksHandle();
   }

   return (
      <div className={item.bookmark ? "api-item inbookmark" : "api-item"}>
         <div className="item-icon">
            <img src={item.icon} alt="" />
         </div>
         <div className="item-detail">
            <h4>{item.name}</h4>
            <div className="item-category">{item.category}</div>
            <div className="item-description">{item.description}</div>
         </div>
         <div className="item-bookmark">
            <button onClick={buttonClickHandle}>Bookmark</button>
            <a href={item.docurl} target="_blank" rel="noreferrer">API Docs</a>
         </div>
      </div >
   )
}

export default ApiItem;