import '../css/EffectDemoComponent.css';
import { useEffect, useState } from 'react';

let timerId;

export default function EffectDemoComponent() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(1);
  const [text, setText] = useState('');
  const [time , setTime] = useState('');

  const startTimer = () => {
    console.log('start timer');
    timerId = setInterval(() => {
      const timeText = (new Date()).toLocaleTimeString();
      console.log('timeText', timeText);
      setTime(timeText);
    }, 1000);
  }

  const stopTimer = () => {
    console.log('stop timer');
    clearInterval(timerId);
  }

  const requestUsers = async () => {
    setLoading(true);

    try {
      await new Promise(resolve => { setTimeout(resolve, 3000); });
      const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
          console.log(response);
          if (!response.ok) {
            throw new Error('Запит не вдався: ' + response.status);
          }
          return response.json(); // Парсинг тіла відповіді як JSON
        });
      setUser(result);
      setError('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  console.log('Function is called');

  useEffect(() => {
    // спрацьовує один раз коли компонент вставляється в DOM
    console.log('useEffect', userId);
    startTimer();
    requestUsers();

    return () => {
      // спрацьовує один раз коли компонент видаляється з DOMу
      stopTimer();
    }
  }, [userId])

  return (
    <>
      <div className="time">{time}</div>

      {text}<br />
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <br /><br />
      {userId}<br />
      <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />

      <br /><br />

      {loading && <div className="loading">Loading...</div>}
      {!loading && error && <div className="error">{error}</div>}
      {!loading && !error && user.id && (
        <div key={user.id}>
          User #{userId}:
          <div>Id: {user.id}</div>
          <div>Name: {user.name}</div>
          <div>Email: {user.email}</div>
          <div>Username: {user.username}</div>
          <div>Phone: {user.phone}</div>
          <div>Website: {user.website}</div>
        </div>
      )}

      {/*{users.map(user => (*/}
      {/*  <div key={user.id}>*/}
      {/*    <div>Id: {user.id}</div>*/}
      {/*    <div>Name: {user.name}</div>*/}
      {/*    <div>Email: {user.email}</div>*/}
      {/*    <div>Username: {user.username}</div>*/}
      {/*    <div>Phone: {user.phone}</div>*/}
      {/*    <div>Website: {user.website}</div>*/}
      {/*    <hr />*/}
      {/*  </div>*/}
      {/*))}*/}
    </>
  );
}
