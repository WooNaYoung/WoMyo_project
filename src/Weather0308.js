import React, { useState, useEffect } from "react";
import axios from "axios";

const api2 = {
  key: "d63c7d503cfb0a45ff09fe5274c4d2ea",
  base: "https://api.openweathermap.org/data/2.5/onecall",
};
// const part = ["current", "minutely", "hourly,daily"];
// &exclude=${part[2]}

const Weather0308 = () => {
  const [data, setData] = useState(null); // 결과물 관리
  const [loading, setLoading] = useState(false); //로딩중 관리, 현재 api가 요청중인지 아닌지 알려주는 값
  const [error, setError] = useState(null); //에러 관리, 에러가 발행하면 이 상태에 에러가 담김

  let Lat = "60.99";
  let Lon = "30.9";

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setData(null);
        setError(null);
        setLoading(true);
        const res = await axios.get(
          `${api2.base}?lat=${Lat}&lon=${Lon}&appid=${api2.key}`
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
  const height = { height: "100px" };

  console.log(data.current.weather[0].main);

  // switch (data.current.weather[0].main) {
  //   case "Clouds":
  //     return <h1>구름</h1>;
  //   case "Rain":
  //     return <h1>비</h1>;
  //   case "Drizzle":
  //     return <h1>이슬비</h1>;
  //   case "Squall":
  //     return <h1>세찬 소나기</h1>;
  //   case "Tornado":
  //     return <h1>태풍</h1>;
  //   case "Sunny":
  //     return <h1>해 쨍쨍</h1>;
  //   case "Clear":
  //     return <h1>맑은하늘</h1>;
  //   case "Snow":
  //     return <h1>눈온다~</h1>;
  //   case "Thunderstorm":
  //     return <h1>천둥번개</h1>;
  //   case ("Mist", "Haze"):
  //     return <h1>안개</h1>;
  //   case "Fog":
  //     return <h1>위안개</h1>;
  //   case "Smoke":
  //     return <h1>뿌연하늘</h1>;
  //   case "Dust":
  //     return <h1>먼지가 많은</h1>;
  //   case "Sand":
  //     return <h1>모래가 많은</h1>;
  //   case "Ash":
  //     return <h1>재가 많은</h1>;

  //   default:
  //     break;
  // }

  return (
    <div>
      <div style={height}></div>
      <h3>지역 정보</h3>
      위도 : {data.lat} <hr />
      경도 : {data.lon} <hr />
      지역 : {data.timezone} <hr />
      <br />
      <h3>현재날씨</h3>
      현재 온도 : {Math.round(data.current.temp - 273.15)}℃<hr />
      체감온도 : {Math.round(data.current.feels_like - 273.15)}℃<hr />
      습도 : {data.current.humidity}% <hr />
      자외선 : {data.current.uvi} <hr />
      구름 :{data.current.clouds} <hr />
      바람 속도 :{data.current.wind_speed} <hr />
      날씨 :{data.current.weather[0].main} <hr />
      날씨 설명 :{data.current.weather[0].description} <hr />
      <br />
      {/* <h3>시간별 날씨 예보</h3>
      시간별 온도 : {Math.round(data.hourly[0].temp - 273.15)}℃<hr />
      시간별 체감온도 :{Math.round(data.hourly[0].feels_like - 273.15)}℃<hr />
      <hr /> */}
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

export default Weather0308;
