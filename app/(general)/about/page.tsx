import { Metadata } from "next";

//el metadata es para mejorar el indexado en google para que la pagina aparezca mas facil en las busquedas
export const metadata: Metadata = {
 title: 'About',
 description: 'SEO Desc',
 keywords: ['About','Other kewords']
};

export default function AboutPage(){
    return (
        <span className="text-7xl">About Page</span>
    );
}