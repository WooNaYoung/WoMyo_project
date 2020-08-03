import React, { useState, useEffect } from "react";
import axios from "axios";

// const api2 = {
//   key: "d63c7d503cfb0a45ff09fe5274c4d2ea",
//   base: "https://api.openweathermap.org/data/2.5/onecall?",
// };

const Axios2 = () => {
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
          "https://jsonplaceholder.typicode.com/users/"
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

  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>
          {/*키값을 꼭 넣어야 함, 배열안에 있는 id를 키 값으로 설정 */}
          {data.username} {data.name}
          {/*배열안에 있는 유저 네임과 이름을 보여줌*/}
        </li>
      ))}
    </ul>
  );
};

export default Axios2;
