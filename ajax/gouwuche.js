// const { type } = require("express/lib/response");


window.onload=function(){
    var jieshou = document.getElementsByTagName("tbody");
    let obj = 0;
        $.ajax({
            url:"gouwuche.json",
            type:"GET",
            dataType:"json",
            async:false,
            success:function(d){
                obj = d;
            }
        })
        // for(let i=0; i<3; i++){
        //     jieshou.innerHTML +=`
            
        //     <tr class="hang">
        //     <td><input type="checkbox" name="" id="" value="" class="one" /></td>
        //     <td>${obj.commodity[i]}</td>
        //     <td class="dan">${obj.price[i]}</td>
        //     <td><button type="button" class="jian">-</button>
        //     <input type="text" name="" id="" value="1" class="shuliang"/>
        //     <button type="button" class="jia">+</button></td>
        //     <td class="xiaoji">${obj.price[i]}</td>
        //     <td><button type="button"style="width: 80px; height: 50px;font-size: 20px;" class="delete">删除</button></td>
        // </tr>`
        // }


        var num = 3;
        var dianji = document.getElementsByTagName("button")
        console.log(dianji);
        dianji.onclick = function(){
        for(let i=0; i<3; i++){
            jieshou.innerHTML +=`
            
            <tr class="hang">
            <td><input type="checkbox" name="" id="" value="" class="one" /></td>
            <td>${obj.commodity[i]}</td>
            <td class="dan">${obj.price[i]}</td>
            <td><button type="button" class="jian">-</button>
            <input type="text" name="" id="" value="1" class="shuliang"/>
            <button type="button" class="jia">+</button></td>
            <td class="xiaoji">${obj.fdfd[i]}</td>
            <td><button type="button"style="width: 80px; height: 50px;font-size: 20px;" class="delete">删除</button></td>
        </tr>`
        }

        num+=3;
        if(num == obj.price.length){
            dianji.onclick = null;

            
        }
    }
    }

    



 // 获取全选
 var all = document.getElementById("all");
 // console.log(all);
// 获取单选
 var one = document.getElementsByClassName("one");
 // console.log(one);
// 获取加减
 var jia = document.getElementsByClassName("jia");
 // console.log(jia);
 var jian  = document.getElementsByClassName("jian");
 // console.log(one);
// 获取数量
 var num = document.getElementsByClassName("shuliang");
 // console.log(one);
// 获取小计
 var xiaoji = document.getElementsByClassName("xiaoji");
 // console.log(xiaoji);
// 获取单价
 var dan = document.getElementsByClassName("dan");
// 获取行
 var hang = document.getElementsByClassName("hang");
// 获取删除键
 var del = document.getElementsByClassName("delete");
// 获取合计
 var hj = document.getElementById("priceTotal");
 // console.log(hj);
// 获取已选商品数量
 var num1 = document.getElementById("selectedTotal");
 // console.log(num1);


 // 遍历单选按钮
 for(let i=0; i<one.length; i++){
     one[i].onclick = function(){
         
     } 
 }

// 循环单选，点击全选获取全选
//  all.onclick = function(){
    
//      for(let i=0; i<one.length; i++){
//          one[i].checked=all.checked;
//      }
//      heji(); 
//  }


// 单选按钮与全选按钮同步
 for(var i=0; i<one.length; i++){
     one[i].onclick = function(){
         all.checked = true;
         for(let j=0; j<one.length; j++){
                 if(!one[j].checked){
                     all.checked=false;
                     break;
                 }
         }
     }
 }

// 点击加数量加小计加
 for(let i=0; i<jia.length; i++){
     jia[i].onclick = function(){
         num[i].value++
          xiaoji[i].innerHTML =  parseInt(xiaoji[i].innerHTML) +parseInt(dan[i].innerHTML);
          heji(); 
     } 
 }


// 点击加数量减小计减
 for(let i=0; i<jian.length; i++){
     jian[i].onclick = function(){
         if(num[i].value == 1){

         }else{
             num[i].value--
         xiaoji[i].innerHTML =  parseInt(xiaoji[i].innerHTML) - parseInt(dan[i].innerHTML);
         heji(); 
         }
     
     }  
 }

// 点击删除键删除整行
 for(let i=0; i<del.length; i++){
     del[i].onclick = function(){
         hang[i].style.display = "none"
         num[i].value =0;
         xiaoji[i].innerHTML=0;
         one.checked = false;
     heji();
     }
 
 }
 

// 合计和已选方法
 function heji(){
     var money = 0;
     var num2 =0;
     for(let i=0; i<one.length; i++){
         if(one[i].checked){
             money +=parseInt(xiaoji[i].innerHTML);
             num2 += parseInt(num[i].value);
         }
     }
    hj.innerHTML = money;
    num1.innerHTML = num2;
 }


