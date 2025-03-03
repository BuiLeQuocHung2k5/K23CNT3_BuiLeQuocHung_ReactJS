import React, { Component } from 'react';
import BlqhEventForm1 from './components/BlqhEventForm1';
import BlqhEventForm2 from './components/BlqhEventForm2';
import BlqhEventForm3 from './components/BlqhEventForm3';
import BlqhEventForm4 from './components/BlqhEventForm4';
import BlqhEventForm5 from './components/BlqhEventForm5';
import BlqhRenderCondition from './components/BlqhRenderCondition';
import BlqhRenderArray from './components/BlqhRenderArray';
import BlqhRenderListObject from './components/BlqhRenderListObject';

class BlqhApp extends Component {



  // Hàm xử lý nhận dữ liệu từ form student
  blqhHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <BlqhEventForm1 />
          <BlqhEventForm2 />
          <BlqhEventForm3 />
          <BlqhEventForm4 />
          <BlqhEventForm5 onBlqhHandleSubmit={this.blqhHandleSubmitForm}/>
          <BlqhRenderCondition />
          <BlqhRenderArray />
          <BlqhRenderListObject />
      </div>
      
    );
  }
}

export default BlqhApp;