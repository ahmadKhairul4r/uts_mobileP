import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  location: Location | null,
  social: SocialMedia,
  phone: Phone,

}

interface Location {
  country: string;
  city: string;
  street: string;
}
interface SocialMedia {
  email: String;
  skype: string;
  telegram: string;
}
interface Phone {
  support: string | null;
  office: string;
  personal: string;
}

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const response : ResponseData={
    location:{
      city:"Jakarta",
      country:"Indonesia",
      street:"Jl. Banten"
    },
    phone:{
      office:"021 555555",
      personal:"0812 3456 7890",
      support: null
    },
    social:{
      email:"myname@gmail.com",
      skype:"@myname",
      telegram:"0812 5645 5555"
    }
  }
  res.status(200).json(response)
}

