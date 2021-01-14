import FrontityURL from 'frontity/dist/src/utils/url';
import React from 'react'
import {connect} from 'frontity'

const Root = ({state}) => {
    return (
      <>
        You can edit your package in:
        <pre>{state.router.link}</pre>
      </>
    );
  };

  export default connect(Root)