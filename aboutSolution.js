```javascript
// pages/aboutSolution.js

export default async function About() {
  let result = {};
  try {
    const data = await fetch('https://api.example.com/data');
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    result = await data.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    result = { name: 'Error fetching data' }; //or any fallback
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Some data from the API: {result.name}</p>
    </div>
  );
}
```