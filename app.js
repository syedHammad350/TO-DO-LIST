var input=document.getElementById('inp')
var parent=document.getElementById('parent')
// console.log(input,todolist)
function addtodo(){
    // console.log('click')
    console.log(input.value)
    if(!input.value){
        alert('required filed are missing')
        return

    }
    var ul=document.createElement('ul')
    var li=document.createElement('li')
    var litxt=document.createTextNode(input.value)
    li.setAttribute('class','listgroup')
    li.appendChild(litxt)
    ul.appendChild(li)
    parent.appendChild(ul)
    var div=document.createElement('div')
    div.setAttribute('class',"lstbtn")

    var date = new Date()
    var time = date.toDateString()
     console.log(time)
    
    var para=document.createElement('p')
    var paratxt=document.createTextNode(time)
    para.setAttribute('class','para')
    para.appendChild(paratxt)
    div.appendChild(para)
   
    var editbtn=document.createElement('button')
    var tododelete=document.createElement('button')
    var complete=document.createElement('button')
    
    complete.setAttribute('onclick','cut()')
    var editbtntxt=document.createTextNode('EDIT TODO')
    editbtn.setAttribute('class','editbtn')
    editbtn.setAttribute('onclick',"editbtntodo(this)")
    var tododeletetxt=document.createTextNode('DELETE TODO')
    tododelete.setAttribute('class','deletebtn')
    tododelete.setAttribute('onclick',"deletebtntodo(this)")
    editbtn.appendChild(editbtntxt)
    tododelete.appendChild(tododeletetxt)
    div.appendChild(editbtn)
    div.appendChild(tododelete)
    li.appendChild(div)
    
   
    

    input.value=''
    

    

    
 
}

function deleteall(){
    // console.log('hr')
    parent.remove()
}

function editbtntodo(edi){
    var edt=edi.parentNode.parentNode.firstChild.nodeValue
    console.log(edt)
    var editvalue=prompt('ENTER A NEW VALUE',edt)
    edi.parentNode.parentNode.firstChild.nodeValue=editvalue
    
}

function deletebtntodo(del){
    var dele= del.parentNode.parentNode
    dele.remove()
}







