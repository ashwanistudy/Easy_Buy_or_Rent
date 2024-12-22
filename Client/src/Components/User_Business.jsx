import { useSelector, useDispatch } from "react-redux"
import { useEffect ,useState} from "react";
import Sold from "./sold";
import {Remove_Business} from '../Redux/action'
import {useNavigate} from 'react-router-dom'


export const UserBusiness=()=>{

    const UserBusinessData = useSelector((state)=>state.LocalUser)
    const [isTnCVisible, setTnCVisible] = useState(false);
    const navigate = useNavigate()

    let [localData, setlocalData] = useState()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(UserBusinessData){
            setlocalData(UserBusinessData.business)
        }
    },[UserBusinessData])

    
    function handleRemove(ele){
        let newdata = UserBusinessData.business.filter((e)=>{
            return ele.businessId !== e.businessId
        })
        UserBusinessData.business=newdata
        setlocalData(UserBusinessData.business)
        dispatch(Remove_Business(UserBusinessData))
    }


    return (
    <>
 <div id="Container">
        {
            UserBusinessData ?(<h1>Welcome  to Your Business Mr.{UserBusinessData.name} </h1>):""
        }
</div>

{
            localData ?<>
            <div className="bodycontainer">
            {localData.map((ele, i)=>{
                return (
                    <>
                    
                    <div id="usercard" key={i+1}>
                    <div id="for_img"></div>
                        <p><strong> Property Name : </strong>{ele.propertyName}<br></br>
                        <strong> address  : </strong> {ele.address}<br></br>
                        <strong> location  : </strong> {ele.location}<br></br>
                        <strong> price  : </strong>{ele.price}<br></br>
                        <br></br>
                        <button onClick={()=>handleRemove(ele)} id="remove">Remove</button></p>
                    </div>
                    </>
                    
                )
            })}
            </div>
            </>
            :
            ""
        }


<div className="Block2" >
<img src="https://media.designcafe.com/wp-content/uploads/2022/07/15170350/luxury-home-design-on-budget.jpg"  style={{padding:50}}/>




<div className="termsAndConditions">
      <p> Before posting a property please read the term & conditions <button className="tcbut" onClick={() => setTnCVisible(!isTnCVisible)}>
          {isTnCVisible ? "Hide Terms and Conditions 🔴" : "Show Terms and Conditions 🟢"}
        </button></p>
        </div>
{isTnCVisible && (
          
        
<div className="termtext">

   
    <h1>Terms and Conditions </h1>

    <h2>Introduction</h2>
    <h4>
        These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Website Name accessible at Website.com.
    </h4>
    <h4>
        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
    </h4>
    <h4>Minors or people below 18 years old are not allowed to use this Website.</h4>

    <h2>Intellectual Property Rights</h2>
    <h4>
        Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.
    </h4>
    <h4>You are granted limited license only for purposes of viewing the material contained on this Website.</h4>

    <h2>Restrictions</h2>
    <h4>You are specifically restricted from all of the following:</h4>
    
        <li>Publishing any Website material in any other media;</li>
        <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
        <li>Publicly performing and/or showing any Website material;</li>
        <li>Using this Website in any way that is or may be damaging to this Website;</li>
        <li>Using this Website in any way that impacts user access to this Website;</li>
        <li>
            Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
        </li>
        <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
        <li>Using this Website to engage in any advertising or marketing.</li>
    
    <h4>
        Certain areas of this Website are restricted from being accessed by you, and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential, and you must maintain confidentiality as well.
    </h4>

    <h2>Your Content</h2>
    <h4>
        In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video, text, images or other material you choose to display on this Website. By displaying Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
    </h4>
    <h4>Your Content must be your own and must not be invading any third-party's rights. Company Name reserves the right to remove any of Your Content from this Website at any time without notice.</h4>

    <h2>No Warranties</h2>
    <h4>
        This Website is provided “as is,” with all faults, and Company Name expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
        </h4>

    <h2>Limitation of Liability</h2>
    <h4>
        In no event shall Company Name, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract. Company Name, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
        </h4>

    <h2>Indemnification</h2>
    <h4>
        You hereby indemnify to the fullest extent Company Name from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
        </h4>

    <h2>Severability</h2>
    <h4>
        If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
        </h4>

    <h2>Variation of Terms</h2>
    <h4>
        Company Name is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
        </h4>

    <h2>Assignment</h2>
    <h4>
        The Company Name is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
        </h4>

    <h2>Entire Agreement</h2>
    <h4>
        These Terms constitute the entire agreement between Company Name and you in relation to your use of this Website and supersede all prior agreements and understandings.
        </h4>

    <h2>Governing Law & Jurisdiction</h2>
    <h4>
        These Terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country for the resolution of any disputes.
        </h4>


            </div>
        )}
      
      <img src="https://acquisitioninternational.digital/wp-content/uploads/2022/02/Terms-and-Conditions-Agreement.jpg"  style={{padding:50}}/>

</div>
<div className="Block2" >
  <span>Now it's easy to sale your house</span>
<img src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727297260081/original/e97a2325-f789-49df-b474-25c77476d433.jpeg?im_w=1680&im_format=avif" style={{height:500 ,padding:50}}/>
<div style={{ 
  display: "flex", 
  boxShadow: "0px 0px 5px 5px rgba(124, 94, 194, 0.1)" 
}}>
<img src="https://cdn.pixabay.com/photo/2017/10/12/17/42/house-for-sale-2845213_640.jpg"  />
  <div><Sold/></div>
  <img src="https://cdn.pixabay.com/photo/2017/10/12/17/42/house-for-sale-2845213_640.jpg" />
</div>
</div>
 

</>
)

}

