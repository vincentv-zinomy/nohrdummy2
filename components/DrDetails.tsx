import React from 'react'

type Props = {}

const DrDetails = (props: Props) => {
  
    const data = [
        {
            profile_image:'https://imagesx.practo.com/providers/dr-shashidhar-v-orthopedic-surgeon-bangalore-3b5ebb2e-62a6-4225-af39-94b967c2eae9.jpg?i_type=t_100x100',
            name:'Dr. Shashidhar V.',
            qualification:"MBBS, MS - Orthopaedics",
            specialization:'Orthopedic surgeon, Joint Replacement Surgeon 19 Years Experience Overall  (12 years as specialist)',
            description:'Dr. Shashidhar V. has completed MBBS, MS (Ortho) Fellowship in Minimally Invasive Hip & Knee Replacement Surgeries, USA. Fellowship in Computer Assisted Hip & Knee Replacement Surgeries, South Korea. Fellowship in Advanced Hip Surgeries, South Korea. Fellowship in Adult Reconstruction & Joint Replacement Surgeries, Laud Clinic, Mumbai He did his Masters in Orthopedics from the Prestigious King Edward Memorial Hospital, Mumbai. He has been extensively trained in the field of Computer Assisted & Minimally Invasive Hip & Knee Replacement Surgeries from the USA, South Korea & Mumbai. He had the opportunity of working for a long time with Padmabushan Prof NS Laud who along with Dr. CS Ranawat has operated on our Ex-Prime Minister Sri Atal Bihari Vajpayee. He has many publications to his credit in reputed Orthopedic Journals. His field of interest is Primary & Revision Hip and Knee Replacement surgeries',
            clinic:[
                {
                    hospital_name:'Practo Hospitals - Neo',
                    rating:'5',
                    fee:700,
                    address:'Electronic City',
                },
                {
                    hospital_name:'Apollo Clinic',
                    rating:'5',
                    fee:700,
                    address:'Electronic City',
                }
            ]

        },

    ]

    return (
        <div>
        
        </div>
    )
}

export default DrDetails