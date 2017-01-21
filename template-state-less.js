/**
 * Created by Nuwan Chathuranga on 1/21/2017.
 * nchathu2014@gmail.com
 */
import React, { PropTypes } from 'react';

/**
 *
 * @returns {XML}
 * @constructor
 */
const Student = () => {

  /**
   *
   */
  const sampleFunction = () => {
    console.log("Hi I am Sample Function");
  };

  /**
   * IIFE
   */
  (()=> {
    sampleFunction();
  })();

  return (
    <div>I am Student Component (Stateless Functional)</div>
  );
};

/**
 *
 * @type {{}}
 */
Student.propTypes = {};

/**
 *
 * @type {{}}
 */
Student.defaultProps = {};

export default Student;
