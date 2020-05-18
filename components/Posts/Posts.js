import React from 'react'

import './Posts.css'
import Post from '../Post/Post'

const Posts = () => {
    const blogPosts = [
        { 
            title: 'Air Jordan 1 Retro High OG - Smoke Grey ', 
            body: 'After UNION‘s Chris Gibbs honored the Air Jordan 1 with his two fused colorways, sneaker culture quickly ran with the idea, combining many an OG however they saw fit. Custom makers dressed Highs and Lows alike with a bevy of different inspirations, and as the treatment became more and more popular within the social media space, Jordan Brand couldn’t help but get inspired themselves.', 
            author: 'Michael Le', 
            img: 'https://sneakernews.com/wp-content/uploads/2020/04/jordan-1-smoke-grey-release-date-555088-126.jpg',
            releaseDate: 'July 11th, 2020' 
        },
        { 
            title: 'Air Jordan 1 High SP - Top 3 2.0', 
            body: 'Following its 2016 release of the Air Jordan 1 Retro High OG, the “Top 3” arrangement has since been utilized for various other models within the Jumpman family such as the AJ 1 Mid, AJ 1 Rebel XX, and Jordan Mars 270. And before it debuts its upcoming Air Jordan 5 next month (barring any further pandemic postponements), the tri-colored design is teasing that it has yet another Air Jordan 1 High rendition targeting a release for this year’s holiday season. ', 
            author: 'Elliot Santiago', 
            img: 'https://sneakernews.com/wp-content/uploads/2020/05/air-jordan-1-high-top-3-2-DA2728-100-1.jpg',
            releaseDate: 'Holiday 2020'
        },
        { 
            title: 'The Air Jordan 1 Retro High OG - Metallic Silver', 
            body: 'Even though we’re only just about approaching the half way mark of 2020, Jordan Brand has already taken the liberty of teasing a handful of their retro initiatives for next year. Following recent announcements of forthcoming “University Blue” and “Volt/University Gold” makeups, the Air Jordan 1 High is now publicizing that it is preparing a “Metallic Silver” colorway made exclusively for the ladies to join their ranks. While this first image here, is only but a mock-up, it’s likely the kicks will rely solely on greyscale tones to outfit its entirety. ', 
            author: 'Elliot Santiago', 
            img: 'https://sneakernews.com/wp-content/uploads/2020/05/air-jordan-1-high-metallic-silver-CD0461-001.jpg',
            releaseDate: 'Holiday 2020'
        },
        { 
            title: 'The Air Jordan 1 “Royal Toe”', 
            body: 'After its Court Purple update earlier this month, the Air Jordan 1 is quickly moving on to its next 2.0 with the forthcoming Game Royal colorway. Hued in the signature blue much like that of its predecessor, the pair lies heavily familiar even despite the tweak in color blocking. And thanks to these very changes, it effectively eludes the 2018 rendition’s oft-mentioned Fragment association as it more aggressively alternates between the colorful and neutral. The toe box here dyes entirely in a the cool tone, matching the more subtle hits at the ankle and the tread. ', 
            author: 'Michael Le', 
            img: 'https://sneakernews.com/wp-content/uploads/2020/04/Air-Jordan-1-Game-Royal-2020-555088_041-5.jpg',
            releaseDate: 'May 9th, 2020' 
        }
    ]
    

    return (
        <div className="posts-container">
            {blogPosts.map((post, i) => <Post key={i} i={i} post={post} />)}
        </div>
    )
}

export default Posts