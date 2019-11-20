// Author: Debarun Mitra
// Application Name: JobSearchOo
// Objective: Create a front end application for job search
class Jobsearch{
  getSearchResult(uname,todate,fromdate){
    let repoCount=0,projects=[],commit=0,
        userDD=todate.split('-')[2],
        userMM=todate.split('-')[1],
        userYY=todate.split('-')[0];
        //console.log(todate);
        //console.log('user: '+userDD+'-'+userMM+'-'+userYY);
        fetch(`https://api.github.com/users/${uname}`)
          .then(response=>response.json()).then(user=>{
            document.getElementById('name').innerHTML= user.name;
            document.getElementById('status').innerHTML= user.location;
            document.getElementById('profileImg').src= user.avatar_url;
            //console.log(typeof(user.avatar_url));
            //img. user.avatar_url;
          });

  fetch(`https://api.github.com/users/${uname}/repos`).then(response=>response.json()).then(repo=>{
    repo.map(data=>{
      let dd,mm,yy,dateStr,date;
      //console.log(data);
      dateStr=data.created_at.split('T');
      dd=dateStr[0].split('-')[2];
      mm=dateStr[0].split('-')[1];
      yy=dateStr[0].split('-')[0];
      //console.log(dd+'-'+mm+'-'+yy);
      if(yy===userYY && mm>=userMM)
      {
        repoCount++;
        projects.push(data.name);
      }
    });
    document.getElementById('rno').innerHTML='Repository: '+repoCount;
    // console.log(projects);
    // console.log(repoCount);
    // console.log(projects[7]);
    projects.map(async project=>{
      await fetch(`https://api.github.com/repos/${uname}/${project}/stats/contributors`).then(response=>response.json())
        .then(async pro=>{
         let value=await pro;
         if(value.length===1){
          console.log(value[0]);
          commit+=value[0].total;
         }
         else{
           console.log(value[1]);
           commit+=value[1].total;
         }
        console.log(commit);
        document.getElementById('tc').innerHTML='Commits: '+commit;
      });
    });

  }).catch(err=>console.log('ERROR:'+err));
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
  //    document.getElementById('jobContent').innerHTML="";
      js.getSearchResult(uname.value,todate.value,fromdate.value);
    //  const jso=new Jobsearch();
      //jso.getJobDetails();
    },false);
  //}
