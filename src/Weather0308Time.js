import React, { useState, useEffect } from "react";
import axios from "axios";

// https://api.openweathermap.org/data/2.5/onecall
// /timemachine?lat={lat}&lon={lon}&dt={time}&appid={YOUR API KEY}

const api2 = {
  key: "d63c7d503cfb0a45ff09fe5274c4d2ea",
  base: "https://api.openweathermap.org/data/2.5/onecall/timemachine",
};

const NOW = Date.now() / 1000;
const time = Math.round(NOW) - 24 * 3600;
console.log(time); // 현재 시간 기준 어제의 날짜가 나옴

let Lat = "60.99";
let Lon = "30.9";

const Weather0308Time = () => {
  const [data, setData] = useState(null); // 결과물 관리
  const [loading, setLoading] = useState(false); //로딩중 관리, 현재 api가 요청중인지 아닌지 알려주는 값
  const [error, setError] = useState(null); //에러 관리, 에러가 발행하면 이 상태에 에러가 담김

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setData(null);
        setError(null);
        setLoading(true);
        const res = await axios.get(
          `${api2.base}?lat=${Lat}&lon=${Lon}&dt=${time}&appid=${api2.key}`
        );
        setData(res.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchDatas();
  }, []); //컴포넌트가 처음 렌더링 될 때 어떤 작업을 하겠다, 일단 비어있는 배열을 집어넣음

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return <div>data가 아닙니다</div>;

  const back = { backgroundColor: "#eee" };

  return (
    <div style={back}>
      <h3>어제 위치 (1596337200 unix 시간 기준 5일까지 확인 가능)</h3>
      위도 : {data.lat} <hr />
      경도 : {data.lon} <hr />
      지역 : {data.timezone} <hr />
      <br />
      <h3>어제 날씨</h3>
      어제 온도 : {Math.round(data.current.temp - 273.15)}℃<hr />
      어제 체감온도 : {Math.round(data.current.feels_like - 273.15)}℃<hr />
      습도 : {data.current.humidity}% <hr />
      자외선 : {data.current.uvi} <hr />
      구름 :{data.current.clouds} <hr />
      바람 속도 :{data.current.wind_speed} <hr />
      날씨 :{data.current.weather[0].main} <hr />
      날씨 설명 :{data.current.weather[0].description} <hr />
      <br />
    </div>
    // <ul>
    //   {data.map((data0) => (
    //     <li key={data0.lon}>
    //       {/*키값을 꼭 넣어야 함, 배열안에 있는 id를 키 값으로 설정 */}
    //       {data0.current}
    //       {/*배열안에 있는 유저 네임과 이름을 보여줌*/}
    //     </li>
    //   ))}
    // </ul>
  );
};

export default Weather0308Time;
