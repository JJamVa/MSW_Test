"use client";

export default function Home() {
  const submit = async () => {
    const data = await fetch("http://www.test.com/test", {
      method: "get",
    }).then((res) => {
      return res.json();
    });

    console.log(data);
  };

  return <button onClick={submit}>MSW 테스트</button>;
}
