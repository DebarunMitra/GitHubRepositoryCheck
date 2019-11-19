// Author: Debarun Mitra
// Application Name: JobSearchOo
// Objective: Create a front end application for job search
class Jobsearch{
  getSearchResult(uname,todate,fromdate){
//    const monthNo={"Jan":1,"Feb":2,"Mar":3,"Apr":4,"May":5,"Jun":6,"Jul":7,"Aug":8,"Sep":9,"Oct":10,"Nov":11,"Dec":12};
    let count=0,regexUname,regexInitdate,regexLastdate,regexExp=/\d+/g;
  //  console.log(uname+','+todate+','+fromdate);
    //(uname==='')?regexSkill ='.*?':regexSkill = new RegExp("\\b(?:"+skills+")\\b", "gi");
   (uname==='')?regexUname = '.*?':regexUname = new RegExp("\\b(?:"+uname+")\\b", "gi");
   (todate==='')?regexInitdate = '.*?':regexInitdate = new RegExp("\\b(?:"+todate+")\\b", "gi");
    (fromdate==='')?regexLastdate = '.*?':regexLastdate = new RegExp("\\b(?:"+fromdate+")\\b", "gi");
    // (experience==='')?strExp=undefined:strExp=experience;
  //  console.log(regexLoc+','+regexExp+','+regexSkill+','+regexCname);
console.log(regexUname+','+regexInitdate+','+regexLastdate);
  //});
//  console.log('count:'+count);
  //}).catch(err=>console.log('ERROR:'+err));
  }
  getJobDetails(jcn,jtitle,jd,jloc,jskill,jsal,jexp,japply,jlink){
    let jobDataTag=document.createElement('p');
    jobDataTag.innerHTML ='<div class="card" style="width:90%;"><div class="card-body"><h3 class="card-title">'+jcn+'</h3>'+
    '<p class="card-text">'+jtitle+'</p>'+
    '</div>'+
    '<ul class="list-group list-group-flush">'+
        '<li class="list-group-item">'+
          '<h6 class="card-title">Job Description:</h6>'+
          '<p>'+jd+'</p>'+
        '</li>'+
          '<li class="list-group-item">'+
            '<h6 class="card-title">Job Location:</h6>'+
            '<p>'+jloc+'</p>'+
          '</li>'+
          '<li class="list-group-item">'+
            '<h6 class="card-title">Skill need:</h6>'+
            '<p>'+jskill+'</p>'+
          '</li>'+
          '<li class="list-group-item d-flex">'+
            '<div class="">'+
              '<h6 class="card-title">Salary:</h6>'+
               '<p>'+jsal+'</p>'+
            '</div>'+
            '<div class="sal-enddate">'+
              '<h6 class="card-title">Expirence:</h6>'+
              '<p>'+jexp+'</p>'+
            '</div>'+
            '<div class="sal-enddate">'+
              '<h6 class="card-title">Last Date:</h6>'+
              '<p>'+japply+'</p>'+
            '</div>'+
          '</li>'+
      '</ul>'+
      '<div class="card-body">'+
          '<a href="#" class="'+jlink+'">Apply link</a>'+
      '</div>'+
    '</div><br>';
    document.getElementById("jobContent").appendChild(jobDataTag);
  }
}
const js=new Jobsearch();
let search=document.getElementById('search');
  let uname=document.getElementById('uname');
  let todate=document.getElementById('todate');
  let fromdate=document.getElementById('fromdate');
 //if(uname.value!=='' && todate.value!=='' && fromdate.value!=='')
  //{
    search.addEventListener('click',function(){
      document.getElementById('jobContent').innerHTML="";
      js.getSearchResult(uname.value,todate.value,fromdate.value);
    //  const jso=new Jobsearch();
      //jso.getJobDetails();
    },false);
  //}
