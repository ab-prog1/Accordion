import { useState } from 'react';
import SingleQuestion from './Question';
import data from './data';

function App() {
  const [questions, setQuestions ] = useState(data);

  return (
    <div className="container">
      <h3>Do you have any question?</h3>
      <div className="info">
        {
          questions.map((question, index) => {
            return  <SingleQuestion key={index} {...question} />
          })
        }
      
      </div>
    </div>
  );
}

export default App;
