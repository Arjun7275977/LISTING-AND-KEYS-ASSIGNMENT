import './App.css';
import React from 'react';
import Profilecard from './Component/Profilecard'

const users = [
  {
    image: 'https://imageio.forbes.com/specials-images/imageserve/6176e6bb6b6152e811db62ea/0x0.jpg?format=jpg&height400=&width=300',
    designation: 'CEO Microsoft',
    name: 'Bill Gates',
    jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPiPbHLkig6p3Xb2FqqRURvT_4vA2UCjHqg&usqp=CAU',
    designation: 'CEO Twitter',
    name: 'Elon musk',
    jobDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYELh6xwuDriJ8ioyBB_ClmpM42I-jPlytKMFXbYZ2-J5iCUrm6R8S-8xFU073FmwPTHo&usqp=CAU',
    designation: 'Founder of Amazon ',
    name: 'Jeff Bezos',
    jobDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
  },
];

function App() {
  return (
    <div className="App">
       {users.map((user) => (
        <Profilecard
          // key={user.name}
          Name={user.name}
          image={user.image}
          designation={user.designation}
          jobDescription={user.jobDescription}
        />
      ))}
    </div>
  );
}

export default App;