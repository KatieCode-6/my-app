import React, { useState } from "react";
const axios = require('axios');



axios.get('/user?ico=2182921')
  .then(function (response) {
    
    console.log(response);
  })
  .catch(function (error) {
   console.log(error);
  })
  .then(function () {
    
  });