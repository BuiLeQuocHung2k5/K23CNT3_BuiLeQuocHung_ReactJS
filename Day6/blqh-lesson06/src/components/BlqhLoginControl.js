import React from 'react'
import BlqhLoginComp from './BlqhLoginComp';
import BlqhLogoutComp from './BlqhLogoutComp';

export default function BlqhLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var blqhLoginControl = isLoggedIn?<BlqhLoginComp />: <BlqhLogoutComp />;
  return (
    <div>
      {blqhLoginControl}
    </div>
  )
}