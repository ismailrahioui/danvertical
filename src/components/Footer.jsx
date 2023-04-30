import React, {useState} from "react";
import { TelephoneForward } from "styled-icons/bootstrap";
import { Whatsapp } from "styled-icons/boxicons-logos";
import { Mail } from "styled-icons/entypo";



function Footer() {
  return (
         <div className="text-white w-[100%]">
           <div className="flex w-[100%] h-[0%] justify-center items-center"><img src="../../public/Logo.png" alt="" srcset=""  className="w-[10%] mt-6"/></div>
           <div className="font-bold font-[poppins]">
            <div className="flex justify-between m-5 h-[18rem] w-[82%]">
              <ul>
                <li className="m-7"><p><TelephoneForward size={'3rem'}/><span className="ml-3">Telèfono : 934-xxx-xxx</span></p></li>
                <li className="m-7"><p><Whatsapp size={'3rem'}/><span className="ml-3">Whatsapp : 602-xxx-xxx</span></p></li>
                <li className="m-7"><p><Mail size={'3rem'}/><span className="ml-3">Email : info@danvertical.es</span></p></li>
              </ul>
              <ul>
                <li className="mt-20">
                  <p>
                    <span> 
                      DIRECCIÓN : <br />
                      C/ Del Mig nº 50, Pol. Ind. Mas Rampiny <br /> 
                      o08110 Montcada i Reixac, Barcelona, España
                    </span>
                  </p>
                </li>
              </ul>


              <ul>
                <li><iframe width="150%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Del%20Mig%20n%C2%BA%2050,%20Pol.%20Ind.%20Mas%20Rampiny%20%20o08110%20Montcada%20i%20Reixac,%20Barcelona,%20Espa%C3%B1a+(danvertical)&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></li>
              </ul>

            </div>
           </div>          
         </div>
  );
}

export default Footer