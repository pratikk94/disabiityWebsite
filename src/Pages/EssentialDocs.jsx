import React from "react";
import FAQ from "../components/faq";
import Heading from "../components/heading";
import Strip from "../components/strip";

function EssentialDocs() {
  return (
    <div style={{ height: "100vh" }}>
      <Strip />
      <center>
        <Heading title="Essential Docs" />
        <h1
          style={{
            float: "left",
            width: "100vw",
            display: "block",
            marginLeft: "13%",
            textAlign: "left",
          }}
        >
          <strong>Essential Documents for a Person with Disability</strong>
        </h1>
        <div style={{ width: "100vw", height: "24vh" }}>
          <p
            style={{
              float: "left",
              width: "72vw",
              display: "block",
              marginLeft: "13%",
              textAlign: "left",
              fontSize: "24px",
            }}
          >
            A person with a benchmark disability as defined above will require a
            Disability Certificate & Unique Disability ID to avail benefits
            under various schemes and entitlements.
            <ul className="ol_main">
              <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                Disability Certificate: Disability Certificate or Handicap
                Certificate (as it may alternatively be called) is a document
                that certifies the type and degree of disability that has
                affected the person.
              </li>
              <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                {" "}
                Unique Disability ID: Unique Disability ID is a single source
                document for identification, and verification of the disabled
                for availing benefits that they are eligible for under the
                various schemes and acts.
              </li>
            </ul>
          </p>
        </div>
        <div style={{ float: "left", marginLeft: "13%", width: "70%" }}>
          <FAQ
            question="What is the process to avail a Disability Certificate?"
            answer="The stepwise process of obtaining a disability certificate is as follows; <ul><li className='ul_li'>The disabled person must visit a medical hospital for the specific disability (To check the disability wise  list of authorized hospital click <a target='_blank' href='https://drive.google.com/file/d/1cKsBzelN7M0K10CEOOW064PdA7A6Av0t/view?usp=sharing'>here</a>). </li><li className='ul_li'>The doctor will prescribe tests depending on the disability. </li><li className='ul_li'>The duly filled application form <a target='_blank' href='https://drive.google.com/file/d/1eTHGdULZ2oHqqagRPNN2HLRujL13mdC1/view?usp=share_link'>link</a> along with documents and test reports needs to be submitted to the concerned doctor in the medical hospital. </li><li className='ul_li'>A committee of doctors will consider the case and examine the person.</li><li className='ul_li'>If approved, the person is asked to collect the certificate at a later date.</li></ul>"
          />
          <FAQ
            question="What are the documents required to be submitted by a disabled person to obtain a Disability Certificate?"
            answer="<ul className><li className='ul_li'>Two recent coloured personal photos of the person with disability</li><li className='ul_li'>Copy of one of identity proof- (Aadhaar Card, Voter ID, Driving License, PAN Card, Ration Card) </li><li className='ul_li'>Copy of one of address proof- (Aadhaar Card, Voter ID, Driving License, Domicile certificate, Ration Card)</li><li className='ul_li'>Copies of available medical reports</li><li className='ul_li'>Copy of the previous Disability Certificate (in case it is being renewed)</li><ul className='ol_main'>"
          />
          <FAQ
            question="How long is the disability certificate valid for?"
            answer="For children below the age of 18, the validity is for 5 years, whereas for those over 18, the validity is lifelong."
          />
          <FAQ
            question="What is the process to avail a Unique Disability ID (UDID) ?"
            answer="To apply online<ol><li>Persons with a disability can use https://www.swavlambancard.gov.in/website or register with the UDID web portal at <a target='_blank' href='https://www.swavlambancard.gov.in/pwd/application'>here</a></li><li>Using Enrolment Number/UDID Number and Date of Birth, log into the system and click “Apply online for Disability Certificate”. </li></ol>To apply offline, Fill out the application form given <a target='_blank' href='https://www.swavlambancard.gov.in/'>here</a>. After filling the application form with personal details, address details, disability details, employment details and identity details,  it should be submitted at CMO office or at nearest medical authority along with the required documents as mentioned below You can know about your nearest medical authority by visiting- <a target='_blank' href='https://www.swavlambancard.gov.in/findNearestMedicalAutority'>here</a> or can call DCPCR helpline number 9311551393."
          />
          <FAQ
            question="Is it mandatory to get a UDID?"
            answer="UDID certificate is not mandatory for availing any direct benefits for PwDs whereas Disability Certificate is."
          />

          <FAQ
            question="What are the documents required to be submitted by a disabled person to obtain a UDID??"
            answer="Along with filled application form- online or offline (Form link- <a target='_blank' href='https://drive.google.com/file/d/16tzSaO3ZY-7BZGLwwMhl3LVryLS86ZF_/view?usp=share_link'>here</a> ), following documents need to be attached<ol><li>Scanned copy of the recent colour photo </li><li>Scanned image of signature (Optional) </li><li>Scanned copy of Address Proof (Aadhaar/Driving Licence/State Domicile 3, etc.) </li><li>Scanned copy of Identity Proof (Aadhaar Card/PAN Card/Driving Licence, etc.) </li><li>Scanned copy of Disability Certificate (Only for those Persons with Disability who have been issued Disability Certificates by the respective medical boards constituted at a State or District level. To know about the disability-wise list of medical authorities click here - <a target='_blank' href='https://drive.google.com/file/d/1CXBzxu4FamL32jk_KkQNQel_sVf6aOxS/view?usp=share_link'>link</a>  </li></ol>"
          />

          <FAQ
            question="Why is the Government encouraging Disabled Persons to get the UDID card?"
            answer="The UDID Card will help in streamlining the tracking of the physical and financial progress of beneficiaries at all levels of hierarchy of implementation - from village level, block level, district level, state level right upto the national level."
          />

          <FAQ
            question="Why is it useful for a disabled person to get a UDID? "
            answer="The UDID card shall bring a host of benefits to Persons with Disabilities as given below:<ol><li>Persons with Disabilities will not need to make multiple copies of documents, maintain, and carry multiple documents for availing various benefits and services they are entitled to. </li><li>The UDID card will be the single document of identification and verification of the disabled for availing various benefits in the future.</li></ol>"
          />
        </div>
      </center>
      <div style={{ height: "24%" }}></div>
    </div>
  );
}

export default EssentialDocs;
