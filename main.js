
const myfile="educations.json";
        async function GetJsData(){
            const response = await fetch(myfile);
            const data = await response.json();
            console.log(data);
            document.getElementById('program1').textContent = data.program1;
            document.getElementById('school1').textContent = data.school1;
            document.getElementById('period1').textContent = data.period1;
            document.getElementById('program2').textContent = data.program2;
            document.getElementById('school2').textContent = data.school2;
            document.getElementById('period2').textContent = data.period2;
            document.getElementById('program3').textContent = data.program3;
            document.getElementById('school3').textContent = data.school3;
            document.getElementById('period3').textContent = data.period3;
        }
        GetJsData();

        let listofWork="";
        const myfile2="work.json";
        async function GetWsData(){
            const response = await fetch(myfile2);
            const data = await response.json();
            console.log(data);
            data.employments.forEach((element) => {
            listofWork+= "<strong>"+ element.company +"</strong>"+"<br/> ";
            listofWork+= element.city + "<br/> ";
            listofWork+= element.time + "<br/> ";
        
                document.getElementById('work').innerHTML= listofWork;
            });
        }
    
        GetWsData();
