import React from 'react';

const Result = ({
  id,
  name,
  school,
  class1,
  type,
  count,
  count1,
  count2,
  count3,
  ball,
  ball1,
  ball2,
  ball3,
  result,
}) => {
  return (
    <div className="result">
      {result === '1' ? (
        <div className="itm">
          <h2>Siz o'qishga qabul qilindingiz!</h2>
        </div>
      ) : (
        <div className="itm">
          <h2>Siz o'qishga qabul qilinmadingiz.</h2>
        </div>
      )}
      <div className="itm">
        <span>ID Raqam:</span>
        <span>{id}</span>
      </div>
      <div className="itm">
        <span>F.I.O:</span>
        <span>{name}</span>
      </div>
      <div className="itm">
        <span>Maktab:</span>
        <span>{school}</span>
      </div>
      <div className="itm">
        <span>Sinf:</span>
        <span>{class1}</span>
      </div>
      <div className="itm">
        <span>Yo'nalishi:</span>
        <span>{type}</span>
      </div>
      <div className="itm">
        <span>1-fan:</span>
        <span>
          {count1} ({ball1} ball)
        </span>
      </div>

      <div className="itm">
        <span>2-fan:</span>
        <span>
          {count2} ({ball2} ball)
        </span>
      </div>

      {ball3 && (
        <div className="itm">
          <span>3-fan:</span>
          <span>
            {count3} ({ball3} ball)
          </span>
        </div>
      )}
      <div className="itm">
        <b>Umumiy Ball:</b>
        <span>
          {count} ({ball} ball)
        </span>
      </div>
    </div>
  );
};

export default Result;
