import React, { Component } from 'react';

import api from '../services/api';

import './Feed.css';
import { list } from 'postcss';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article> 
                    <header> 
                        <div className="user-info">
                            <span> André Jaccon</span>
                            <span className="place"> São Paulo </span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/247670_01_healsi_pet.jpg" alt="Imagem" />
                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>
                        <strong> 900 curtidas</strong>
                        <p> 
                            Um post muita legal da OmniStack!
                            <span> #react #OmniStack #top</span> 
                        </p>
                    </footer>
                </article>
            </section>
        )
    }
}

export default Feed;