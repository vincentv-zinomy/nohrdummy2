import { generateAuthURL } from '@/lib/hubspot'
import { useRouter } from 'next/navigation'
import React from 'react' 

const HubSpot = () => {
    const { push } = useRouter()
    const handleClick = async () => {
        const url = await generateAuthURL()
        push(`${url}`);
    }
  return (
    <div>
        <button onClick={handleClick}>hubspot</button>
    </div>
  )
}

export default HubSpot