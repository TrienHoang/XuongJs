
const app = {
    start : function(){
        const form = document.getElementById('addForm').addEventListener('click',(e)=>{
            e.defaultPrevented();

              // 2. lấy input
              const inputTitle = document.getElementById('title');
              const inputIsActive = document.getElementById('isActive');
              const inputTime = document.getElementById('time')
              const inputDescription = document.getElementById('description');
            
             
  
        })
    }
}
app.start();