import Nav from "./Nav";

function Download() {
const downButton = ()=> {
   fetch("SureshPalanichamyResume.pdf").then((response) =>{
    response.blob().then((blob)=>{
        const fileUrl=window.URL.createObjectURL(blob);
        let alink=document.createElement("a");
        alink.href=fileUrl;
        alink.download="SureshPalanichamyResume.pdf";
        alink.click();
    })
   })

}

    return(      
        <div>
             <div>
                 <Nav/>
                    </div>

             <div>
                 <h3> download here click below</h3>
           <button onClick={downButton}>download</button>
           
                         </div>
</div>
    )
}
export default Download