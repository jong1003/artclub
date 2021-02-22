import { useFirestoreDocData, useFirestore, SuspenseWithPerf } from 'reactfire';
import 'firebase/firestore';
import React, {Component} from 'react';


function Burrito(name) {
  // lazy load the Firestore SDK and create a document reference

  console.log(name);
  const burritoRef = useFirestore()
    .collection('artclub')
    .doc('{name}');
    
  // subscribe to the doc. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);
  if (status === 'loading') {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>{name}'s age is {data.age}!</p>;
}
/*
function Recommendation(){
  var studentName=prompt("write student's name!","");
  const studentRef = useFirestore()
    .collection('artclub')
    .doc(${studentName}');
  
    const { status, data } = useFirestoreDocData(studentRef);
    if (status === 'loading') {
      return <p>Fetching student's data...</p>;
    }
  
    return <p>Please~ {data.admission ? 'apply regular' : 'apply special'}!</p>;
  }
  */

class NameForm extends Component {
state={
    name:''
}    
handleChange=(e)=>{
    this.setState({
        name:e.target.value
    })
}
render(){
    return(
        <form>
            <input placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
        <div>{this.state.name}</div>
        <button type="submit">check age
        </button>
        </form>, 
        <Burrito name={this.state.name}/>
        
    )
}
}
  

function App() {

  return (
    <div className="App">
      {/*
        SuspenseWithPerf behaves the same as Suspense,
        but also automatically measures load times with the User Timing API
        and reports it to Firebase Performance Monitoring
      */}
      <SuspenseWithPerf
        fallback={'loading burrito status...'}
        traceId={'load-burrito-status'}
      >
      <NameForm/>  
      </SuspenseWithPerf>
    </div>
  );
}


export default App;
