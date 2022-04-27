import './collection.css';

const Collections = () => {
  const images = ['1.gif', '4.gif', '1.gif', '4.gif', '1.gif', '4.gif'];
  return (
    <div className="collection">
      <div className="collection-name">#GEN 0</div>
      <div className="grid-container">
        {images.map((image, index) => (
          <div key={index} className="grid-item">
            <img className="media-content" src={image} alt="" />
            <div className="item-name"># {index}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
