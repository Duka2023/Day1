import { createApp } from 'vue'
import axios from 'axios'

createApp({
    data() {
       return {
           students: [],
           search:''
     
       }
    },
    mounted: function(){
        axios.get('http://34.82.81.113:3000/students').then((response) => {
              console.log(response.data);
             this.students = response.data;
            });
        },
    methods: {
       deleteStudent(studId) {
           this.students = this.students.filter(elem => {
               return elem._id != studId;
           });
       },
       addStudent() {
           this.student.id = this.students.length+1;
           this.students.push(this.student);
       }
    },
 }).mount('#app');




