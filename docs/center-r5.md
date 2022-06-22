---
title: 令和 5 年度 大学入学共通テストカウントダウン
tags: [React, JavaScript]
---

```jsx showLineNumbers live
function Clock(props) {
  const [date, setDate] = useState("");
  
  useEffect(() => {
    var timerID = setInterval(() => countdown(), 0.016);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function countdown() {
    time_left = (new Date(2023, 0, 14, 9, 30, 0) - new Date()) / 1000;
    ms = time_left - parseInt(time_left) // ミリ秒
    s = parseInt(time_left) % 60
    d = parseInt(time_left / 86400)
    h = parseInt((time_left - d * 86400) / 3600)
    m = parseInt((time_left - d * 86400 - h * 3600) / 60)
    setDate(`${d} 日 ${h} 時間 ${m} 分 ${s} 秒`);
  }

  return (
    <div>
      <p>令和 5 年度 大学入学共通テスト (令和 5 年 1 月 14 日 (土) 9:30) まであと、</p>
      <h2>残り {date}</h2>
    </div>
  );
}
```