import React from "react";
import PropTypes from "prop-types";

function Movie() {
  return (
    <h1>?</h1>
  )
}

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {

};

function renderFood(dish) {
  console.log(dish);
  return <Food name={dish.name} picture={dish.image} />
}

const foodILike = [
  {
    idx: 1,
    name: "Nacho",
    image: "https://img.insight.co.kr/static/2017/10/21/700/f8e31isod6z42978jqtw.jpg"
  },
  {
    idx: 2,
    name: "Ramen",
    image: "https://imgcp.aacdn.jp/img-a/1200/auto/global-aaj-front/article/2018/06/5b321f26e22f9_5b321d8b3819e_261033538.jpeg"
  },
  {
    idx: 3,
    name: "Kimchi",
    image: "https://newsimg.hankookilbo.com/cms/articlerelease/2020/04/23/202004231500779914_1.jpg"
  },
  {
    idx: 4,
    name: "hi",
    image: "http://www.dentalarirang.com/news/photo/201708/18294_24504_3851.jpg"
  }
];

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.idx} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
