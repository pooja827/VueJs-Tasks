
<template>
  <h1>Department Table</h1>
      <br>
      <h3>Here we have displayed the data from the (AdonisJS) departments DB creation.</h3>
    <div id="app">
     
      <br>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in employees" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.emp_id}}</td>
            <td>{{ item.emp_name}}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.salary }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <br>

      <RouterLink to="/createform" class="submit-button">Add</RouterLink>
       
    </div>
   
  </template>
  
  <script>
  import axios from 'axios'
 

  export default{
      data(){
          return{
              employees:[]
          }
  
      },
      mounted(){
        
          axios.get('http://127.0.0.1:3333/model/')
          .then(response =>{
               this.employees=response.data;
           });

        }
      
  }
  
  </script>
  
  <style>
  
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    table {
      border-collapse: collapse;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
  
    th,
    td {
      border: 1px solid #ccc;
      padding: 40px;
      text-align: left;
      color:rgb(243, 231, 231);
      background-color: black;
    }
  
    th {
      background-color: #7eb387;
      padding:20px;
    }
  
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    .submit-button {
    background-color: #699ec9;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-button:hover {
    background-color: #75cc6e;
  }
  
  </style>
  