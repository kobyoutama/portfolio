import './About.css'
import { GlobalNav } from "../../components/globalNav/globalNav";
import { RandomTextEffect } from "../../components/randomTextEffect";
import { useEffect, useState } from 'react';

const space = String.fromCodePoint(160)
const em= String.fromCodePoint(8212)

const bioText = <p>My name is Koby Outama and I am ecstatic that you are interested in learning more about me! 
{space} I am recent graduate from <a href="https://uci.edu/">UC Irvine</a>
{space}that is looking for opportunities to utilize my strong computer science 
fundamentals as a software engineer! To learn more about my coursework, technical projects,
and skills feel free to look at my {aTag("/Outama_Koby_Resume.pdf", "résumé")} and contact me below!
</p>

const personalInfoText = <p>I grew 
up in California's elbow {em} {aTag("https://en.wikipedia.org/wiki/Stockton,_California", "Stockton,CA")},
{space}where I experienced and worked with diverse communities, cultures, and identities. I have also worked 
non-techincal jobs such as a {aTag("https://www.lodinews.com/news/article_bc093c86-34a1-58b5-aa91-63ae06b46f5e.html", "peer mentor")},
{space}{aTag("https://www.americancampus.com/student-apartments/ca/irvine/plaza-verde", "community assistant")}, and
{space}{aTag("https://www.yelp.com/biz/orobae-irvine", "bobarista")}. These positions
helped my grow my intrapersonal and interpersonal skills. I learned how to plan and execute projects, 
effectively communicate ideas to colleagues, and ensure consumer satisfaction.</p>

const outsideInterestsText = <p>Outside of a professional setting I love to discover new cafes and food spots, hike,
and immerse myself in music. Check out my cafe collection on{space}
{aTag("https://www.yelp.com/collection/i6UDFEK1ey1b2U5twQoW8Q?utm_content=Collections&utm_source=ishare", "yelp")} and my
favorite playlist on {aTag("https://open.spotify.com/playlist/6UL7zJUbgxqqQAECiEgGKJ?si=6a3b134e9d4d483a","spotify")}.
</p>

function aTag(href:string, desc:string, target:boolean=true){
    return <a href={href} target={target ? "_blank": "_self"}>{desc}</a>
}

export function About(){
    
    return(
        <section className="about" id="about">
            <h1 className='about-title'>who am i?</h1>
            <div className="container">
                <img className='headshot' src='/headshot.JPG'></img>
                    {bioText}
                    {personalInfoText}
                    {outsideInterestsText}
            </div>
        </section>
    )
}